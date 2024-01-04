"use client";

import { ICreateProductData, IProductResponse } from "@/interface/manageproduct";
import { getProductsService } from "@/services/productService";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ListProducts() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(12);
  const [products, setProducts] = useState<IProductResponse[] | []>([]);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const getProducts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await getProductsService(
      page,
      limit,
      session?.user?.accessToken || ""
    );
    setLoading(false);
    if (!error) {
      setProducts(data);
    } else {
      console.log("error getting products");
    }
  }, [page, limit, session]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="list__product">
      <div>
        {loading ? <>Loading..</> 
        : (
        <div className="product__container">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}

export default ListProducts;
