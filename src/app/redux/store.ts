import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import eventReducer from "./eventSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import locationReducer from "./locationSlice";

export const store = configureStore({
  reducer: {
    event: eventReducer,
    cart: cartReducer,
    user: userReducer,
    location: locationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
