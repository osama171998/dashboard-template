import {useRef} from "react"
import {Input,FieldHolder, FormHolder, Button} from "../style"
const Login = () =>{
    const email = useRef("")
    const password = useRef("")

    const handleLoginRequest = (e) =>{
        e.preventDefault()
        const loginPayload = {
            email:email.current.value,
            password:password.current.value
        }
        console.log(loginPayload)
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