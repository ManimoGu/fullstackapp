import {configureStore} from "@reduxjs/toolkit"
import UsersReducer from "./Reducer"


const Store = configureStore({
    reducer : {

        Users : UsersReducer

    }
})

export default Store