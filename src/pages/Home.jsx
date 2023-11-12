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

  // TODO: Adjust text sizes accdg to FEM guide
  // TODO: Adjust Search and Filter sizes
  // TODO: Details Page! XD

  return (
    <div className="max-w-[1440px] mx-auto pt-6 pb-16 lg:pt-10">
      <div className="flex flex-col gap-10 px-4 bg-very-light-gray md:flex-row md:justify-between md:gap-0 lg:px-16">
        {countries && <Search onSearchChange={handleOnSearchChange} isReset={resetSearch} />}
        {countries && <Filter onFilterChange={handleOnFilterChange} isReset={resetSelect} />}
      </div>
      {countries && <CountryList data={dataValues}/>}
    </div>
  )
}

export default Home