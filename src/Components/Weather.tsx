import {useState, useEffect} from 'react';
import axios from 'axios';

interface WeatherProps {
    lat: number,
    lon:number,
}

export const Weather = (props: WeatherProps): JSX.Element => {

    const [weather, setWeather] = useState<null | any>(null);

    const api_key = "2a13aa0a341607040488e8501fc48eb5";
    // const lat = 50.84238515061159;
    // const lon =  4.362321252794411;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${api_key}`;

    // const getData = async () => {
    //     try{
    //         const response  = await axios.get(api);
    //         console.log(api);
    //         setWeather(response.data);
    //         console.log(weather);
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
    
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
                <ul>
                    <li>Lat: {weather.coord.lat}</li>
                    <li>Lon: {weather.coord.lon}</li>
                    <li>Name: {weather.name}</li>
                    <li>{weather.main.temp}</li>
                    <li>{weather.sys.country}</li>
                </ul>
            ): (
                <p>Loading...</p>
            )}
            
        </div>
            
    )
}