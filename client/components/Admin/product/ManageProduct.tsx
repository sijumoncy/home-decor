import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

function ManageProduct() {
  return (
    <section className="product__container">
      <div className="header-section">
        <div className="search-box">
          <input
            type="text"
            className="search-inp"
            placeholder="search products"
          />
          <CiSearch style={{ strokeWidth: "2" }} className="icon-search" />
        </div>

        <button className="add-btn">
          Add <FaPlus className="icon-plus" />
        </button>
      </div>

      <div className="content-section"></div>
    </section>
  );
}

export default ManageProduct;
