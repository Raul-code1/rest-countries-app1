import { useContext, useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { DarkModeContext } from "../../context/DarkModeContext";
import '../styles/DropdownFilter.css'
import { DropdownList } from "./DropdownList";



export const DropdownFilter = () => {

  const {darkTheme} = useContext(DarkModeContext)
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu=()=>{
    setShowMenu(!showMenu);
  }

  return (
    <div
    onClick={handleShowMenu} 
    className={`dropdown ${(!darkTheme)? 'box-shadow light-mode-elements ':'dark-mode-elements'}`}
    >
      <div className={`${(darkTheme)&& 'dark-mode-elements'}`}>
        <li>Filter by region <IoMdArrowDropdownCircle /> </li>
      </div>
      <DropdownList showMenu={showMenu}  handleShowMenu={handleShowMenu}/>
    </div>
  )
}
