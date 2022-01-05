import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  //pass the name of this state
  name: "user",
  //pass the initial state. since it will be for an input, the initial state is empty.
  initialState: {
    value: {
      name: "",
      age: 0,
      email: "",
    },
  },
  // pass in the reducers': functions to alter the value of our initial state.
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
