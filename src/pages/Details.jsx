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
    // For linking to the top of the page
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }

  // For getting last property from nativeName. ex. fil, nld
  let nativeCode = Object.keys(countryData.name.nativeName)
  console.log("Native: ", nativeCode);
  nativeCode = nativeCode[nativeCode.length - 1];

  // For getting currency names AND storing them in currencyNames
  let currencyCodes = Object.keys(countryData.currencies);
  console.log("Currency Codes: ", currencyCodes);
  let currencyNames = currencyCodes.map(code => countryData.currencies[code].name);
  console.log("Currency Names: ", currencyNames);

  // For getting language names AND storing them in languageNames
  let languageCodes = Object.keys(countryData.languages);
  console.log("Language Codes: ", languageCodes);
  let languageNames = languageCodes.map(code => countryData.languages[code]);
  console.log("Language Names: ", languageNames);

  return (
    <div className="max-w-[1440px] mx-auto px-6 pt-8 pb-16 lg:px-16">
      <button type="button" className="px-6 py-1.5 flex items-center gap-1.5 font-nunito text-sm text-very-dark-blue-text dark:text-white-custom bg-white-custom dark:bg-dark-blue outline outline-none rounded-md drop-shadow-md dark:drop-shadow-lg hover:text-opacity-80 dark:hover:text-opacity-80 hover:drop-shadow-sm dark:hover:drop-shadow-sm transition-all md:text-base md:px-9 md:gap-2.5" onClick={goBack}>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <p>Back</p>
      </button>

      {/* For country details: flag and info */}
      <article className="details-article mt-14 text-sm grid grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2 lg:gap-14 xl:max-w-full xl:gap-28">
        {/* For flag */}
        <div className="flag-div w-full h-[12.5rem] drop-shadow-md dark:drop-shadow-lg">
          <img src={countryData.flags.png} className="w-full h-full object-contain"/>
        </div>
        {/* For info */}
        <article className="lg:flex lg:flex-col lg:justify-center">
          <p className="mb-5 font-bold text-xl md:mb-7 md:text-2xl lg:text-3xl">
            {countryData.name.common}
          </p>
          
          <div className="grid grid-cols-1 gap-10 mb-10 md:text-base lg:grid-cols-2 lg:gap-5 xl:gap-20">
            <div>
              <p className="font-semibold">
                Native Name: <span className="font-normal dark:font-light">{countryData.name.nativeName[nativeCode].common}</span>
              </p>
              <p className="pt-2 font-semibold">
                Population: <span className="font-normal dark:font-light">{countryData.population.toLocaleString()}</span>
              </p>
              <p className="pt-2 font-semibold">
                Region: <span className="font-normal dark:font-light">{countryData.region}</span>
              </p>
              <p className="pt-2 font-semibold">
                Sub Region: {countryData.subregion ? (<span className="font-normal dark:font-light">{countryData.subregion}</span>) : (<span className="font-normal dark:font-light italic">No information</span>)}
              </p>
              <p className="pt-2 font-semibold">
                Capital: {countryData.capital.length ? (<span className="font-normal dark:font-light">{countryData.capital.join(", ")}</span>) : (<span className="font-normal dark:font-light italic">No information</span>)}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Top Level Domain: <span className="font-normal dark:font-light">{countryData.tld.join(", ")}</span>
              </p>
              <p className="pt-2 font-semibold">
                Currencies: {currencyNames.length ? (<span className="font-normal dark:font-light">{currencyNames.join(", ")}</span>) : (<span className="font-normal dark:font-light italic">No information</span>)}
              </p>
              <p className="pt-2 font-semibold">
                Languages: <span className="font-normal dark:font-light">{languageNames.join(", ")}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row">
            <p className="/*mt-10*/ text-base font-semibold lg:mt-1.5">Border Countries:</p>
            <ul className="border-countries grid grid-cols-3 gap-2 xl:grid-cols-4">
              {countryData.borders.map((border, index) => (
                <li key={index}><BorderButton borderCode={border} countriesData={countriesData} /></li>
              ))}
            </ul>
            {countryData.borders.length === 0 && <p className="md:text-base lg:mt-1.5">No border countries</p>}
          </div>
        </article>
      </article>
    </div>
  )
}

export default Details