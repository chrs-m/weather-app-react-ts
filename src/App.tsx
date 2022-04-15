import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [weather, setWeather] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  return (
    <div className="App">
      {error && <p>{error}</p>}
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
