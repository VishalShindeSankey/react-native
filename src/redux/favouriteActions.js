import {ADD_FAVOURITE,REMOVE_FAVOURITE} from './favouriteActionTypes'

export const addFavourite = (currencyData)=>({
    type:ADD_FAVOURITE,
    payload:currencyData
}); 

export const removeFavourite = (currencyId)=>({
    type:REMOVE_FAVOURITE,
    payload:currencyId
});