import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit'; //snowIcon
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function WeatherWidget({weatherInfo}){

    // let weatherInfo={ //creatng an sample obj to fetch necessary ddata
    //     city: "Delhi",
    //     temp: 27.21,
    //     humidity: 90,
    //     feels_like: 31.34,
    //     pressure: 1012,
    //     wind: 0.25,
    //     weather: "clear sky",

    // } 

    const INIT_URL='https://images.unsplash.com/photo-1553649084-3e42773ff0e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D'
    // const HOT_URL='https://media.istockphoto.com/id/855554502/photo/paradise-tropical-beach-palm.jpg?s=1024x1024&w=is&k=20&c=yZYkz5xXWYghzkoekYZsxVfFLHFYYWH46cUfIO3yfZE=';  //https://images.unsplash.com/photo-1553649084-3e42773ff0e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D
    const SNOW_URL='https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww';
    const HAZE_URL='https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SEFaRXxlbnwwfHwwfHx8MA%3D%3D';
    const CLOUD_URL='https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWR5fGVufDB8fDB8fHww';
    const RAIN_URL='https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=';
    const OVERCLOUD_URL='https://media.istockphoto.com/id/157527872/photo/storm-cloud.webp?b=1&s=170667a&w=0&k=20&c=1PYZ-Fa-c1jHTnwCMHTKxPQrKr-fOFnpt5pmeibzkKc='

    return(
        <div>
             <Card sx={{ maxWidth: 345 }}>
            {/* <b> <p>{weatherInfo.weather}</p></b> */}
      <CardMedia
        component="img"
        alt="clear sky"
        height="150"
        image={ 
          (weatherInfo.weather == 'clear sky') 
          ? `${INIT_URL}` 
          : (weatherInfo.weather == 'light snow') 
          ? `${SNOW_URL}` 
          : (weatherInfo.weather == 'haze')
          ? `${HAZE_URL}`
          : (weatherInfo.weather == 'light rain')
          ? `${RAIN_URL}`
          : (weatherInfo.weather == 'overcast clouds')
          ? `${OVERCLOUD_URL}`
          : `${SNOW_URL}` 
      }
        
      />
      
      <CardContent>
        <Typography gutterBottom variant="p" component="span">
          <b>{weatherInfo.city} &nbsp; { 
          (weatherInfo.weather== 'clear sky'  /**if err then use () */
           ? <WbSunnyIcon />
            : weatherInfo.weather== 'light rain'
             ? <ThunderstormIcon /> 
            :weatherInfo.weather== 'light snow'
            ? <AcUnitIcon/> 
          : <CloudIcon /> )}
          </b>
              </Typography>
              
                <Typography gutterBottom variant='p' component='span'>  
            <div className="temp">Temp: <b>{weatherInfo.temp}°C</b></div> 
            <div className="feels">Feels like:  <i>{weatherInfo.feels_like}&deg;C</i></div>
            <div className="humid">Humidity:  <i>{weatherInfo.humidity}%</i></div>
            <div className="wind">Wind Speed: <i>{weatherInfo.wind}km/h</i></div>
            <div className="pressure">Pressure:  <i>{weatherInfo.pressure}</i>mb</div>
        
        </Typography>
        
      </CardContent>
      </Card>                
        </div>
    )
}