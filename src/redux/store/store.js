import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from '../AuthSlice'
import FoodReducer from '../food/FoodSlice'

let store=configureStore({
    reducer:{
        auth:AuthReducer,
        foodType:FoodReducer
    },
});
export default store;