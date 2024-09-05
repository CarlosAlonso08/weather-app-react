// Definig the headers and method for the GEO API
export const geoAPIOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY,
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}

}
// Exporting the URL's of the API's and key for the use of GEO and Weather API's
export const GEO_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WTHR_URL = "https://api.openweathermap.org/data/2.5";
export const WTHR_KEY = process.env.REACT_APP_WTHR_KEY;;
