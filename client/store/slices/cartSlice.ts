import { IProductResponse } from "@/interface/manageproduct";
import { ICartItem } from "@/interface/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

    increment : (state, action:PayloadAction<IProductResponse>) => {
      const item = state.cartItems.find((el) => el.product._id === action.payload._id )
      if(item) item.quantity ++;
      else {
        state.cartItems.push({
          product : action.payload,
          quantity : 1
        })
      }
    } 

  },
});
