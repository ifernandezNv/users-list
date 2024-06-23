import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserType } from "../../../types";

type initialStateType = {
    users: UserType[];
    userToEdit: UserType,
    userId: string,
    showFormModal: boolean,
    showDeleteWarning: boolean,
    showAlert: boolean,
}
const initialState: initialStateType = {
    users: [] as UserType[],
    userToEdit: {} as UserType,
    userId: "",
    showFormModal: false,
    showDeleteWarning: false,
    showAlert: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<UserType[]>) {
            state.users = action.payload;
        },
        setUserToEdit(state, action: PayloadAction<UserType>){
            state.userToEdit = action.payload
        },
        resetUserToEdit(state){
            state.userToEdit = {} as UserType
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
        switchAlert(state){
            state.showAlert = !state.showAlert
        },

    }
});
export const { 
    setUsers, 
    setUserToEdit, 
    resetUserToEdit, 
    setUserId, 
    switchFormModal, 
    switchDeleteWarning,
    switchAlert,
} = usersSlice.actions
export default usersSlice.reducer