import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const currentUser = (state) => state.user.data;

export const {login} = userSlice.actions;
export default userSlice.reducer;
