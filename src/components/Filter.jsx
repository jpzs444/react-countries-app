import { useState } from "react";

const Filter = ({ onFilterChange, isReset, theme }) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleOnChange = (event) => {
    setSelectedRegion(event.target.value);
    onFilterChange(event.target.value);
  }

  console.log(selectedRegion);
  console.log('IN FILTER', theme);

  return (
    <div className="filter-div">
      <select 
        id="regions" 
        name="regions" 
        onChange={handleOnChange} 
        value={ isReset ? "" : selectedRegion}
        className={`${theme === 'dark' ? 'select-img-white' : 'select-img-black'} select-default w-3/5 py-3 px-6 text-sm outline outline-none rounded-md shadow-md dark:shadow-lg bg-white-custom dark:bg-dark-blue appearance-none font-nunito text-dark-gray dark:text-very-light-gray hover:cursor-pointer md:w-full md:pl-6 md:pr-16`}
      >
        <option value="" hidden>
          Filter by Region
        </option>
        <option value="All" className="font-semibold dark:font-normal">
          All
        </option>
        <option value="Africa" className="font-semibold dark:font-normal">
          Africa
        </option>
        <option value="Americas" className="font-semibold dark:font-normal">
          America
        </option>
        <option value="Antarctic" className="font-semibold dark:font-normal">
          Antarctic
        </option>
        <option value="Asia" className="font-semibold dark:font-normal">
          Asia
        </option>
        <option value="Europe" className="font-semibold dark:font-normal">
          Europe
        </option>
        <option value="Oceania" className="font-semibold dark:font-normal">
          Oceania
        </option>
      </select>
    </div>
  )
}

export default Filter