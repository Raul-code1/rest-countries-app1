import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { DarkModeContext } from "../../context/DarkModeContext";
import { DropdownFilter } from "../../ui/Components/DropdownFilter";
import "../styles/FilterSection.css";

export const FilterSection = ({inputValue,handleChange}) => {

  
  /* Dark mode value */
const { darkTheme } = useContext(DarkModeContext);


  return (

    /* CONTAINER FILTER SECTION */
    <div
    className={`filter-section-container 
    ${darkTheme && "dark-mode-general-bg"} 
    `}
    >
      {/* FORM */}
      <form className={`${(!darkTheme)? 'box-shadow light-mode-elements ':'dark-mode-elements'}`}>

        {/* SEARCH ICON */}
        <BsSearch color={`${darkTheme ? "white" : "black"}`} />

        {/* Input  */}
        <input className={` ${(darkTheme)&& "dark-mode-elements dark-mode-input"}`}
          type="text"
          placeholder="Search for a country..."
          value={inputValue}
          onChange={handleChange}
          />


      </form>
      {/* FORM  ENDS HERE*/}

      <DropdownFilter />
    </div>
  /* CONTAINER FILTER SECTION ends here */
  );
};
