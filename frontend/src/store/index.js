import {createContext,useReducer} from "react"
const initValue = []

export const StoreContext = createContext();

const StoreProvider = (props) =>{
    const [response,dispatch] = useReducer()
}
export default StoreProvider;