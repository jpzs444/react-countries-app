import { Link } from "react-router-dom";

const BorderButton = ({ borderCode, countriesData }) => {
  // borderCode is a string
  const borderData = countriesData.filter(country => country.cca3 === borderCode);
  console.log(borderData);

  return (
    <Link 
      to={`/details?country=${borderData[0].name.common}`} 
      state={{ countryData: borderData[0], countriesData: countriesData }}
      // For linking to the top of the page
      onClick={() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }}
    >
      <button type="button" className="w-full h-full p-2 bg-white-custom dark:bg-dark-blue outline outline-none rounded-md drop-shadow-md font-nunito text-very-dark-blue-text dark:text-white-custom hover:-translate-y-0.5 hover:shadow-dark-blue dark:hover:shadow-gray-800 hover:transition-all hover:duration-300">
          {borderData[0].name.common}
      </button>
    </Link>
  )
}

export default BorderButton