"use client";

import Modal from "@/components/modal/Modal";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

function ManageProduct() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOnModalAction = () => {
    handleCloseModal();
    console.log("action modal clicked");
    
  };

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

        <button className="add-btn" onClick={handleOpenModal}>
          Add <FaPlus className="icon-plus" />
        </button>
      </div>

      <div className="content-section"></div>

      <Modal
        title="Create New Product"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAction={handleOnModalAction}
        actionBtnName="Create"
      >
        <p>This is the content of the modal.</p>
      </Modal>
    </section>
  );
}

export default ManageProduct;
