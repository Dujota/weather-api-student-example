import * as weatherService from './services/weatherService';

import WeatherSearch from './components/WeatherSearch/WeatherSearch';


const App = () => {
  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    console.log('Data:', data);
  };

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
    </main>
  );
};

export default App;
