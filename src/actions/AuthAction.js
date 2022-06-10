import { types } from "../types/types";


export const login = (usuario)=> ({
    type: types.login,
    payload:{
        usuario
    }
})


export const logout = ()=>({
    type: types.logout
 
})
//------------Action estructura---------------//
//export const actionNombre = (name)=>( {
 //   type: types.login,
 //   payload: name
//})