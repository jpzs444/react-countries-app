import { Link } from "react-router-dom";

const CountryCard = ({ countryData, countriesData }) => {
  // TODO Finalize styling the card: fix images to fit, make all cards have same size (maybe use grid)
  return (
    <Link to={`/details?country=${countryData.name.common}`} state={{ countryData: countryData, countriesData: countriesData }}>
      <button type="button" className="flex flex-col w-full h-[330px] bg-white-custom outline outline-0 rounded-md overflow-hidden text-left shadow-md">
          <div className="w-full h-[150px] /*outline outline-1*/">
            <img src={countryData.flags.png} alt={countryData.flags.alt} className="w-full h-full object-cover"/>
          </div>
          <div className="p-6 text-sm w-full">
            <h2 className="font-nunito font-extrabold text-base leading-5">{countryData.name.common}</h2>
            <p className="pt-4 font-semibold">Population: <span className="font-normal">{countryData.population.toLocaleString()}</span></p>
            <p className="pt-0.5 font-semibold">Region: <span className="font-normal">{countryData.region}</span></p>
            <p className="pt-0.5 font-semibold">Capital: <span className="font-normal">{countryData.capital.length ? countryData.capital : (<span className="italic">No information</span>)}</span></p>
          </div>
      </button>
    </Link>
  )
}

export default CountryCard