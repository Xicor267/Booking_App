import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./slice/notificationSlice";
import userSlice from "./slice/user/userSlice";

export const store = configureStore({
  reducer: {
    notification: notificationSlice,
    users: userSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;