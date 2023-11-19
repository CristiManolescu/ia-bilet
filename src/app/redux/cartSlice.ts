import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartProps {
  eventName: string | null;
  count: number;
  count2: number;
}

interface CartState {
  cartItems: CartProps[];
}

const initialState: CartState = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartProps[]>) => {
      state.cartItems = action.payload;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
