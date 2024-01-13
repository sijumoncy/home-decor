import ProductListCard from "@/components/shop/productsLayout/ProductListCard";
import { capitaliseFirstLetter } from "@/components/utils/capitaliseFirstLetter";
import { IProductResponse } from "@/interface/manageproduct";
import { getProductsService } from "@/services/productService";
import React from "react";

interface ICategoryPageProps {
  params: {
    category: string;
  };
}

async function CategoryPage({ params }: ICategoryPageProps) {
  const { data, error } = await getProductsService(0, 100, "", {
    category: [params.category],
  });

  let products: IProductResponse[] = [];
  let totalProducts: number = 0;

  if (!error) {
    products = data.products;
    totalProducts = data.totalProducts;
  }

  return (
    <section className="categorypage__container">
      <div className="head">
        <h3>{capitaliseFirstLetter(params.category)}</h3>
        <p>{totalProducts} items</p>
      </div>
      <div className="product__wrapper">
        {products.length === 0 ? (
          <>No Products</>
        ) : (
          products.map((product) => (
            <ProductListCard key={product._id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}

export default CategoryPage;
