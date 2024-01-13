import { IProductResponse } from "@/interface/manageproduct";
import { ICartItem } from "@/interface/store";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface ICartState {
  cartItems: ICartItem[];
}

const initialState: ICartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IProductResponse>) => {
      const item = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (item) item.quantity++;
      else {
        state.cartItems.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },

    decrement: (state, action: PayloadAction<IProductResponse>) => {
      const item = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (item) {
        item.quantity--;
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product._id !== action.payload._id
          );
        }
      }
    },
  },
});

// custom selectors
const cartItems = (state: RootState) => state.cart.cartItems;

export const totalCartItemSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, current: ICartItem) => (total += current.quantity),
    0
  )
);

export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, current: ICartItem) =>
      (total += current.quantity * current.product.price),
    0
  )
);

export const productQuantitySelector = createSelector(
  [cartItems, (cartItems, productId: string) => productId],
  (cartItems, productId) =>
    cartItems.find((el) => el.product._id === productId)?.quantity
);

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
