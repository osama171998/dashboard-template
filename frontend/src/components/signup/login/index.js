import {useRef,useContext} from "react"
import {Input,FieldHolder, FormHolder, Button} from "../style"
import { API_URL } from "../../../constants"
import {StoreContext} from "../../../store/index"
const Login = () =>{
    const email = useRef("")
    const password = useRef("")

    const {state,dispatch} = useContext(StoreContext)
   
    
    


    const handleLoginRequest = async (e) =>{
        e.preventDefault()
        const loginPayload = {
            email:email.current.value,
            password:password.current.value
        }
        const requestData = {
            route:`${API_URL}/login`,
            method:"POST",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify(loginPayload)
        }
        dispatch({
            type:"API_REQUEST",
            requestData
        })
        // await dispatch({type:"TEST1"})
        return true
      
    }
    console.log(state)
    return <FormHolder onSubmit={handleLoginRequest}>
       
        <FieldHolder>
                <Input type={"email"} name="email" placeholder="Email" width={"100%"} ref={email}/>
        </FieldHolder>
        <FieldHolder>
            <Input type={"password"} name="password" placeholder="Password" width={"100%"} ref={password}/>
        </FieldHolder>
        <FieldHolder>
            <Button name="button" value="Button" width={"max-content"}>Login</Button>
        </FieldHolder>
    </FormHolder>
}
export default Login