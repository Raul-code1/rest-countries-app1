import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import { Country } from "../countries/pages";
import { CountriesRouter } from "../countries/routes/CountriesRouter";

export const AppRouter = () => {

  const {darkTheme} = useContext(DarkModeContext)



  return (
    <main className={`${(darkTheme)?'dark-mode-general-bg':''}`}>
      <Routes>
       <Route path="country/:code" element={<Country />}/>  
       <Route path="/*" element={<CountriesRouter />}/>  
      </Routes>
    </main>
  );
};
