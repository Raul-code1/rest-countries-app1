import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"

export const Message = () => {

    const {darkTheme} = useContext(DarkModeContext)


  return (
    <div className={`message ${darkTheme && 'text-light-mode'}   `}>
        <p>Make sure you have typed  the name of the country correctly 🧐</p>
    </div>
  )
}
