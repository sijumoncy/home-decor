import { ICartItem } from "@/interface/store";
import Image from "next/image";
import React from "react";
import QtyChangeBtn from "../buttons/QtyChangeBtn";
import { RiCloseFill } from "react-icons/ri";

interface ICartItemCardProps {
  cartItem: ICartItem;
  incFunc: () => void;
  decFunc: () => void;
  removeFunc: () => void;
}

function CartItemCard({
  cartItem,
  incFunc,
  decFunc,
  removeFunc,
}: ICartItemCardProps) {
  return (
    <div className="cartcard__wrapper">
      <div className="left">
        <div className="image">
          <Image
            src={
              `http://127.0.0.1:8000` + `/api/v1/file/${cartItem.product.img}`
            }
            alt="No Image"
            width={40}
            height={40}
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <div className="info">
          <p className="item-title">{cartItem.product.title}</p>
          <p className="item-price">₹ {cartItem.product.price}</p>
          <p></p>
        </div>
      </div>

      <div className="right">
        <div className="item-total">
          ₹ {cartItem.product.price * cartItem.quantity}
        </div>
        <div className="qty-selector">
          <QtyChangeBtn
            qty={cartItem.quantity}
            incFunc={incFunc}
            decFunc={decFunc}
          />
        </div>
      </div>

      <button className="remove-btn" onClick={removeFunc}>
        <RiCloseFill className="icon" />
      </button>
    </div>
  );
}

export default CartItemCard;
