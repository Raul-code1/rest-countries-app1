import { useContext } from "react";
import "../styles/DropdownList.css";
import { DarkModeContext } from "../../context/DarkModeContext";
import { regions } from "../../countries/helpers/countriesRegions";
import {  NavLink } from "react-router-dom";

export const DropdownList = ({ showMenu, handleShowMenu }) => {

  /* Dark mode state */ const { darkTheme } = useContext(DarkModeContext);



  return (
    <ul
      className={`filter-list  ${
        darkTheme ? "dark-mode-elements" : "box-shadow light-mode-elements"
      }
        ${showMenu ? "" : "toggle-menu"}
       `}
    >
      
      <NavLink 
      to={'/all'}
      className={`navLink  ${darkTheme && "navLink-dark-mode"}  `}
      >
      <li>All </li>
      </NavLink>

      {regions.map((reg, i) => (
        <NavLink
          key={i}
          className={`navLink   ${darkTheme && "navLink-dark-mode"}  `}
          to={`/region/${reg}`}
        >
          <li>{reg}</li>
        </NavLink>
      ))}
    </ul>
  );
};
