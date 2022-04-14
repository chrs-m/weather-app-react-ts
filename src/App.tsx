import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Forecast from "./components/Forecast/Forecast";

function App() {
  const [weather, setWeather] = useState<object | null>(null);

  return (
    <div className="App">
      <Form setData={setWeather} />
      {weather && <Forecast weatherData={weather} />}
    </div>
  );
}

export default App;
