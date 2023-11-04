import { Link } from "react-router-dom";

const BorderButton = ({ borderCode, countriesData }) => {
  // borderCode is a string
  const borderData = countriesData.filter(country => country.cca3 === borderCode);
  console.log(borderData);

  return (
    <button type="button">
      <Link to={`/details?country=${borderData[0].name.common}`} state={{ countryData: borderData[0], countriesData: countriesData }}>
        {borderData[0].name.common}
      </Link>
    </button>
  )
}

export default BorderButton