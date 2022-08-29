import React,{useRef,useState} from "react"
import {FormHolder,FieldHolder,Input,TextArea,Button} from "../style"
import {UseFetch} from "../../../Hooks/index"
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
    
    
    // const result = UseFetch("/add-user","POST",{ accept: "application/json", "content-type": "application/json" },JSON.stringify({
    //     firstName:"Osama",
    //     lastName:"Idrees",
    //     cnic:"1330217021683",
    //     contactNo:"03367974343",
    //     address:"House no 1597, Mohalah Malik Pura, Haripur",
    //     email:"rockharipur@gmail.com",
    //     password:"Osam@12345"

        
    // }))
    // console.log(result)
         
         
    const submitForm = (e) =>{
            e.preventDefault()
        
            const requestBody = {
                firstName:firstName.current.value,
                lastName:lastName.current.value,
                cnic:cnic.current.value,
                contactNo:contactNo.current.value,
                address:address.current.value,
                email:email.current.value,
                password:password.current.value
            }
    
            const result = UseFetch("/add-user","POST",{ accept: "application/json", "content-type": "application/json" },JSON.stringify(requestBody))
            console.log(result)
         
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
            <Button type="Submit" name="register" value="Register" width={"max-content"}>Register</Button>
        </FieldHolder>
    </FormHolder>
}
export default Register