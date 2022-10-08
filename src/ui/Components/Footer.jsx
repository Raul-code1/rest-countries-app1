import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import '../styles/Footer.css'
import { AiFillGithub } from "react-icons/ai";




export const Footer = () => {

  const {darkTheme} = useContext(DarkModeContext);

  return (
    <footer className={` ${darkTheme ? 'dark-mode-general-bg text-light-mode   dark-height':'ligth- mode-elements'}`} >
      <div>
        Challenge by
        <a href="https://www.frontendmentor.io/">Front end Mentor</a>.Coded by
        <a href="https://github.com/Raul-code1">Raul Pineda </a><AiFillGithub />
      </div>
    </footer>
  );
};
