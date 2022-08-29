import {useState,useEffect} from "react"
import {API_URL} from "../constants"

const useFetch = (route,method="GET",headers={"content-type":"application/json"},body=null) =>{
 
    const [response,setResponse] = useState(null)


    useEffect(()=>{

        const getResponse = async () =>{
            const completeRoute = `${API_URL}${route}`;
            const options = {
                method,
                headers,
                body
            }
            const executeApi = await fetch(completeRoute,options)
            const apiResponse = await executeApi.json()
            console.log(apiResponse)
            setResponse(apiResponse)
        }
        getResponse();
    },[route])

    return response;

}

export default useFetch;