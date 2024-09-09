import {useState ,useEffect} from "react"
import axios from "axios"

const usefetch = (url) => {
    const [data ,setData]= useState(null)

    useEffect(() =>{
        axios.get(url)
        .then(response =>{
            setData(response.data)
        })
        .catch(error => console.log(err))
    },[url])

    .return(data)

}

export default usefetch;