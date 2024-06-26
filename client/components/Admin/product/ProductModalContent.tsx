"use client";

import ErrorField from "@/components/utils/ErrorField";
import Mandidatory from "@/components/utils/Mandidatory";
import {
  ICreateProductData,
  IProductResponse,
} from "@/interface/manageproduct";
import {
  createProductService,
  updateProductService,
} from "@/services/productService";
import { useSession } from "next-auth/react";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

interface IProductModalContentProps {
  modalActionStatus: "done" | "nostarted" | "inprogress" | "error";
  setModalActionStatus: React.Dispatch<
    React.SetStateAction<"done" | "nostarted" | "inprogress" | "error">
  >;
  modalAction: "create" | "edit";
  modalUpdateContent: IProductResponse | null;
  isModalOpen : boolean
}

function ProductModalContent({
  modalActionStatus,
  setModalActionStatus,
  modalAction,
  modalUpdateContent,
  isModalOpen
}: IProductModalContentProps) {
  const [formData, setFormData] = useState<ICreateProductData>({
    title: "",
    description: "",
    categories: [],
    size: "",
    colors: [],
    price: 0,
    rating: 0,
    image: null,
  });

  const [error, setError] = useState("");
  const { data: session } = useSession();
  const [currentProductId, setCurrentProductId] = useState("");

  const handleResetForm = async () => {
    setFormData({
      title: "",
      description: "",
      categories: [],
      size: "",
      colors: [],
      price: 0,
      rating: 0,
      image: null,
    });
  };

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
        | "rating";
      value: string;
    };

    let currentValue: string | string[] | number = value;

    if (name === "categories" || name === "colors") {
      currentValue = value.split(",");
    }

    if (name === "rating") {
      if (parseInt(value) > 5) {
        currentValue = 5;
      } else if (parseInt(value) < 0) {
        currentValue = 0;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: currentValue,
    }));
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = async () => {
    if (formData.title && formData.description && formData.price) {
      setError("");
      console.log({ formData });

      const productFormData = new FormData();
      Object.entries(formData).map(([key, value]) =>
        productFormData.set(key, value)
      );

      if (modalAction === "edit") {
        // update product section
        console.log({ productFormData });
        const response = await updateProductService(
          productFormData,
          session?.user?.accessToken || "",
          currentProductId
        );
        if (response.error) {
          // add toast
          console.log("error Update product : ", response.message);
          setModalActionStatus("error");
        } else {
          // toast success
          console.log("SUCCESS Update product : ", response);
          setModalActionStatus("done");
          handleResetForm()
        }
      } else {
        // Create product section
        const response = await createProductService(
          productFormData,
          session?.user?.accessToken || ""
        );
        if (response.error) {
          // add toast
          console.log("error create product : ", response.message);
          setModalActionStatus("error");
        } else {
          // toast success
          console.log("SUCCESS create product : ", response);
          setModalActionStatus("done");
          handleResetForm()
        }
      }
    } else {
      setError("Fill all madidatory fields");
      setModalActionStatus("error");
    }
  };

  useEffect(() => {
    if (modalActionStatus === "inprogress") {
      handleSubmit();
    }
  }, [modalActionStatus]);

  useEffect(() => {
    if (modalAction === "edit" && modalUpdateContent) {
      setCurrentProductId(modalUpdateContent._id);
      setFormData((prev) => ({
        ...prev,
        ...modalUpdateContent,
      }));
    }
    if(!isModalOpen) {
      handleResetForm()
    }
  }, [modalAction, modalUpdateContent, isModalOpen]);

  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="input-group">
          <div className="labels-group">
            <label htmlFor="title">Title</label>
            <Mandidatory />
          </div>
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
          <div className="labels-group">
            <label htmlFor="description">Description</label>
            <Mandidatory />
          </div>
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
          <div className="labels-group">
            <label htmlFor="price">Price</label>
            <Mandidatory />
          </div>
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
            min={0}
            max={5}
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
        <ErrorField errorText={error} />
      </form>
    </div>
  );
}

export default ProductModalContent;
