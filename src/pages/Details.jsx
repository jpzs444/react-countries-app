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
    <div className="max-w-[1440px] mx-auto px-6 pt-8 pb-16">
      <button type="button" className="px-6 py-1.5 flex items-center gap-1.5 font-nunito text-sm bg-white-custom drop-shadow-md" onClick={goBack}>
        <ion-icon name="arrow-back-outline"></ion-icon>
        <p>Back</p>
      </button>

      {/* For country details: flag and info */}
      <article className="mt-14 text-sm grid grid-cols-1  sm:grid-cols-2 gap-8">
        {/* For flag */}
        <div className="w-full h-[12.5rem]">
          <img src={countryData.flags.png} className="w-full h-full object-fill"/>
        </div>
        {/* For info */}
        <article>
          <p className="mb-5 font-bold text-xl">
            {countryData.name.common}
          </p>
          
          <div className="grid grid-cols-1 gap-10">
            <div>
              <p className="font-semibold">
                Native Name: <span className="font-normal">{countryData.name.nativeName[nativeCode].common}</span>
              </p>
              <p className="pt-2 font-semibold">
                Population: <span className="font-normal">{countryData.population.toLocaleString()}</span>
              </p>
              <p className="pt-2 font-semibold">
                Region: <span className="font-normal">{countryData.region}</span>
              </p>
              <p className="pt-2 font-semibold">
                Sub Region: {countryData.subregion ? (<span className="font-normal">{countryData.subregion}</span>) : (<span className="font-normal italic">No information</span>)}
              </p>
              <p className="pt-2 font-semibold">
                Capital: {countryData.capital.length ? (<span className="font-normal">{countryData.capital.join(", ")}</span>) : (<span className="font-normal italic">No information</span>)}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Top Level Domain: <span className="font-normal">{countryData.tld.join(", ")}</span>
              </p>
              <p className="pt-2 font-semibold">
                Currencies: {currencyNames.length ? (<span className="font-normal">{currencyNames.join(", ")}</span>) : (<span className="font-normal italic">No information</span>)}
              </p>
              <p className="pt-2 font-semibold">
                Languages: <span className="font-normal">{languageNames.join(", ")}</span>
              </p>
            </div>
          </div>

          <div>
            <p className="mt-10 text-base font-semibold">Border Countries:</p>
            <ul className="border-countries mt-3 grid grid-cols-3 gap-2">
              {countryData.borders.map((border, index) => (
                <li key={index}><BorderButton borderCode={border} countriesData={countriesData} /></li>
              ))}
            </ul>
            {countryData.borders.length === 0 && <p>No border countries</p>}
          </div>
        </article>
      </article>
    </div>
  )
}

export default Details