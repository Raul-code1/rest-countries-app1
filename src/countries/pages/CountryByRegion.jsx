import { useContext } from "react";
import { useParams } from "react-router-dom"
import { DarkModeContext } from "../../context/DarkModeContext";
import { FilterSection } from "../../ui/Components/FilterSection"
import { Loader } from "../../ui/Components/Loader";
import { CountriesList } from "../components/CountriesList";
import { useFetch, useForm } from "../hooks";

export const CountryByRegion = () => {

  const {reg}=useParams();

  const BY_REGION_URL=`https://restcountries.com/v3.1/region/${reg}`

  const {data,loading,error}=useFetch(BY_REGION_URL);

  const {darkTheme} = useContext(DarkModeContext)

  const {inputValue,handleChange}=useForm();

  return (
    /* Class:container-countries styles are in AllCountries.css */
    <div className="container-countries">
      
    <FilterSection inputValue={inputValue} handleChange={handleChange} />

    {loading && <Loader />}

    <div className={`grid-container ${(darkTheme) && 'dark-mode-general-bg'}    `}>
        <CountriesList countries={data} inputValue={inputValue}/>
      </div>
    
    </div>
  )
}
