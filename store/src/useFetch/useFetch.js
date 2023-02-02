import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = (appdata)=> {

    const [api , setApi] = useState([])
    const [loadingUp, setLoadingUp] = useState(true)

    try {
        useEffect(()=> {
            const dataas = async()=> {
                const getDate = await axios.get(appdata)
                setLoadingUp(false)
                console.log(getDate.data)
                setApi(getDate.data)
            }

            return dataas
        }, [appdata])
    } catch(error) {
        console.log(error.message)
    }

    return [api, loadingUp]
}

export default useFetch