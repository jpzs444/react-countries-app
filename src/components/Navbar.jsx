import { Link } from "react-router-dom";

const Navbar = ({ onModeClick, theme }) => {

  const handleOnClick = () => {
    onModeClick();
  }

  return (
    <div className="bg-white-custom dark:bg-dark-blue dark:text-white-custom font-nunito shadow-sm dark:shadow-md">
      <header className="max-w-[1440px] mx-auto flex justify-between items-center py-6 px-4 lg:px-16">
        <Link to="/"><h1 className="font-extrabold md:text-lg lg:text-2xl">Where in the world?</h1></Link>
        <button type="button" className="flex items-center gap-2 hover:opacity-90" onClick={handleOnClick}>
          {theme === 'dark' ? (<ion-icon name="moon"></ion-icon>) : (<ion-icon name="moon-outline"></ion-icon>)}
          <p className="text-sm lg:text-base font-semibold">Dark Mode</p>
        </button>
      </header>
    </div>
    
  )
}

export default Navbar