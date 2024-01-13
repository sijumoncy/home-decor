"use client";
import { totalUniqueCartItems } from "@/store/slices/cartSlice";
import { useAppSelector } from "@/store/store";
import React from "react";
import { FaOpencart } from "react-icons/fa";

function CartMenuIcon() {

  const totalCartItems = useAppSelector(totalUniqueCartItems)

  return (
    <div className="cart__icon">
      <FaOpencart className="icon" />
      {!!totalCartItems && <div className="badge">{totalCartItems}</div>}
    </div>
  );
}

export default CartMenuIcon;
