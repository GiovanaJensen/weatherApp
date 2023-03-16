import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faEye, faTemperatureThreeQuarters, faWind } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
    windSpeed: number;
    visibility: number;
    humidity: number;
    feelsLike: number;
}

export const Card = (props:CardProps) => {
    return (
        <section>
           <div>
              <FontAwesomeIcon icon={faWind} />
              <p>Wind Speed: {props.windSpeed}</p>
           </div>
           <div>
             <FontAwesomeIcon icon={faEye} />
             <p>Visibility: {props.visibility}</p>
           </div>
           <div>
              <FontAwesomeIcon icon={faDroplet} />
              <p>Humidity: {props.humidity}</p>
           </div>
           <div>
              <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
              <p>Feels like: {props.feelsLike}</p>
           </div>
        </section>
    )
}