import {configureStore,combineReducers} from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import themeReducer from './theme/themeSlice'
import {persistReducer,persistStore} from 'redux-persist'
import storage from "redux-persist/lib/storage"

const rootReducer=combineReducers({
    user:userReducer,
    theme:themeReducer,
})

const persistConfig={
    key:'root',
    storage,
    version:1,
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware({serializableCheck:false})
    }
})

// const rootReducer = combineReducers({
//     theme:themeReducer, 
// })
// const persistConfig ={
//     key:'root',
//     storage,
//     version:1,
// }
// const persistedReducer=persistReducer(persistConfig,rootReducer);
// export const store = configureStore({
// reducer:persistedReducer,    
// })

export const persistor=persistStore(store)