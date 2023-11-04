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
    <div className="mt-4">
      <ul>
        {data[neededData].map((country, index) => (
          <li key={index}><CountryCard countryData={country} countriesData={data[0]} /></li>
        ))}

        {data[1] && data[1].length === 0 && <p>No results found.</p>}
      </ul>
    </div>
  )
}

export default CountryList