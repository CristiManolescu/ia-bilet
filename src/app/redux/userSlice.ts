import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  uid: string | null;
  displayName: string | null;
  email: string | null;
}

const initialState: UserState = { uid: null, displayName: null, email: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: () => {
      return initialState;
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
