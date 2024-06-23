import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherWidget from "./WeatherWidget";

export default function WeatherApp(){
    const[weatherData, setWeatherData]=useState({
        city: "Delhi",
        temp: 27.21,
        humidity: 90,
        feels_like: 31.34,
        pressure: 1012,
        wind: 0.25,
        weather: "clear sky",
    });

    let updateInfo=(newData)=>{
        setWeatherData(newData);

    }
    return(
        <div className="weather-app">
            <h2>Weather App</h2>
            <SearchBar updateInfo={updateInfo}/> <br />
            <WeatherWidget  weatherInfo={weatherData}/>
        </div>
    )
}