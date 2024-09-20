import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {base_url2} from "../../api/api";
import {base_url3} from "../../api/api";
import axios from "axios";


let foodapi=base_url2;
let foodDetail=base_url3;


export let food=createAsyncThunk("foodType/food",async()=>{
 let res=await axios.get(foodapi);
 console.log("result is",res);
 return res?.data;
})

export let foodDetails = createAsyncThunk("foodType/foodDetails", async (myfood) => {
    try {
        let res = await axios.get(`${base_url3}/${myfood}`); 
        console.log("data is", res.data);
        return res?.data;
    } catch (error) {
        console.error("Error fetching food details:", error); 
        throw error;
    }
});




let FoodSlice=createSlice({
    name:"foodType",
    initialState:
    {
        isLoading:false,
        status:0,
        data:{}
    },

    extraReducers:(builder)=>{

        builder.addCase(food.pending,(state,action)=>{
           state.isLoading=true;
        })

        builder.addCase(food.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })


        builder.addCase(food.rejected,(state,action)=>{
             state.isLoading=false;
        })

        builder.addCase(foodDetails.pending,(state,action)=>{
            state.isLoading=true;
         })
 
         builder.addCase(foodDetails.fulfilled,(state,action)=>{
             state.isLoading=false;
             state.data=action.payload;
         })
 
 
         builder.addCase(foodDetails.rejected,(state,action)=>{
              state.isLoading=false;
         })




    }
})

export default FoodSlice.reducer;