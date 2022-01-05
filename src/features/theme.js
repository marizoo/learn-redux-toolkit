import { createSlice } from "@reduxjs/toolkit";

// so we dont repeat
const initialStateValue = "";

export const themeSlice = createSlice({
  //pass the name of this state
  name: "theme",
  //pass the initial state. since it will be for an input, the initial state is empty.
  initialState: {
    value: initialStateValue,
  },
  // pass in the reducers': functions to alter the value of our initial state.
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

// TO EXPORT THE LOGIN Reducer
export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
