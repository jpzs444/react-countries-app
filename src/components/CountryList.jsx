import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

const CountryList = ({ data }) => {
  // For selecting which data should be displayed, all or filtered
  // data[0] is countries, data[1] is filteredCountries
  const [neededData, setNeededData] = useState(0)

  useEffect(() => {
    if (data[1]) {
      setNeededData(1);
    }
  }, [data]);

  return (
    <div className="country-list-div pt-8 px-16 bg-very-light-gray xs:mx-auto max-md:mx-auto md:pt-12 lg:px-16">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 md-2:grid-cols-3 lg:grid-cols-4 lg:gap-9 xl:gap-16">
        {data[neededData].map((country, index) => (
          <li key={index}><CountryCard countryData={country} countriesData={data[0]} /></li>
        ))}
      </ul>
      {data[1] && data[1].length === 0 && 
          <p className="text-center text-sm mt-10">No results found.</p>
      }
    </div>
  )
}

export default CountryList