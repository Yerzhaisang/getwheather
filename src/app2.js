import logo from './logo.svg';
import './App.css';

function App() {
  const api_key = "309d1a9747ca99e413c055803b0c1b9c";
  const city = 'Oral';
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${api_key}`);
  const response = await api_call.json();
  const temperature = Math.floor(response.main.temp - 273.15);
  const country = response.sys.country;
  const description = response.weather[0].description;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to
        </p>
      </header>
    </div>
  );
}

export default App;
