import React, { useState, createContext } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

import "./home.scss";
import "../../theme.scss";

import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

export const ThemeContext = createContext({
  theme: null,
  themeSwitcher: null,
});

export default function Home() {
  const [theme, setTheme] = useState("blue");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <Navbar />
        <Header type="home" />
        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by propery type</h1>
          <PropertyList />
          <h1 className="homeTitle">Browse by propery type</h1>
          <FeaturedProperties />
          <MailList />
          <Footer /> 
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
