import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export const Footer = () => {

  const {darkTheme} = useContext(DarkModeContext);

  return (
    <Footer className={` ${darkTheme ? 'dar-mode-elements':'ligth-mode-elements'}`} >
      <div>
        Challenge by
        <a href="https://www.frontendmentor.io/">Front end Mentor</a>.Coded by
        <a href="https://github.com/Raul-code1">Raul Pineda</a>
      </div>
    </Footer>
  );
};
