import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  id: number;
  image: any;
  name: string;
  price: any;
  quantity: number;
}

const initialState: ICart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newData = state.filter((cart: ICart) => {
        return cart.id === action.payload.id;
      });
      if (!newData.length) {
        state.push(action.payload);
      } else {
        const newState = state.map((cart: ICart) => {
          if (cart.id === action.payload.id) {
            return {
              ...cart,
              quantity: (cart.quantity += action.payload.quantity),
            };
          }
        });
      }
    },
    removeCart: (state, action) => {
      return state.filter((cart: ICart) => cart.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
