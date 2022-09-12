export const ReducersStore = (state, action) => {
    switch (action.type) {
        case "API_REQUEST":
            const API_CALL = async () => {
                const { route, method, headers, body } = action.requestData
                const respone = await fetch(route, {
                    method, headers, body
                })
                const data = await respone.json()
                return data
               

            }
            const result = API_CALL()
            return {...state,result}
        case "STORE_TOKEN":
            delete state.result
            const token = action.token
            return { ...state, token }

        default:
            return state;
    }
}   