import { useState } from "react"


export const useForm=(initialValue='')=>{


    const [inputValue, setInputValue] = useState(initialValue);



    const handleChange=({target})=>{
        setInputValue(target.value);
    }



    return{
        inputValue,
        handleChange
    }
}