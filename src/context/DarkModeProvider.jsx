import { useEffect, useState } from "react"
import { DarkModeContext } from "./DarkModeContext"


export const DarkModeProvider = ({children}) => {
  
  
  /* DARK MODE LOGIC */
  
  const getAppTheme=()=>{ 
    return JSON.parse(localStorage.getItem('theme')) || false
  }

    const [darkTheme, setDarkTheme] = useState(getAppTheme)
    
    useEffect(() => {
      localStorage.setItem('theme',JSON.stringify(darkTheme))
    }, [darkTheme])
    

    const handleDarkTheme=()=>setDarkTheme(!darkTheme)

  return (
    <DarkModeContext.Provider value={{
        darkTheme,
        handleDarkTheme
    }}>
        {children}
    
    </DarkModeContext.Provider>
  )
}
