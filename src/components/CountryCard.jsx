import { Link } from "react-router-dom";

const CountryCard = ({ countryData, countriesData }) => {

  return (
    <button type="button">
      <Link to={`/details?country=${countryData.name.common}`} state={{ countryData: countryData, countriesData: countriesData }}>
        <p>{countryData.name.common} &#40;{countryData.region}&#41;</p>
      </Link>
    </button>
  )
}

export default CountryCard