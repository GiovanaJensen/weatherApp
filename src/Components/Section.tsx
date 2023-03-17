import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faEye, faTemperatureThreeQuarters, faWind, faCloud } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

interface SectionProps {
    icon: string;
    text: string;
    value: number;
}


const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Section = (props:SectionProps) => {

    let getIcon = (): React.ReactElement => {
        switch(props.icon){
            case 'faWind':
                return <FontAwesomeIcon icon={faWind} />
                break;
            case 'faDroplet':
                return <FontAwesomeIcon icon={faDroplet} />
                break;
            case 'faEye':
                return <FontAwesomeIcon icon={faEye} />
                break;
            case 'faTemperatureThreeQuarters':
                return <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                break;
            default: 
                return <FontAwesomeIcon icon={faCloud} />
                break;
        }
    }

    return (
            <Div>
              {getIcon()}
              <p>{props.text}: {props.value}</p>
           </Div>
        
        
    )
}