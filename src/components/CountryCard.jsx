import { Link } from "react-router-dom";

const CountryCard = ({ countryData, countriesData }) => {
  return (
    <Link 
      to={`/details?country=${countryData.name.common}`} 
      state={{ countryData: countryData, countriesData: countriesData }}
      // For linking to the top of the page
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "instant",
        })
      }}
    >
      <button type="button" className="flex flex-col w-full h-[330px] bg-white-custom dark:bg-dark-blue outline outline-0 rounded-md overflow-hidden text-left shadow-md dark:shadow-lg hover:-translate-y-1 hover:shadow-dark-blue dark:hover:shadow-gray-800 hover:transition-all hover:duration-300">
          <div className="w-full h-[150px] /*outline outline-1*/ shadow-sm">
            <img src={countryData.flags.png} alt={countryData.flags.alt} className="w-full h-full object-fill"/>
          </div>
          <div className="p-6 text-sm w-full">
            <h2 className="font-nunito font-extrabold text-lg leading-5">{countryData.name.common}</h2>
            <p className="pt-4 font-semibold">
              Population: <span className="font-normal dark:font-light">{countryData.population.toLocaleString()}</span>
            </p>
            <p className="pt-0.5 font-semibold">
              Region: <span className="font-normal dark:font-light">{countryData.region}</span>
            </p>
            <p className="pt-0.5 font-semibold">
              Capital: {countryData.capital.length ? (<span className="font-normal dark:font-light">{countryData.capital.join(", ")}</span>) : (<span className="font-normal dark:font-light italic">No information</span>)}
            </p>
          </div>
      </button>
    </Link>
  )
}

export default CountryCard