import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserType, initialStateType } from "../types";

const initialState: initialStateType = {
    users: [] as UserType[],
    userId: "",
    showFormModal: false,
    showDeleteWarning: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<UserType[]>) {
            state.users = action.payload;
        },
        setUserId(state, action: PayloadAction<string>){
            state.userId = action.payload
        },
        resetUserId(state){
            state.userId = ""
        },
        switchFormModal(state){
            state.showFormModal = !state.showFormModal
        },
        switchDeleteWarning(state){
            state.showDeleteWarning = !state.showDeleteWarning
        },

    }
});
export const { 
    setUsers, 
    setUserId, 
    switchFormModal, 
    switchDeleteWarning,
} = usersSlice.actions
export default usersSlice.reducer