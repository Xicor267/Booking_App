import { createSlice } from "@reduxjs/toolkit";
import { IUserType } from "~/api/types/register/IUserType";

interface IRegisterState {
  users: IUserType[];
}

const initialState: IRegisterState = {
  users: [],
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;