"use client";

import { totalPriceSelector } from "@/store/slices/cartSlice";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function OrderDisclosure() {
  const [open, setOpen] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const totalPrice = useAppSelector(totalPriceSelector);

  return (
    <>
      {cartItems.length === 0 ? (
        <p>No Item In the Cart. Continue Shopping</p>
      ) : (
        <div className="disclosure__wrapper">
          <button
            className="disclosure__button"
            onClick={() => setOpen((prev) => !prev)}
            aria-pressed={open}
            aria-controls="disclosure_content"
            aria-expanded={open}
          >
            <div className="btn-content">
              <div className="left">
                <FaOpencart />
                <span>Show order summary</span>
                {open ? (
                  <RiArrowDropUpLine className="arrow" />
                ) : (
                  <RiArrowDropDownLine className="arrow" />
                )}
              </div>
              <p className="total-price">₹ {totalPrice}</p>
            </div>
          </button>

          <div
            id="disclosure_content"
            className={`disclosure_content ${open && "expand"}`}
          >
            <div className="item-cart">
              {cartItems.map(({ product, quantity }) => (
                <div key={product._id} className="item">
                  <div className="left">
                    <Image
                      src={
                        `http://127.0.0.1:8000` + `/api/v1/file/${product.img}`
                      }
                      alt="No Image"
                      width={40}
                      height={40}
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                    <div className="quantity">{quantity}</div>
                    <p>{product.title}</p>
                  </div>

                  <div className="right">
                    <p>₹ {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="disclosure__amount">
            <div className="charge sub-total">
              <p>Subtotal</p>
              <p>₹ {totalPrice}</p>
            </div>
            <div className="charge shipping">
              <p>Shipping</p>
              <p>₹ 0</p>
            </div>
            <div className="charge net-amount">
              <p>Total</p>
              <p>
                <span>INR</span>
                <span>₹ {totalPrice}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderDisclosure;
