import { useState, useEffect } from "react";
import { fetchCountriesData } from "../api";
import { CountryList, Filter, Search } from "../components";

const Home = () => {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [resetSelect, setResetSelect] = useState(false);
  const [resetSearch, setResetSearch] = useState(false);

  // For fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountriesData();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [])

  // For filtering data
  const handleOnFilterChange = (selectedRegion) => {
    if (selectedRegion !== "All") {
      const regionCountries = 
        countries
          .slice(0)
          .filter(country => country.region === selectedRegion);

      setFilteredCountries(regionCountries);
      setResetSelect(false);
    } else {
      setFilteredCountries(countries);
    }

    setResetSearch(true);
  }

  // For searching 
  const handleOnSearchChange = (searchValue) => {
    const searchedCountry = countries
      .filter(country => 
        country.name.common.toLowerCase()
        .includes(searchValue.toLowerCase()))

    setFilteredCountries(searchedCountry);
    setResetSelect(true);
    setResetSearch(false);
  }
  
  // For checking logs and store data values for CountryList
  console.log(countries);
  console.log("filtered:", filteredCountries);
  const dataValues = [countries, filteredCountries];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-between mt-6 px-4 bg-very-light-gray">
        {countries && <Search onSearchChange={handleOnSearchChange} isReset={resetSearch} />}
        {countries && <Filter onFilterChange={handleOnFilterChange} isReset={resetSelect} />}
      </div>
      {countries && <CountryList data={dataValues}/>}
    </div>
  )
}

export default Home