import { useState, useEffect, useRef } from "react";
import Logo from "./assets/logo-white.svg";
import Form from "./components/form/form";
import WeatherDataContainer from "./components/weatherDataContainer/weatherDataContainer";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState();
  const inputRef = useRef();
  const key = "Your api key";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    let sendData = `${latitude},${longitude}`;

    if (inputRef.current.value) {
      sendData = inputRef.current.value;
    }

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${sendData}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => alert(error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }
  function getWeatherData(event) {
    event.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  return (
    <>
      <img src={Logo} alt="Logo" className="position-absolute" />
      <div className="position-absolute top-50 start-50 translate-middle ">
        <Form getWeatherData={getWeatherData} ref={inputRef} />
        <WeatherDataContainer data={weatherData} />
      </div>
    </>
  );
}

export default App;
