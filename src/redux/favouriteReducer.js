import {ADD_FAVOURITE,REMOVE_FAVOURITE} from './favouriteActionTypes'

const initialState = {
    favourites:[]
}

const favouriteReducer = (state = initialState,action)=>{
    if(action.type == ADD_FAVOURITE){
        return{
            ...state,
            favourites:[...state.favourites,action.payload]
        }
    }
    else if(action.type == REMOVE_FAVOURITE){
        return{
            favourites:state.favourites.filter((item)=>item.uuid != action.payload)
        }
    }else{
        return state;
    }
}

export default favouriteReducer;