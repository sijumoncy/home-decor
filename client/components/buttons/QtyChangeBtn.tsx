"use client";
import React from "react";

interface IQtyChangeBtnProps {
  qty: number;
  incFunc: () => void;
  decFunc: () => void;
}

function QtyChangeBtn({ qty, incFunc, decFunc }: IQtyChangeBtnProps) {
  return (
    <div className="qtybtn">
      <button className="minus" onClick={decFunc}>
        -
      </button>
      <span className="qty-txt">{qty}</span>
      <button className="plus" onClick={incFunc}>
        +
      </button>
    </div>
  );
}

export default QtyChangeBtn;
