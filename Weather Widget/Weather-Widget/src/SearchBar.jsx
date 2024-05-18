import { useState } from "react";
import TextField from '@mui/material/TextField';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Button from '@mui/material/Button';

export default function SearchBar({ updateInfo }){

    let[city, setCity]=useState(""); //getting inp city value
    let[error, setError]=useState(false);

    let apiKey='ddbd2ff09e4b94d5367fbca27e5e3e75';
    let url=`https://api.openweathermap.org/data/2.5/weather`;  //http://api.openweathermap.org/geo/1.0/direct

    let getWeatherInfo=async()=>{
        try{
            let res= await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`); //shift city state var up or use a city parameter
        let data= await res.json();
        // console.log(`data= ${data}`);

        let result={ //creatng an obj to fetch necessary ddata
            city: city,
            temp: data.main.temp,
            humidity: data.main.humidity,
            feels_like: data.main.feels_like,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            weather: data.weather[0].description,

        }
        // console.log(result);
        return result;
        } catch(e){
            // console.log(`Error= ${e}`);
            throw e;
            
        }

    }
  
    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
        // console.log(city);
        setCity("");
        let newCity= await getWeatherInfo(); /** */
        if(newCity){
            updateInfo(newCity); //sending to setWeatherData in weathApp

        } else{
            console.log("Invalid input!");
        }
        } catch(e){
            console.log(e);
            setError(true);
            
        }
        

    }

    
    return(
        <div> 
            <form>
            <TextField id="city"
             name="cityName" 
             value={city} 
             onChange={handleChange}
             label="Search by City Name" 
             variant="standard"
              required /> &nbsp; <br /> <br />
            <Button variant="contained" endIcon={<SearchSharpIcon />} type="submit" onClick={handleSubmit}>Search</Button>
            </form>

            <div className="error">
                {
                    (error && <h4 style={{color: 'red'}}><b>Invalid Input!</b></h4> )
                }
                

            </div>
         
        </div>
    )
}