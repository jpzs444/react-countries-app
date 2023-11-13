import { Navbar } from "./components";
import { Details, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// TODO: Add dark mode feature

const App = () => {
  return (
    <div className="text-base text-very-dark-blue-text bg-very-light-gray">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:detailsPageURL" element={<Details />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App