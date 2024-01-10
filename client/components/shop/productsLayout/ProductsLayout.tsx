"use client";
import { IProductResponse } from "@/interface/manageproduct";
import { getProductsService } from "@/services/productService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ProductsLayout() {
  const [trending, setTrending] = useState<IProductResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getTrendingProduct = async () => {
    setLoading(true);
    const { data, error } = await getProductsService(0, 15, "");
    console.log(data.products[0]);
    if (!error) {
      setError(false);
      setTrending(data.products);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getTrendingProduct();
  }, []);

  return (
    <div className="productLayout__container">
      {error ? (
        <>Can not get data. Technical Error!</>
      ) : loading ? (
        <>loading..</>
      ) : (
        <>
          <div className="two-col">
            {/* section 1 */}
            <div className="two-one">
              <div className="two-one-card">
                <div className="head">COMBO</div>
                <div className="img">
                  <Image
                    src={
                      `http://127.0.0.1:8000` +
                      `/api/v1/file/${trending[0]?.img}`
                    }
                    alt={trending[0]?.title}
                    fill={true}
                    // style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="content">
                  <p>{trending[0]?.title}</p>
                  <p className="price">₹ {trending[0]?.price}</p>
                </div>
              </div>
            </div>

            {/* section 2 */}
            <div className="two-two">
              {/* cards */}
              {[3, 7, 8, 6].map((num, index) => (
                <div key={num} className="two-cards">
                  <div className="card-wrapper">
                    <div className="img">
                      <Image
                        src={
                          `http://127.0.0.1:8000` +
                          `/api/v1/file/${trending[num]?.img}`
                        }
                        alt={trending[0]?.title}
                        fill={true}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="content">
                      <p>{trending[num]?.title}</p>
                      <p className="price">₹ {trending[num]?.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductsLayout;
