"use client";
import { IProductResponse } from "@/interface/manageproduct";
import { getProductsService } from "@/services/productService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ProductsLayout() {
  const [trending, setTrending] = useState<IProductResponse[]>([]);
  const [products, setProducts] = useState<{[key:string] : IProductResponse[]}>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    const { data, error } = await getProductsService(0, 30, "");
    console.log(data.products);
    if (!error) {
      setError(false);
      setTrending(data.products);
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  const getCategoriesProducts = async () => {

    const { data, error } = await getProductsService(0, 50, "", {
      category:["furniture", "lighting", "smarthome", "accessories", "modern"]
    });
    const {products}:{products:IProductResponse[]} = data
    const funitures = products.filter((product) => product.categories.includes('furniture'))
    const lighting = products.filter((product) => product.categories.includes('lighting'))
    const smarthome = products.filter((product) => product.categories.includes('smarthome'))
    const accessories = products.filter((product) => product.categories.includes('accessories'))

    if(!error) {
      setProducts({funitures, lighting, smarthome, accessories})
    }

  }

  console.log(products);
  

  useEffect(() => {
    getProduct();
    getCategoriesProducts()
  }, []);

  return (
    <div className="productLayout__container">
      {error ? (
        <>Can not get data. Technical Error!</>
      ) : loading ? (
        <>loading..</>
      ) : (
        <>
          <div className="product-sections">

            {/* section 1 */}
            <div className="section-one">
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
            <div className="section-two">
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

            {/* section3 */}
            <div className="section-three">
              <div className="">

              </div>
            </div>

          </div>
        </>
      )}
    </div>
  );
}

export default ProductsLayout;
