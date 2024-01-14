"use client";

import useAppContext from "@/context/appContext";
import {
  decrement,
  increment,
  removeItem,
  totalPriceSelector,
  totalUniqueCartItems,
} from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";
import { RiCloseFill } from "react-icons/ri";
import CartItemCard from "./CartItemCard";
import { IProductResponse } from "@/interface/manageproduct";

interface ICartPageProps {
  openCart?: boolean;
}

function CartPage({}: ICartPageProps) {
  const { openCart, setOpenCart } = useAppContext();
  const totalCartItems = useAppSelector(totalUniqueCartItems);
  const totalCartAmount = useAppSelector(totalPriceSelector);
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const dispatch = useAppDispatch();

  const handleCount = (type: "inc" | "dec", product: IProductResponse) => {
    if (type === "inc") {
      dispatch(increment(product));
    } else if (type === "dec") {
      dispatch(decrement(product));
    }
  };

  const handleRemoveCartItem = (product: IProductResponse) => {
    dispatch(removeItem(product));
  };

  return (
    <div className={`cartpage__wrapper ${openCart && "open"}`}>
      {/* header section */}
      <div className="head">
        <div className="left-head">
          <span className="badge">{totalCartItems}</span>
          <span>Your Cart</span>
        </div>
        <button
          className="close-cart"
          onClick={() => setOpenCart((prev) => !prev)}
        >
          <RiCloseFill />
        </button>
      </div>

      {/* cart items */}
      <div className="cart-section">
        {cartItems.map((item) => (
          <CartItemCard
            key={item.product._id}
            cartItem={item}
            incFunc={() => handleCount("inc", item.product)}
            decFunc={() => handleCount("dec", item.product)}
            removeFunc={() => handleRemoveCartItem(item.product)}
          />
        ))}
      </div>

      {/* footer checkout */}
      <div className="total-section">
        <div className="amount">
          <p>Estimated Total</p>
          <p>₹ {totalCartAmount}</p>
        </div>
        <p className="tax">Taxes and shipping calculated at checkout</p>
        <button className="checkout-btn">Check out</button>
      </div>
    </div>
  );
}

export default CartPage;
