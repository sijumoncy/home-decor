"use client";

import Modal from "@/components/modal/Modal";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import ProductModalContent from "./ProductModalContent";
import ListProducts from "./ListProducts";
import { IProductResponse } from "@/interface/manageproduct";

function ManageProduct() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalAction, setModalAction] = useState<"create" | "edit">("create");
  const [modalActionStatus, setModalActionStatus] = useState<
    "done" | "nostarted" | "inprogress" | "error"
  >("nostarted");
  const [modalUpdateContent, setMOdalUpdateContent] = useState<IProductResponse | null>(null)

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setLoading(false);
    setModalActionStatus("nostarted");
  };

  const handleOnModalAction = () => {
    setLoading(true);
    setModalActionStatus("inprogress");
  };

  const handleEditProduct = async (product: IProductResponse) => {
    setMOdalUpdateContent(product)
    setModalAction("edit");
    handleOpenModal();
  };

  useEffect(() => {
    if (modalActionStatus === "done") {
      handleCloseModal();
    } else if (modalActionStatus === "error") {
      setLoading(false);
      setModalActionStatus("nostarted");
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

        <button
          className="add-btn"
          onClick={() => {
            setModalAction("create");
            handleOpenModal();
          }}
        >
          Add <FaPlus className="icon-plus" />
        </button>
      </div>

      <div className="content-section">
        <ListProducts
          modalActionStatus={modalActionStatus}
          setModalActionStatus={setModalActionStatus}
          handleEditProduct={handleEditProduct}
        />
      </div>

      <Modal
        title={
          modalAction === "create" ? "Create New Product" : "Update Product"
        }
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAction={handleOnModalAction}
        actionBtnName={modalAction === "create" ? "Create" : "Update"}
        loading={loading}
      >
        <ProductModalContent
          modalActionStatus={modalActionStatus}
          setModalActionStatus={setModalActionStatus}
          modalAction={modalAction}
          modalUpdateContent={modalUpdateContent}
        />
      </Modal>
    </section>
  );
}

export default ManageProduct;
