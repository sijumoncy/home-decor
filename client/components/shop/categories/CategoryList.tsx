"use client";
import { ICategory } from "@/interface/manageproduct";
import { getCategories } from "@/services/productService";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);

  const getCategoriesItems = async () => {
    const { data, error } = await getCategories();
    if (!error) {
      setCategoryData(data);
    }
  };

  useEffect(() => {
    getCategoriesItems();
  }, []);

  return (
    <div className="categorylist__container">
      <h5 className="head">Categories</h5>
      <div className="card__layout">
        {categoryData.map((item, index) => (
          <CategoryCard key={index} category={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
