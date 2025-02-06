import {legacy_createStore as createStore,combineReducers} from 'redux';
import userReducer from './userReducer';
import favouriteReducer from './favouriteReducer';

const rootReducer = combineReducers({
    user: userReducer,
    favourites: favouriteReducer,
});

const store = createStore(rootReducer);

export default store;