import styled from "styled-components";

const MainHTML = styled.main`
    display: flex;
    justify-content:center;
    align-items: center;
`

const Img = styled.img`
    height: 30vh;
    object-fit: contain;
`

const H3 = styled.h3`
    font-size: 2rem;
`

interface MainProps {
    img: string;
    temp: number;
}

export const Main = (props:MainProps) => {
    return (
        <MainHTML>
            <Img src={props.img} alt="Temperature Image" />
            <H3>{props.temp}°C</H3>
        </MainHTML>
        
    )
}