import {createContext,useReducer} from "react"
import {ReducersStore} from "../reducers/index"
const initValue = {}

export const StoreContext = createContext({});

const StoreProvider = (props) =>{
    const [state,dispatch] = useReducer(ReducersStore,initValue)
    return <StoreContext.Provider  value={{state,dispatch}}>
            {props.children}
    </StoreContext.Provider>
}
export default StoreProvider;