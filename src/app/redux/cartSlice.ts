import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartProps {
  eventName: string;
  ticketName: string;
  ticketPrice: number;
  count: number;
}
[];

interface CartState {
  cartItems: CartProps[];
}

const initialState: CartState = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartProps>) => {
      state.cartItems.push(action.payload);
      console.log(action.payload);
    },
    removeItem: (state) => {
      state.cartItems.pop();
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
