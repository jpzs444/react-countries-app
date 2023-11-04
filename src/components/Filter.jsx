import { useState } from "react";

const Filter = ({ onFilterChange, isReset }) => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleOnChange = (event) => {
    setSelectedRegion(event.target.value);
    onFilterChange(event.target.value);
  }

  console.log(selectedRegion);

  return (
    <div>
      <select 
        id="regions" 
        name="regions" 
        onChange={handleOnChange} 
        value={ isReset ? "" : selectedRegion}
      >
        <option value="" hidden>Filter by Region</option>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default Filter