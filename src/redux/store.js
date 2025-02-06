// import {legacy_createStore as createStore,combineReducers} from 'redux';
// import favouriteReducer from './favouriteReducer';

// const rootReducer = combineReducers({
//     favourites: favouriteReducer,
// });

// const store = createStore(rootReducer);

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import favouritesReducer from './favouritesReducer';

// import { persistStore ,persistReducer} from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const persistConfig = {
//     key:'fav',
//     storage:AsyncStorage
// }

// const persistedReducer = persistReducer(persistConfig,favouritesReducer);

// const store = configureStore({
//     reducer:{
//         favourites:persistedReducer,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//             serializableCheck: {
//             ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
//         },
//     }),
// })

// const persistor = persistStore(store);
// export {store,persistor};

import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from './favouritesReducer';

const store = configureStore({
    reducer:{
        favourites:favouritesReducer,
    }
})

export default store;