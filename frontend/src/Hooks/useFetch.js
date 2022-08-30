import {useState,useEffect} from "react"

const useFetch = (requestData,triggerApi) =>{
   
    const {route,method,headers,body} = requestData
    const [response,setResponse] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)


    useEffect(()=>{
        const getResponse = async () =>{
            try {
                setLoading(true)
                const options = {
                    method,
                    headers,
                    body
                }
                const executeApi = await fetch(route,options)
                const apiResponse = await executeApi.json()
                setResponse(apiResponse)
            } catch (error) {
                setError(error)
            } finally{
                setLoading(false)
            }
          
        }
        if(triggerApi) getResponse(); else return;
    },[triggerApi])

    return {response,loading,error};

}

export default useFetch;