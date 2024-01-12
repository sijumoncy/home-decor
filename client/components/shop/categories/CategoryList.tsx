import { ICategory } from "@/interface/manageproduct";
import { getCategories } from "@/services/productService";
import React from "react";
import CategoryCard from "./CategoryCard";

async function CategoryList() {
  const { data, error } = await getCategories();
  let categoryData: ICategory[] = [];
  if (!error) {
    categoryData = data;
  }

  return (
    <div className="categorylist__container">
      {/* <h5 className="head">Categories</h5> */}
      <div className="card__layout">
        {categoryData.length === 0 && <>No Category Found</>}
        {categoryData.length > 0 &&
          categoryData.map((item, index) => (
            <CategoryCard key={index} category={item} />
          ))}
      </div>
    </div>
  );
}

export default CategoryList;
