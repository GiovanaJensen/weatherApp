interface WeatherProps {
    lat: number,
    lon:number,
  }

export const Weather = (props:WeatherProps): JSX.Element => {

    // example = https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

    return(
        <div>
            <h1>Latitude: {props.lat}</h1>
            <h1>Longitude: {props.lon}</h1>
        </div>
    )
}