"use client";
import { IProductResponse } from "@/interface/manageproduct";
import { increment, productQuantitySelector } from "@/store/slices/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";

import { FaCartPlus } from "react-icons/fa6";

interface IAddtoCart {
  product: IProductResponse;
}

function AddtoCart({ product }: IAddtoCart) {
  // const quantity = useAppSelector((state) =>
  //   productQuantitySelector(state, product._id)
  // );

  const dispath = useAppDispatch();

  const handleAddtoCart = () => {
    dispath(increment(product));
  };

  return (
    <button title="add to cart" onClick={handleAddtoCart}>
      <FaCartPlus className="icon" />
    </button>
  );
}

export default AddtoCart;
