import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import "../styles/Loader.css";

export const Loader = () => {

    const {darkTheme} = useContext(DarkModeContext)


  return (
    <div className="loader-container">
      <div className="lds-ripple">
        <div className={`${darkTheme?'loader-color':'loader-color-light'}`}></div>
        <div></div>
      </div>
    </div>
  );
};
