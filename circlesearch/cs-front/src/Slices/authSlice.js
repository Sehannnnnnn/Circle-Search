import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: "false"
    },
    reducers: {
        loginSuccess: state => {
            state.login = true
        },
        loginFail: state => {
            state.login = false
        },
        logOut : state => {
            state.login = false
        }
    }
})

export const {loginSuccess, loginFail, logOut} = authSlice.actions

export default authSlice.reducer