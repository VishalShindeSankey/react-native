import {SET_USER,CLEAR_USER} from './userActionTypes'

const initialState = {
    user:null
}

const userReducer = (state = initialState,action)=>{
    if(action.type == SET_USER){
        return{
            ...state,
            user:action.payload
        }
    }
    else if(action.type == CLEAR_USER){
        return{
            ...state,
            user:null
        }
    }
    else{
        return state;
    }
}

export default userReducer;