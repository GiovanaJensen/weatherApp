import {useState, useEffect} from 'react';
import axios from 'axios';
import {Weather} from './Components/Weather';


type City = {
  country: string;
  lat: number;
  lon: number;
}

function App() {

  const [city, setCity] = useState<City | null>(null);

  const api_key = "2a13aa0a341607040488e8501fc48eb5";
  const city_name = "amsterdan";
  const api = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=${api_key}`

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await axios.get(api);
        setCity(response.data[0]);
      }catch (error){
        console.log(error)
      }
    }

    getData();
  }, [api])
    
  
  return (
    <div className="App">
    {city ? (
      <Weather lat={city.lat} lon={city.lon} />
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default App
