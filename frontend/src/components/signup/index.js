import React from 'react'
import { MainConatiner, FormTypeHolder, InnerHolder,FormType,Name } from "./style"
import { Register,Login } from "./exporter"
const SignUp = () => {
    const [active,setActive] = React.useState(true)
    return <MainConatiner>
        <InnerHolder>
            <FormTypeHolder>
                    <FormType active={active} left={true} onClick={()=>setActive(true)} >
                        <Name>
                            Login
                        </Name>
                    </FormType>
                    <FormType active={!active} right={true} onClick={()=>setActive(false)}>
                        <Name>
                            Register
                        </Name>
                    </FormType>
            </FormTypeHolder>
            
            {
                active?<Login/>: <Register />
            }
           
            
        </InnerHolder>
    </MainConatiner>
}
export default SignUp