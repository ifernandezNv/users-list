import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserType } from "../../../types";

type initialStateType = {
    users: UserType[];
}
const initialState: initialStateType = {
    users: [] as UserType[]
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<UserType[]>) {
            state.users = action.payload;
        }
    }
});
export const { setUsers } = usersSlice.actions
export default usersSlice.reducer