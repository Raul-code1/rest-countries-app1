import { useEffect, useState } from "react"



export const useFetch=(url)=>{

    const [fetchData, setFetchData] = useState({
        data:{},
        loading:false,
        error:null
    })


    const getData=async()=>{

        setFetchData({...fetchData,loading:true})

        try {
            const response=await fetch(url);

            if (response.status===404) {
                setFetchData({data:{},loading:false,error:'Error 404 not found'})
            } else {
                const data = await response.json();
                setFetchData({data,loading:false,error:null})
            }
            

        } catch (er) {
            console.warn(er);
        }
    }



    
    
    
    useEffect(() => {
        getData();
    }, [url])
    



    return{
        data:fetchData.data,
        loading:fetchData.loading,
        error:fetchData.error
    }
}