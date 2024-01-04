"use client";
import { IProductResponse } from "@/interface/manageproduct";
import Image from "next/image";
import React from "react";
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

function ProductCard({ product }: { product: IProductResponse }) {
  console.log(product);

  return (
    <div className="product__card">
      <div className="image">
        <Image
          src={`http://127.0.0.1:8000` + `/api/v1/file/${product.img}`}
          alt="No Image"
          fill={true}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <div className="content">
        {Object.entries(product).map(([key, value]) => (
          !["_id", "createdAt", "updatedAt", "__v"].includes(key) && (
            <div key={key} className="item-row">
              <p className="key">{key}</p>
              <p className="value title">
                {Array.isArray(value) ? (<>{JSON.stringify(value)}</>) : (<>{value}</>)}
              </p>
            </div>
          )
          ))}
      </div>

      <div className="btn-section">
        <button className="btn btn-edit">
          <FaEdit className=""/>
        </button>
        <button className="btn btn-delete">
          <MdDelete className=""/>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
