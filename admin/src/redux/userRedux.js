import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        token: null,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.token = action.payload.accessToken;
            console.log("userRedux.js//loginSuccess: " + state.token);
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.token = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;