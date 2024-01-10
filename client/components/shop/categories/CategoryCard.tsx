import { ICategory } from "@/interface/manageproduct";
import React from "react";

interface ICategoryCardProps {
  category: ICategory;
}

function CategoryCard({ category }: ICategoryCardProps) {
  return (
    <div className="categorycard__container">
      <div className="card">
        <div className="card-head"></div>
        <div className="card-body">{category.name}</div>
      </div>
    </div>
  );
}

export default CategoryCard;
