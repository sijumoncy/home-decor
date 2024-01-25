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
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface ICartPageProps {
  openCart?: boolean;
}

function CartPage({}: ICartPageProps) {
  const { openCart, setOpenCart } = useAppContext();
  const totalCartItems = useAppSelector(totalUniqueCartItems);
  const totalCartAmount = useAppSelector(totalPriceSelector);
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  console.log({ session });

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

  const navigateCheckout = () => {
    setOpenCart(false);
    router.push(`/shop/checkout`);
  };

  const navigateSignIn = () => {
    setOpenCart(false);
    router.push(`/login`);
  }

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
        {cartItems.length === 0 ? (
          <>Your cart is empty. Add Items</>
        ) : (
          cartItems.map((item) => (
            <CartItemCard
              key={item.product._id}
              cartItem={item}
              incFunc={() => handleCount("inc", item.product)}
              decFunc={() => handleCount("dec", item.product)}
              removeFunc={() => handleRemoveCartItem(item.product)}
            />
          ))
        )}
      </div>

      {/* footer checkout */}
      <div className="total-section">
        <div className="amount">
          <p>Estimated Total</p>
          <p>₹ {totalCartAmount}</p>
        </div>
        <p className="tax">Taxes and shipping calculated at checkout</p>
        {session ? (
          <button
            className="cart-btn checkout-btn"
            disabled={cartItems.length === 0}
            onClick={navigateCheckout}
          >
            Check out
          </button>
        ) : (
          <button
            className="cart-btn signin-btn"
            onClick={navigateSignIn}
          >
            Login to continue
          </button>
        )}
      </div>
    </div>
  );
}

export default CartPage;
