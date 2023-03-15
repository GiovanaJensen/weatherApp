import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CardProps {
    windSpeed: number;
    visibility: number;
    humidity: number;
    timezone: number;
}

export const Card = (props:CardProps) => {
    return (
        <section>
           <div>
           {/* <FontAwesomeIcon icon="fa-solid fa-temperature-three-quarters" /> */}
             <p>Wind Speed: {props.windSpeed}</p>
           </div>
           <div>
             <img src="" alt="" />
             <p>Visibility: {props.visibility}</p>
           </div>
           <div>
              <img src="" alt="" />
              <p>Humidity: {props.humidity}</p>
           </div>
           <div>
              <img src="" alt="" />
              <p>Timezone: {props.timezone}</p>
           </div>
        </section>
    )
}