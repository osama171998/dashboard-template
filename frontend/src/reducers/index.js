export const ReducersStore =  async (state,action) =>{
    switch (action.type) {
        case "API_REQUEST":
        
            const API_CALL = async () =>{
                const {route,method,headers,body} = action.requestData
                    const response = await fetch (route,{
                        method,headers,body
                    })
                    const result = await response.json();
                    console.log("inner",result)
                    return result
            }
            const data = await API_CALL();
            console.log("outer")
            return {...state,data}
        case "TEST1":
            return {...state,test1:true}
        case "TEST2":
            return {...state,test2:true}
       
          
        
        default:
            return state;
    }
}