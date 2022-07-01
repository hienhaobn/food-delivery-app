import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  selectedTab: "",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});

export const tabActions = tabSlice.actions;

const tabReducer = tabSlice.reducer;

export default tabReducer;
