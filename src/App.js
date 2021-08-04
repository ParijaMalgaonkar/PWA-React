import React, {useState} from 'react'
import { fetchWeather } from './API/fetchWeather';
import './App.css'

export default function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
    }
    
    return (
        <div className="main-container">
            <h1 className="title">Weather Updates</h1>
            <input type="text" className="search" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;</sup>
                    </div>
                    <div className="info">
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>

            )}
        </div>
    );
}
