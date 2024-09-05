import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"
// Array to show the correct day
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    // Obteining the current day of the week and parsing into a string
    const dayInAWeek = new Date().getDay();
    // Showing the forecast days unsing the current day as the start of the week
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <>
            <label className="title">Daily Forecast</label>
            {/* Using accordions to make a better looking view for the forecast days */}
            <Accordion allowZeroExpanded>
                {/* Obtaining the first 7 results from the forecast API response and mapping them to show each one of them */}
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                    <label className="day">{forecastDays[index]}</label>
                                    {/* Using a function to make the description upper case each start of words */}
                                    <label className="description">{item.weather && item.weather[0].description && ( 
                                        item.weather[0].description
                                            .split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
                                            .join(' ') 
                                    )}</label>
                                    {/* Using toFixed to show a more precise temperature */}
                                    <label className="min-max">{item.main.temp_min.toFixed(1)}°C / {item.main.temp_max.toFixed(1)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        {/* Using a accordion item panel to show a more detailed forecast for the next days */}
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}
export default Forecast;