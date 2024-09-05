import "./current-weather.css"

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            {/* Showing the current weather conditions and a bit of the information */}
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather && data.weather[0].description && (
                        data.weather[0].description
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')
                    )}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{data.main.temp.toFixed(1)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="paramenter-label top">Details:</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramenter-label">Feels like</span>
                        <span className="paramenter-value">{data.main.feels_like.toFixed(1)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramenter-label">Max temp</span>
                        <span className="paramenter-value">{data.main.temp_max.toFixed(1)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramenter-label">Min temp</span>
                        <span className="paramenter-value">{data.main.temp_min.toFixed(1)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramenter-label">Wind</span>
                        <span className="paramenter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramenter-label">Humidity</span>
                        <span className="paramenter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="paramenter-label">Pressure</span>
                        <span className="paramenter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;