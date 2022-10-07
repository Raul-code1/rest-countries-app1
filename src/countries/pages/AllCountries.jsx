import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { FilterSection,Loader } from "../../ui/Components"
import { CountriesList } from "../components/CountriesList"
import { useFetch, useForm } from "../hooks";
import '../styles/AllCountries.css'

const ALL_COUNTRIES_URL='https://restcountries.com/v3.1/all';

export const AllCountries = () => {

  /* FETCH REQUEST */
  const {data,loading,error}=useFetch(ALL_COUNTRIES_URL);

  /* SEARCH VALUE */
  const {inputValue,handleChange}=useForm('');

  /* Dark mode context */
  const {darkTheme} = useContext(DarkModeContext)




  return (
    <div className="container-countries">
      <FilterSection inputValue={inputValue} handleChange={handleChange} />


        {loading && <Loader />}


      <div className={`grid-container ${(darkTheme) && 'dark-mode-general-bg'}    `}>
        <CountriesList countries={data} error={error} inputValue={inputValue}/>
      </div>


    </div>
  )
}
