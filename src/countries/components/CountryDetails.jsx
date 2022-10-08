import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/DarkModeContext";
import '../styles/CountryDetails.css'


export const CountryDetails = ({country}) => {

    const navigate=useNavigate();

    const {darkTheme} = useContext(DarkModeContext)
    


    const themeBtns=(darkTheme)?'dark-mode-elements':'light-mode-elements box-shadow',
     infoText=(darkTheme) &&'text-light-mode'
    

  return (
    <div className="box">
        <div className={`btn `}>
            <button
             onClick={()=>navigate(-1)}
             className={`  btn-styles ${themeBtns}`}
             ><BiArrowBack /> Back   </button>
        </div>

    <div className="country-details">
        <div className="details-flag"><img src={country[0]?.flags?.png} /></div>
        <div className="information">
            <div className={`col1 ${infoText}   `}>
                <h4>{country[0]?.name?.common}</h4>
                <p className="bold">Native name:<span>{country[0]?.name?.official}</span></p>
                <p className="bold">Population: <span> {country[0]?.population}</span></p>
                <p className="bold">Region: <span>{country[0]?.region}</span></p>
                <p className="bold">Sub Region: <span>{country[0]?.subregion? country[0]?.subregion:'No sub region'}</span></p>
                <p className="bold">Capital: <span>{country[0]?.capital ?country[0]?.capital:'No capital'}</span></p>
            </div>
            <div className={`col2  ${infoText} `}>
                <p className="bold">Top Level Domain:<span>{country[0]?.tld}</span></p>


                <p className="bold">Currencies:<span> </span></p>


                <p className="bold">Languages :<span> <br/>  </span></p>
            </div>
            <div className="col3">
                <h5 className={`${infoText}`}>Border Countries:</h5>
                <div>
                    {country[0]?.borders ? country[0]?.borders?.map((bor,i)=><button
                    className={`btn-styles  ${themeBtns}`}
                    onClick={()=>navigate(`/country/${bor}`)}
                    key={i}>{bor}</button>):
                    <p className={`${infoText}`} >No border Countries</p>
                    }
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
