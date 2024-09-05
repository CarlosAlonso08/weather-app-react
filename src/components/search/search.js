import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { geoAPIOptions, GEO_URL } from "../../api/api"

const Search = ({ onSearchChange }) => {
    // Defining the variables for the city search for GEO API
    const [searchQuery, setSearchQuery] = useState(null);
    // Handle all the events for the search bar
    const handleOnChange = (searchQuery) => {
        setSearchQuery(searchQuery);
        onSearchChange(searchQuery);
    }
    // Doing a API call to get the city information with parameters for a more precise search
    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err))
    };

    return (
        // Showing the results and preventing the multiple requests
        <AsyncPaginate
            placeholder="Search city"
            debounceTimeout={600}
            value={searchQuery}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}
export default Search;