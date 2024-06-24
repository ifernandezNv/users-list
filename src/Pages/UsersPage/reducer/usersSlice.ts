import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserType, initialStateType } from "../types";

const initialState: initialStateType = {
    users: [] as UserType[],
    userId: "",
    name: "",
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
        setName(state, action: PayloadAction<string>){
            state.name = action.payload
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
    setName,
    switchFormModal, 
    switchDeleteWarning,
} = usersSlice.actions
export default usersSlice.reducer