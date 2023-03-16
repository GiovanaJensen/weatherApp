interface MainProps {
    img: string;
    temp: number;
}

export const Main = (props:MainProps) => {
    return (
        <main>
            <img src={props.img} alt="" />
            <h3>{props.temp}°C</h3>
        </main>
        
    )
}