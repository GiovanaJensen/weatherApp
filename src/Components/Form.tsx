import {useState} from 'react';
import axios from 'axios';
import {Weather} from './Weather';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const FormHTML = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    margin-left: 1rem;
    background: transparent;
    border-radius: 1rem;
    border: 1px solid #EEEEEE;
    padding: 0.5rem;
`

const Button = styled.button`
    background: transparent;
    border: none;
    color: #fefefe;
`

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
            <FormHTML onSubmit={handleSubmit}>
                <label htmlFor="city-name">City Name: </label>
                <Input 
                type="text" 
                id="city-name" 
                name="city-name" 
                placeholder="Ex: Oslo" 
                value={city}
                onChange={event => setCity(event.target.value)}
                />
                <Button type="submit"><FontAwesomeIcon icon={faSearch}/></Button>
            </FormHTML>
            {cityProperties ? (
                <Weather lat={cityProperties.lat} lon={cityProperties.lon} />
            ) : (
                <p>Loading...</p>
            )}
        </>
        
    )
}