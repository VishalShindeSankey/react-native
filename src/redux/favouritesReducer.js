import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name:'favourites',
    initialState:[],
    reducers:{
        addToFavourites:(state,action)=>{
            state.push(action.payload);
        },
        removeFromFavourites:(state,action)=>{
            return state.filter((item)=> item.uuid != action.payload)
        }
    }
});

export const {addToFavourites,removeFromFavourites} = favouriteSlice.actions;

export default favouriteSlice.reducer;