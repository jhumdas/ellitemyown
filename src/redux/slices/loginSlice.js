import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: localStorage.getItem('Authorization'),
    isAuthenticated: localStorage.getItem('Authorization') ? true : false, // or just !!localStorage.getItem('token')
    isLoading: false,
    isRegistered: false
 }

 const loginSlice=createSlice({
    name:'login_slice',
    initialState,
    reducers:{
        clearLogin: (state) => {
            state.status = "idle";
            state.isLoading = false;
            state.isRegistered = false;
            state.isAuthenticated=localStorage.getItem('Authorization') ? true : false;
        },
        loginSuccess: (state) => {
            state.status = "idle";
            state.isLoading = false;
            state.isRegistered = true;
            state.isAuthenticated=localStorage.getItem('Authorization') ? true : false;
            console.log("Authenticate",state.isAuthenticated);
        },
        
    }
 });

 export const {clearLogin,loginSuccess}=loginSlice.actions;
 export default loginSlice.reducer;
