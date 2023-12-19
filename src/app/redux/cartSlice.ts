import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartProps {
  eventName: string;
  ticket1: string;
  ticket_price1: number;
  ticket_count1: number;
  ticket2: string;
  ticket_price2: number;
  ticket_count2: number;
  totalTicketsCount: number;
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
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
