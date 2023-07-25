import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
const initialState = {
    user: null,
    token: null,
    status: null,
    isLoading: false
}

export const registerUser = createAsyncThunk('auth/registerUser', async ({username, password}) => {
    try {
        const {data} = await axios.post('auth/register', {username, password});
        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({username, password}) => {
    try {
        const {data} = await axios.post('auth/login', {username, password});
        if (data.token) {
            window.localStorage.setItem('token', data.token);
        }
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const getUser = createAsyncThunk('auth/getUser', async () => {
    try {
        const {data} = await axios.get('auth/me');
        return data;
    } catch (error) {
        console.log(error);
    }
});
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: state => {
            state.user = null;
            state.token = null;
            state.status = null;
            state.isLoading = false;
        },
        clearStatusFull: state => {
            state.status = null;
        }
    },
    extraReducers: {
        // register
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload.newUser;
            state.token = action.payload.token;
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        // login
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
            state.user = action.payload.newUser;
            state.token = action.payload.token;
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
        // get me
        [getUser.pending]: (state) => {
            state.isLoading = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = null;
            state.user = action.payload?.newUser;
            state.token = action.payload?.token;
        },
        [getUser.rejected]: (state, action) => {
            state.isLoading = false;
            state.status = action.payload.message;
        },
    }
});

export const isAuthCheck = state => Boolean(state.auth.token);
const {reducer, actions} = authSlice;

export default reducer;
export const {logout, clearStatusFull} = actions;

