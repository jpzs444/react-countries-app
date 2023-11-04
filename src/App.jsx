import { Details, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="m-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:detailsPageURL" element={<Details />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App