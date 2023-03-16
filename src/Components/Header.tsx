import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components';

const HeaderHTML  = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1rem;
`

interface HeaderProps {
    name: string;
    country: string;
}

export const Header = (props: HeaderProps) =>{
    return (
        <HeaderHTML>
            <FontAwesomeIcon icon={faLocationDot} />
            <h2>{props.name} , {props.country}</h2>
        </HeaderHTML>
    )
}