import { useState } from "react"

const Search = ({ onSearchChange, isReset }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
    onSearchChange(event.target.value);
  }

  console.log(searchValue)
  
  return (
    <div>
      <input 
        id="search" 
        name="search" 
        type="search" 
        placeholder="Search for a country..."
        onChange={handleOnChange}
        className="px-2 outline outline-2 outline-gray-200"

        value={isReset ? "" : searchValue}
      />
    </div>
  )
}

export default Search