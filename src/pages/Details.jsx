import { useLocation, useNavigate } from "react-router-dom";
import { BorderButton } from "../components";

const Details = () => {
  // For getting data from CountryCard
  const location = useLocation();
  const { countryData, countriesData } = location.state;
  console.log(location);

  // For back button
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <button type="button" className="bg-slate-200 px-2 shadow-xl" onClick={goBack}>Back</button>
      <p>{countryData.name.common}</p>
      <p className="mt-4">Border Countries:</p>
      <ul>
        {countryData.borders.map((border, index) => (
          <li key={index}><BorderButton borderCode={border} countriesData={countriesData} /></li>
        ))}
        {countryData.borders.length === 0 && <p>No border countries</p>}
      </ul>
    </div>
  )
}

export default Details