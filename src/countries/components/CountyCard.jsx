import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import "../styles/CountryCard.css";

export const CountyCard = ({ name, flags, population, region, capital,cca2 }) => {

  const navigate=useNavigate()

  const { darkTheme } = useContext(DarkModeContext);

  return (
    <div onClick={()=>navigate(`/country/${cca2}`)} className={`country-card  ${darkTheme ? "dark-mode-elements" : "box-shadow"}   `}>
      <div className="flag-country">
        <img src={flags.png} alt={name?.common} />
      </div>

      <div className="country-info">
          <h6>{name?.common}</h6>
        
          <p className="bold">
            Population:<span>{population}</span>{" "}
          </p>
          <p className="bold">
            Region:<span>{region}</span>{" "}
          </p>
          <p className="bold">
            Capital:<span>{capital ? capital: 'No capital'}</span>{" "}
          </p>
        
      </div>
    </div>
  );
};
