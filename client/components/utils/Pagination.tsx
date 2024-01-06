"use client";

import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface IPagiantionProps {
  productsCount: number;
  limit: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({
  productsCount,
  currentPage,
  limit,
  setPage,
}: IPagiantionProps) {
  const pageCount = Math.ceil(productsCount / limit);

  return (
    <div className="page__wrapper">
      <button
        className="page__key"
        disabled={currentPage <= 0}
        onClick={() => setPage((prev) => prev + -1)}
      >
        <MdKeyboardArrowLeft className="arrow left" />
      </button>

      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={index}
          className={`page__number ${currentPage === index && "active"}`}
          onClick={() => setPage(index)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="page__key"
        disabled={pageCount === currentPage + 1}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <MdKeyboardArrowRight className="arrow right" />
      </button>
    </div>
  );
}

export default Pagination;
