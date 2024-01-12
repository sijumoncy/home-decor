"use client";
import { ICategory } from "@/interface/manageproduct";
import { useRouter } from 'next/navigation'
import React from "react";

interface ICategoryCardProps {
  category: ICategory;
}

function CategoryCard({ category }: ICategoryCardProps) {

  const router = useRouter()

  const handleCategory = (categoryName:string) => {
       router.push(`/shop/category/${categoryName}`)
  };

  return (
    <div
      className="categorycard__container"
      role="button"
      onClick={() => handleCategory(category.name)}
    >
      <div className="card">
        {/* <div className="card-head"></div> */}
        <div className="card-body">
          <span>{category.name}</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
