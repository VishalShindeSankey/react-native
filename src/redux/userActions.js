import { SET_USER,CLEAR_USER } from "./userActionTypes";

//action for setting user data
export const setUser = (userData)=>({
    type:SET_USER,
    payload:userData,
});

//action for clearing user data 
export const clearUser = ()=>({
    type:CLEAR_USER
})