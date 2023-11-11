const COUNTRIES_API_URL = "https://restcountries.com/v3.1/";
const COUNTRIES_API_ALL = "all";

export const fetchCountriesData = async () => {
  try {
    const response = await fetch(`${COUNTRIES_API_URL}${COUNTRIES_API_ALL}?fields=name,cca3,borders,flags,population,capital,region,subregion,tld,currencies,languages`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}