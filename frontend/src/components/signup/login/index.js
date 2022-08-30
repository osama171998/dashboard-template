import {useRef,useState} from "react"
import {Input,FieldHolder, FormHolder, Button} from "../style"
import {UseFetch} from "../../../Hooks/index"
import { API_URL } from "../../../constants"
const Login = () =>{
    const email = useRef("")
    const password = useRef("")
    const [triggerApi,setTriggerApi] = useState(false)
    const [requestData,setRequestData] = useState({
        route:null,
        method:null,
        header:null,
        body:null
    })

    const {response,loading,error} = UseFetch(requestData,triggerApi)

    console.log(response,loading,error)

    const handleLoginRequest = (e) =>{
        e.preventDefault()
        const loginPayload = {
            email:email.current.value,
            password:password.current.value
        }
        setRequestData({
            route:`${API_URL}/login`,
            method:"POST",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify(loginPayload)
        })
        setTriggerApi(true)
    }
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