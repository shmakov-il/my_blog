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

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
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
    }
});

const {reducer} = authSlice;

export default reducer;
//export const {} = actions;

