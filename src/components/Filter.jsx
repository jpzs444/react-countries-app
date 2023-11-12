import { useState } from "react";

const Filter = ({ onFilterChange, isReset }) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleOnChange = (event) => {
    setSelectedRegion(event.target.value);
    onFilterChange(event.target.value);
  }

  console.log(selectedRegion);

  return (
    <div className="filter-div">
      {/* <ion-icon name="chevron-down-sharp"></ion-icon> */}
      <select 
        id="regions" 
        name="regions" 
        onChange={handleOnChange} 
        value={ isReset ? "" : selectedRegion}
        className="w-3/5 py-3 px-6 text-sm outline outline-none rounded-md shadow-md bg-white-custom appearance-none font-nunito font-semibold text-dark-gray hover:cursor-pointer md:w-full md:pl-6 md:pr-16"
      >
        <option value="" hidden>
          Filter by Region
        </option>
        <option value="All" className="font-semibold">
          All
        </option>
        <option value="Africa" className="font-semibold">
          Africa
        </option>
        <option value="Americas" className="font-semibold">
          America
        </option>
        <option value="Antarctic" className="font-semibold">
          Antarctic
        </option>
        <option value="Asia" className="font-semibold">
          Asia
        </option>
        <option value="Europe" className="font-semibold">
          Europe
        </option>
        <option value="Oceania" className="font-semibold">
          Oceania
        </option>
      </select>
    </div>
  )
}

export default Filter