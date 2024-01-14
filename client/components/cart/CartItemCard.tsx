import { ICartItem } from "@/interface/store";
import React from "react";

interface ICartItemCardProps {
  cartItem: ICartItem;
}

function CartItemCard({ cartItem }: ICartItemCardProps) {
  return (
    <div className="cartcard__wrapper">
      <div className="left">
        <div className="image">image</div>
        <div className="info">info</div>
      </div>

      <div className="right">
        <div className="price">
          ₹ {cartItem.product.price * cartItem.quantity}
        </div>
        <div className="qty-selector">buttons</div>
      </div>
    </div>
  );
}

export default CartItemCard;
