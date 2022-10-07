import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";


import { DarkModeContext } from "../../context/DarkModeContext";


import '../styles/Header.css'

export const Header = () => {

  const {darkTheme,handleDarkTheme} = useContext(DarkModeContext);


  return (
    <header className={`general-styles ${(darkTheme)?'dark-mode-elements' :''} 
    ${(darkTheme)? '':'box-shadow'}
    `}>
      <div className="container">
        <div>
          <h1>Where in the world?</h1>
        </div>

      <div onClick={handleDarkTheme} className="theme-container">
        {darkTheme ?<BsSun />:<MdDarkMode />}
        <span >{darkTheme?'Light mode':'Dark mode'}</span>
      </div>

      </div>

    </header>
  )
}
