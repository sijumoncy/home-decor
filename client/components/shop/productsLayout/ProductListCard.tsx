import { IProductResponse } from "@/interface/manageproduct";
import Image from "next/image";
import React from "react";

interface IProductListCard {
  product : IProductResponse
}

function ProductListCard({product}:IProductListCard) {
  return (
    <div  className="product-card">
      <div className="img">
        <Image
          src={
            `http://127.0.0.1:8000` +
            `/api/v1/file/${product?.img}`
          }
          alt={product?.title}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="content">
        <div className="btns">
          <button>wish</button>
          <button>cart</button>
        </div>
        <div className="details">
          <p className="title">{product.title}</p>
          <p className="price">₹ {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListCard;
