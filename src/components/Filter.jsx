import { useState } from "react";

const Filter = ({ onFilterChange, isReset }) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleOnChange = (event) => {
    setSelectedRegion(event.target.value);
    onFilterChange(event.target.value);
  }

  console.log(selectedRegion);

  return (
    <div className="filter-div mt-10">
      {/* <ion-icon name="chevron-down-sharp"></ion-icon> */}
      <select 
        id="regions" 
        name="regions" 
        onChange={handleOnChange} 
        value={ isReset ? "" : selectedRegion}
        className="w-3/5 py-3 px-6 text-sm outline outline-none rounded-md shadow-md bg-white-custom appearance-none"
      >
        <option value="" hidden>
          Filter by Region
        </option>
        <option value="All" className="">
          All
        </option>
        <option value="Africa" className="">
          Africa
        </option>
        <option value="Americas" className="">
          America
        </option>
        <option value="Antarctic" className="">
          Antarctic
        </option>
        <option value="Asia" className="">
          Asia
        </option>
        <option value="Europe" className="">
          Europe
        </option>
        <option value="Oceania" className="">
          Oceania
        </option>
      </select>
    </div>
  )
}

export default Filter