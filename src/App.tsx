import React, { useState } from "react";

import styles from "./styles/Scss/App.module.scss";
import Form from "./components/Form/Form";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [weather, setWeather] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  return (
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
  );
}

export default App;
