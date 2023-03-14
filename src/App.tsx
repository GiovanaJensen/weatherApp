import {useState, useEffect} from 'react';
import axios from 'axios';
import {Weather} from './Components/Weather';

function App() {

  const [weatherData, setWeatherData] = useState<[]>([]);

  const api_key = "2a13aa0a341607040488e8501fc48eb5";
  const city_name = "London";
  const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=${api_key}`

  useEffect(() => {
      axios.get(api)
          .then(response => {
          setWeatherData(response.data);
          console.log(weatherData)
          })
          .catch(error => {
          console.log(error);
          })
  }, [])
  return (
    <div className="App">
      {weatherData.map((item: {name: string, lat:number, lon: number}) =>(
          <div>
              <Weather lat={item.lat}  lon={item.lon}/>
          </div>
      ))}
    </div>
  )
}

export default App
