import {useState, useEffect} from 'react';
import axios from 'axios';
import { Root } from '../interfaces/IWeather';
import {Card} from './Card';

interface WeatherProps {
    lat: number,
    lon:number,
}

export const Weather = (props: WeatherProps): JSX.Element => {

    const [weather, setWeather] = useState<Root | null>(null);

    const api_key = "2a13aa0a341607040488e8501fc48eb5";
    const units = "metric";
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&units=${units}&appid=${api_key}`;

    useEffect(() => {
        const getData = async () => {
          try{
            const response = await axios.get(api);
            setWeather(response.data);
            console.log(api)
          }catch (error){
            console.log(error)
          }
        }
    
        getData();
      }, [api])

    return(    
        <div>
            {weather ? (
                <div className="weather">
                    <h2>{weather.name} , {weather.sys.country}</h2>
                    <div>
                        <img src={` https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
                        <h3>{weather.main.temp}°C</h3>
                    </div>
                    <section>
                        <p>Temp Min: {weather.main.temp_min}</p>
                        <p>Temp Max: {weather.main.temp_max}</p>
                    </section>
                    <Card 
                        windSpeed={weather.wind.speed} 
                        visibility={weather.visibility}
                        humidity={weather.main.humidity}
                        timezone={weather.timezone}
                    />
                    <section>
                        <p>{weather.weather[0].main}</p>
                        <p>{weather.weather[0].description}</p>
                    </section>
                    
                </div>
            ): (
                <p>Loading...</p>
            )}
            
        </div>
            
    )
}