import {useRef,useContext} from "react"
import {Input,FieldHolder, FormHolder, Button} from "../style"
import { API_URL } from "../../../constants"
import {StoreContext} from "../../../store/index"
import {useNavigate} from "react-router-dom"
const Login = () =>{
    const navigate = useNavigate();
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
  
       await dispatch({
            type:"API_REQUEST",
            requestData
        })


      
    }


    state.result&&state.result.then(res=>{
        if(res.status){
            dispatch({type:"STORE_TOKEN",token:res.token})
            navigate("/dashboard")
        }
        alert(res.message)
        
    })
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
    {/* {apiResult&&console.log(apiResult)} */}
   
    </FormHolder>
}
export default Login