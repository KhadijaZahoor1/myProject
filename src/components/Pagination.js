"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ meta }) => {
  const router = useRouter();
  const handlePageClick = (page) => {
    router.push(`/repo?page=${page.selected + 1}`);
  };
  return (
    <>
      <ReactPaginate
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={meta.totalPages}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName="active"
      />
    </>
  );
};

export default Pagination;
