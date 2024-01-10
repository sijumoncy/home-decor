import CategoryList from "@/components/shop/categories/CategoryList";
import ProductsLayout from "@/components/shop/productsLayout/ProductsLayout";
import React from "react";

function page() {
  return (
    <div className="shop__container">
      <CategoryList />

      <div className="trending__layout">
        <ProductsLayout />
      </div>
    </div>
  );
}

export default page;
