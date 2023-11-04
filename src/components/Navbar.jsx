import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between">
      <Link to="/"><h1>Where in the world?</h1></Link>
      <button type="button">
        <img src=""/>
        <p>Dark Mode</p>
      </button>
    </header>
  )
}

export default Navbar