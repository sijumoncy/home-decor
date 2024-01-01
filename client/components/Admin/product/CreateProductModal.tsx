"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

interface IProductData {
  title: string,
  description: string,
  categories: string[],
  size: string,
  colors: string[],
  price: number,
  rating: number,
  image : File | null 
}

function CreateProductModal() {
  const [formData, setFormData] = useState<IProductData>({
    title: "",
    description: "",
    categories: [],
    size: "",
    colors: [],
    price: 0,
    rating: 0,
    image : null
  });

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as {
      name:
        | "title"
        | "description"
        | "categories"
        | "size"
        | "colors"
        | "price"
        | "rating"
      value: string;
    };

    let currentValue: string | string[] = value;

    if (name === "categories" || name === "colors") {
      currentValue = value.split(",");
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: currentValue,
    }));
  };

  const handleFileChange = async (e : ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      image : file
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ formData });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            className="title"
            name="title"
            id="title"
            type="text"
            placeholder="product title"
            required
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="description"
            name="description"
            id="description"
            placeholder="product description"
            required
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="categories">Categories</label>
          <input
            className="categories"
            name="categories"
            id="categories"
            type="text"
            placeholder="add multiple value comma seperated"
            value={formData.categories}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="size">size</label>
          <input
            className="size"
            name="size"
            id="size"
            type="text"
            placeholder="size"
            value={formData.size}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="colors">Colors</label>
          <input
            className="colors"
            name="colors"
            id="colors"
            type="text"
            placeholder="add multiple value comma seperated"
            value={formData.colors}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price</label>
          <input
            className="price"
            name="price"
            id="price"
            type="number"
            placeholder="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="rating">rating</label>
          <input
            className="rating"
            name="rating"
            id="rating"
            type="number"
            placeholder="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="title">Product Image</label>
          <input
            className="img"
            name="img"
            id="img"
            type="file"
            placeholder="product image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Test Submit</button>
      </form>
    </div>
  );
}

export default CreateProductModal;
