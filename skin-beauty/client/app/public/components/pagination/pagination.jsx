import React from "react";
import { Pagination, PaginationItem } from "@mui/material";

export const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (event, pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <Pagination
      className="pagination"
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      renderItem={(item) => (
        <PaginationItem
          component={item.page === currentPage ? "div" : "button"}
          disabled={item.page === currentPage}
          {...item}
        />
      )}
      nexticonbuttonprops={{ disabled: currentPage === totalPages }}
      previconbuttonprops={{ disabled: currentPage === 1 }}
      siblingCount={1}
      boundaryCount={1}
      showFirstButton
      showLastButton
      size="large"
    />
  );
};