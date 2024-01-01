import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartProps {
  id: string;
  eventName: string;
  ticketName: string;
  ticketPrice: number;
  quantity: number;
}
[];

interface CartState {
  cartItems: CartProps[];
  error: boolean;
}

const initialState: CartState = { cartItems: [], error: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartProps>) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<CartProps>) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      if (itemInCart?.quantity === 1) {
        state.cartItems = removeItem;
      } else {
        if (itemInCart) itemInCart.quantity--;
      }
    },
    emptyCart: (state) => {
      state.cartItems = initialState.cartItems;
    },
    addError: (state) => {
      state.error = true;
    },
    removeError: (state) => {
      state.error = false;
    },
  },
});

export const { addItem, removeItem, emptyCart, addError, removeError } =
  cartSlice.actions;
export default cartSlice.reducer;
