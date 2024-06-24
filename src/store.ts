import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import usersReducer from './Pages/UsersPage/reducer/usersSlice'
import generalReducer from './Pages/WelcomePage/reducer/generalSlice';
export const store = configureStore({
  reducer: {
    users: usersReducer,
    general: generalReducer
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