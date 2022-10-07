import { useParams } from "react-router-dom"
import { CountryDetails } from "../components"
import { useFetch } from "../hooks/useFetch";
import '../styles/Country.css'




export const Country = () => {

  const {code}=useParams();

  const BY_NAME_URL=`https://restcountries.com/v3.1/alpha/${code}`

  const {data,loading,error}=useFetch(BY_NAME_URL);


  return (
    <div className="country-container">

      <CountryDetails country={data} />

    </div>
  )
}
