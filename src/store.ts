import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import usersReducer from './Pages/UsersPage/reducer/usersSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;