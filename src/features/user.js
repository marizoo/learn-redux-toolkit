import { createSlice } from "@reduxjs/toolkit";

// so we dont repeat
const initialStateValue = {
  name: "",
  age: 0,
  email: "",
};

export const userSlice = createSlice({
  //pass the name of this state
  name: "user",
  //pass the initial state. since it will be for an input, the initial state is empty.
  initialState: {
    value: initialStateValue,
  },
  // pass in the reducers': functions to alter the value of our initial state.
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

// TO EXPORT THE LOGIN Reducer
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
