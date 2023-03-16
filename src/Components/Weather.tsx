import {useState, useEffect} from 'react';
import axios from 'axios';
import { Root } from '../interfaces/IWeather';
import {Card} from './Card';
import { Header } from './Header';
import { Main } from './Main';

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
                    <Header 
                        name={weather.name} 
                        country={weather.sys.country}
                    />
                    <Main 
                        img={` https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                        temp={weather.main.temp}
                    />
                    <Card 
                        windSpeed={weather.wind.speed} 
                        visibility={weather.visibility}
                        humidity={weather.main.humidity}
                        feelsLike={weather.main.feels_like}
                    />
                </div>
            ): (
                <p>Loading...</p>
            )}
            
        </div>
            
    )
}