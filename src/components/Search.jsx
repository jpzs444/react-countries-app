import { useState } from "react"

const Search = ({ onSearchChange, isReset }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (event) => {
    setSearchValue(event.target.value);
    onSearchChange(event.target.value);
  }

  console.log(searchValue)
  
  return (
    <div className="search-div relative">
      <ion-icon name="search-sharp"></ion-icon>
      <input 
        id="search" 
        name="search" 
        type="search" 
        placeholder="Search for a country..."
        onChange={handleOnChange}
        className="w-full pl-[4.5rem] pr-[2rem] py-3 outline outline-0 bg-white-custom rounded-md shadow-md placeholder:font-nunito placeholder:font-normal placeholder:text-sm placeholder:opacity-70 font-nunito font-semibold text-sm text-dark-gray appearance-none md:w-[400px] xl:w-[486px]"
        value={isReset ? "" : searchValue}
      />
    </div>
  )
}

export default Search