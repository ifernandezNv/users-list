import { createSlice } from "@reduxjs/toolkit";

import { initalStateType } from "../types";

const initialState: initalStateType = {
    showAlert: false,
    loading: false,
};

const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        switchAlert(state){
            state.showAlert = !state.showAlert
        },
        switchLoading(state){
            state.loading = !state.loading
        },

    }
});
export const { 
    switchAlert,
    switchLoading
} = generalSlice.actions
export default generalSlice.reducer