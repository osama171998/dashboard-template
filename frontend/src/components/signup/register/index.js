import React,{useRef,useState} from "react"
import {FormHolder,FieldHolder,Input,TextArea,Button} from "../style"
const Register = () =>{
    const firstName = useRef("");
    const lastName = useRef("");
    const cnic = useRef("");
    const contactNo = useRef("");
    const address = useRef("");
    const email = useRef("");
    const password = useRef("");
    const confirmPassword = useRef("");
     
    const [passwordMatch,confirmPasswordMatch] = useState(false)
    const submitForm = (e) =>{
            e.preventDefault()
            const requestBody = {
                firstName:firstName.current.value,
                lastName:lastName.current.value,
                cninc:cnic.current.value,
                contactNo:contactNo.current.value,
                address:address.current.value,
                email:email.current.value,
                password:email.current.value
            }
            console.log(requestBody)
    }
    const checkForPasswordMatch = () =>{
        if((confirmPassword.current.value.length>0)&&(password.current.value!==confirmPassword.current.value)){
            confirmPasswordMatch(true)
        }
        else{
            confirmPasswordMatch(false)
        }
        
    }
    return <FormHolder onSubmit={submitForm}>
        <FieldHolder>
            <Input type="text" name="firstName" placeholder="First Name" width={"47%"} ref={firstName}/>
            <Input type="text" name="lastName" placeholder="Last Name" width={"47%"} ref={lastName}/>
        </FieldHolder>
        <FieldHolder>
            <Input type="number" name="cnic" placeholder="CNIC without dashes" width={"47%"} ref={cnic}/>
            <Input type="number" name="contactNo" placeholder="Contact No" width={"47%"} ref={contactNo}/>
        </FieldHolder>
        <FieldHolder>
            <Input type="email" name="email" placeholder="Email" width={"100%"} ref={email}/>
        </FieldHolder>
        <FieldHolder>
            <Input type="password" name="password" placeholder="Password" width={"47%"} ref={password}/>
            <Input type="password" name="confirnPassword" placeholder="Confirm Password" width={"47%"} ref={confirmPassword} onChange={checkForPasswordMatch}/>
            {(passwordMatch)&&<p>Password Doesn't Match</p>}
        </FieldHolder>
        <FieldHolder>
            <TextArea width={"100%"} placeholder="Address" rows={5} ref={address}/>
        </FieldHolder>
        <FieldHolder>
            <Button name="register" value="Register" width={"max-content"}>Register</Button>
        </FieldHolder>
    </FormHolder>
}
export default Register