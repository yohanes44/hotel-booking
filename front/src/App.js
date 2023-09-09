
import React, {useState, createContext} from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Home from "./pages/home/Home";
import List from "./pages/List/List";
import Single from "./pages/single/Single";

import "./app.scss"
import "./theme.scss";
import Hotel from "./pages/hotel/Hotel";

export const ThemeContext = createContext({
  theme: null,
  themeSwitcher: null,
});



function App() {

  const [theme, setTheme] = useState("blue");

  
  return <div className={theme}>

<ThemeContext.Provider value={{ theme, setTheme }}>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/> } />
        <Route path="/hotels/:hotel" element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>

  </div>;
}

export default App;
