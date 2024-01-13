"use client";
import { totalUniqueCartItems } from "@/store/slices/cartSlice";
import { useAppSelector } from "@/store/store";
import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import useAppContext from "@/context/appContext";

function CartMenuIcon() {
  const totalCartItems = useAppSelector(totalUniqueCartItems);
  const { setOpenCart } = useAppContext();

  return (
    <div className="cart__icon">
      <FaOpencart
        className="icon"
        onClick={() => setOpenCart((prev) => !prev)}
      />
      {!!totalCartItems && <div className="badge">{totalCartItems}</div>}
    </div>
  );
}

export default CartMenuIcon;
