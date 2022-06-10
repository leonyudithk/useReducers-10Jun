import { types } from "../types/types";

//const initialState ={
 //   nombre:"Yudith Leon"
//}

export const AuthReducers = (state = {}, action)=>{
    switch (action.type) {
        case types.login:
            return {
                  ...action.payload, //
                  logged: true  
            }
            case types.logout:
                return {
                    logged: false
                }    
        default:
            break;
    }
} 