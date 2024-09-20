import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import { end_point } from "../api/api";
import axiosInstance from "../api/axiosinstance";

export let registration = createAsyncThunk("auth/registration", async (data) => {
    let res = await axiosInstance.post(end_point.register, data,
    {
        headers: 
        {
            'Content-Type': 'application/json',
              
        }
    }
);
    console.log("my api response is",res);
    return res?.data;
});

export const fetchUsers = createAsyncThunk("auth/fetchUsers", async () => {
    const response = await axiosInstance.get(end_point.register);
    console.log("my response is",response.data);
    return response.data;
});


export let AuthSlice=createSlice({

    name:"auth",
    initialState:
    {
        status:0,
        isLoading:false,
        data:{},
        users: [], 
        loginError: null 
    },

    extraReducers:(builder)=>{

        builder.addCase(registration.pending,(state,action)=>{
          state.isLoading=true
        });

        builder.addCase(registration.fulfilled,(state,action)=>{
          state.isLoading=true;
          state.status=action.payload.status;
          state.data=action.payload.data;
          console.log("data is",state.data);
        });

        builder.addCase(registration.rejected,(state,action)=>{
           state.isLoading=true;
           state.status=action.payload.status;
           state.data=action.payload.data;
           console.log("data is",state.data);
        });

        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload; 
            console.log("usersss are",state.users);
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.loginError = action.error.message;
            console.log("Fetch users error is", action.error.message);
        });

    }
})

export default AuthSlice.reducer;