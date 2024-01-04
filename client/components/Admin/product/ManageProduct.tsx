"use client";

import Modal from "@/components/modal/Modal";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import CreateProductModal from "./CreateProductModal";
import ListProducts from "./ListProducts";

function ManageProduct() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalActionStatus, setModalActionStatus] = useState<
    "done" | "nostarted" | "inprogress" | "error"
  >("nostarted");

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setLoading(false)
    setModalActionStatus("nostarted")
  };

  const handleOnModalAction = () => {
    setLoading(true);
    setModalActionStatus("inprogress");
  };

  useEffect(() => {
    if (modalActionStatus === "done") {
      handleCloseModal()
    } else if (modalActionStatus === "error") {
      setLoading(false)
      setModalActionStatus("nostarted")
    }
  }, [modalActionStatus]);

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

      <div className="content-section">
        <ListProducts/>
      </div>

      <Modal
        title="Create New Product"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAction={handleOnModalAction}
        actionBtnName="Create"
        loading={loading}
      >
        <CreateProductModal
          modalActionStatus={modalActionStatus}
          setModalActionStatus={setModalActionStatus}
        />
      </Modal>
    </section>
  );
}

export default ManageProduct;
