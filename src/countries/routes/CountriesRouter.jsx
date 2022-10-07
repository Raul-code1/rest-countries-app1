import { Navigate, Route, Routes } from "react-router-dom"
import { AllCountries, CountryByRegion } from "../pages"

export const CountriesRouter = () => {
  return (
    <>
    <Routes>
        <Route path="all" element={<AllCountries />}/>
        <Route path="region/:reg" element={<CountryByRegion />}/>

        <Route path="/*" element={<Navigate to='/all' />}/>

    </Routes>
    
    </>
  )
}
