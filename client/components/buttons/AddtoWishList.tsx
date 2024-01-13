"use client";
import { IProductResponse } from "@/interface/manageproduct";
import React from "react";
import { FaHeart } from "react-icons/fa6";

interface IAddtoWishList {
  product: IProductResponse;
}

function AddtoWishList({ product }: IAddtoWishList) {
  const handleAddtoWishList = () => {
    console.log("clicked wish list button : ", { product });
  };

  return (
    <button title="add to cart" onClick={handleAddtoWishList}>
      <FaHeart className="icon" />
    </button>
  );
}

export default AddtoWishList;
