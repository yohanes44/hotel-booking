import React,{useContext} from "react";

import { ThemeContext } from "../../App"

import "./navbar.scss";

export default function Navbar() {

  const {theme, setTheme} = useContext(ThemeContext);


  return (
    <div className="navbar">
      <div className="navbarContainer">
        <span className="logo">ቱባው Booking</span>
        <div className="navItems">
         
          <button onClick={()=>{
            (theme  == "white") ? setTheme("blue"): setTheme("white");
          }} className="navButton theme"></button>
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
}
