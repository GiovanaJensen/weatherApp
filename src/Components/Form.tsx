import {useState} from 'react';
import axios from 'axios';
import {Weather} from './Weather';

type CityProperties = {
    country: string;
    lat: number;
    lon: number;
}

export const Form = () => {
    const [city, setCity] = useState('');
    const [cityProperties, setCityProperties]  = useState<CityProperties | null>(null);

    const api_key = "2a13aa0a341607040488e8501fc48eb5";

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api_key}`
        getData(api);  
    }
    
    const getData = async (api:string) => {
        try{
        const response = await axios.get(api);
        setCityProperties(response.data[0]);
        }catch (error){
        console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city-name">City Name: </label>
                <input 
                type="text" 
                id="city-name" 
                name="city-name" 
                placeholder="Ex: Oslo" 
                value={city}
                onChange={event => setCity(event.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            {cityProperties ? (
                <Weather lat={cityProperties.lat} lon={cityProperties.lon} />
            ) : (
                <p>Loading...</p>
            )}
        </>
        
    )
}