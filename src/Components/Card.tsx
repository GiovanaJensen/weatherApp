import styled from 'styled-components';
import {Section} from './Section';

const SectionHTML = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
` 

interface CardProps {
    windSpeed: number;
    visibility: number;
    humidity: number;
    feelsLike: number;
}

export const Card = (props:CardProps) => {
    return (
        <SectionHTML>
           <Section 
            icon='faWind' 
            text='wind speed'
            value={props.windSpeed}
           />
           <Section 
            icon='faDroplet' 
            text='Humidity'
            value={props.humidity}
           />
           <Section 
            icon='faEye' 
            text='Visibility'
            value={props.visibility}
           />  
           <Section 
            icon='faTemperatureThreeQuarters' 
            text='Feels like'
            value={props.feelsLike}
           />  
        </SectionHTML>
    )
}