import { useEffect, useState } from "react";
import { Navbar } from "./components";
import { Details, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// TODO: Fix flash of unstyled content (FOUC) on first load

const App = () => {
  const [theme, setTheme] = useState(null);

  // For automatically setting the initial mode, depends on user's OS setting
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  // For manually setting the mode
  const handleOnModeClick = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  // For adding or removing 'dark' class of the body element
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark', 'body-dark-bg');
    } else {
      document.body.classList.remove('dark', 'body-dark-bg');
    }
  }, [theme]);
  

  return (
    <div className="text-base text-very-dark-blue-text dark:text-white-custom bg-very-light-gray dark:bg-very-dark-blue">
      <Router>
        <Navbar onModeClick={handleOnModeClick} theme={theme} />
        <Routes>
          <Route path="/" element={<Home theme={theme}/>} />
          <Route path="/:detailsPageURL" element={<Details />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App