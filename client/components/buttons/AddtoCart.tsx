"use client";
import React from "react";

import { FaCartPlus } from "react-icons/fa6";

function AddtoCart() {
  return (
    <button title="add to cart">
      <FaCartPlus className="icon" />
    </button>
  );
}

export default AddtoCart;
