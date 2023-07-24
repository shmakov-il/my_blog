import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    status: null,
    isLoading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
});

const {reducer, action} = authSlice;

export default reducer;
export const {} = action;