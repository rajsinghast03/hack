import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  calories: 0,
  proteins: 0,
  fats: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      console.log(state.user);
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setCalories: (state, action) => {
      state.calories = state.calories + action.payload.calories;
      console.log("new calories = " + state.calories);
    },
    setProteins: (state, action) => {
      state.proteins = state.proteins + action.payload.proteins;
      console.log("new proteins = " + state.proteins);
    },
    setFats: (state, action) => {
      state.fats = state.fats + action.payload.fats;
      console.log("new fats = " + state.fats);
    },
  },
});

export const { setLogin, setLogout, setCalories, setFats, setProteins } =
  authSlice.actions;
export default authSlice.reducer;
