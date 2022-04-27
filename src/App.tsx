import React, { useState, useEffect, useMemo } from "react";

import {
  createTheme,
  PaletteMode,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import { getStoredTheme, getThemeOptions, setStoredTheme } from "./utils/theme";

import styles from "./styles/Scss/App.module.scss";
import Form from "./components/Form";
import Forecast from "./components/Forecast";
import ThemeSwitch from "./components/ThemeSwitch";
import Infobox from "./components/Infobox";

function App() {
  const [weather, setWeather] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  const [mode, setMode] = useState<PaletteMode>("light");

  useEffect(() => {
    const storedTheme = getStoredTheme();

    if (storedTheme) {
      setMode(storedTheme);
    }
  }, []);

  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={styles.darkModeContainer}>
        <p className={styles.toggleText}>Dark mode</p>
        <ThemeSwitch
          mode={mode}
          onChange={() => {
            const newMode: PaletteMode = mode === "dark" ? "light" : "dark";
            setMode(newMode);
            setStoredTheme(newMode);
          }}
        />
      </div>

      <Infobox />

      <div className={styles.App}>
        <h1>
          {"{"} Search && Get your weather {"}"}
        </h1>
        {error && (
          <>
            {" "}
            <p className={styles.errorMsg}>{error}</p>
            <Form
              setData={setWeather}
              setLoading={setLoading}
              setError={setError}
            />
            {weather && <Forecast weatherData={weather} />}
          </>
        )}
        {loading && <p>Loading weather...</p>}
        {!error && !loading && (
          <>
            <Form
              setData={setWeather}
              setLoading={setLoading}
              setError={setError}
            />

            {weather && <Forecast weatherData={weather} />}
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
