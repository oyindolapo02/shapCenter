import axios from "axios";
import { useState, useEffect } from "react";


const useFetch = (api)=> {

    const [dataLoad, setdataLoad] = useState([])
    const [errorMessage, seterrorMessage] = useState(true)

    useEffect(()=> {
        try {
            const myData = async()=> {
                const allData = await axios.get(api)
                const user = allData.data
                setdataLoad(allData.data)
                seterrorMessage(false)
                console.log(user)
            }
            return myData
        } catch (error) {
            console.log(error.message)
        }
    }, [api])

    return [dataLoad, errorMessage]
}


export default useFetch