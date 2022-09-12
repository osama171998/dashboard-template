import {useContext} from 'react'
import {StoreContext} from '../../store'
const Dashboard = () =>{
        const {state} = useContext(StoreContext)
        console.log(state)
        return <>
            <h1>
                Dashboard
            </h1>
            </>
}   

export default Dashboard