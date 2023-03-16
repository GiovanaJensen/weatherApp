import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faEye, faTemperatureThreeQuarters, faWind } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const SectionHTML = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
` 

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
           <Div>
              <FontAwesomeIcon icon={faWind} />
              <p>Wind Speed: {props.windSpeed}</p>
           </Div>
           <Div>
             <FontAwesomeIcon icon={faEye} />
             <p>Visibility: {props.visibility}</p>
           </Div>
           <Div>
              <FontAwesomeIcon icon={faDroplet} />
              <p>Humidity: {props.humidity}</p>
           </Div>
           <Div>
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
              <p>Feels like: {props.feelsLike}°C</p>
           </Div>
        </SectionHTML>
    )
}