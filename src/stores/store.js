import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
