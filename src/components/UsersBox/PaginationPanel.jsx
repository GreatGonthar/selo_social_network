import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import styles from "./UsersBox.module.css";

const PaginationPanel = ({ setPage, count }) => {
  return (
    <Pagination
      className={styles.pagination}
      count={count}
      variant="outlined"
      shape="rounded"
      onChange={(_, num) => {
        setPage(num);
      }}
    />
  );
};

export default PaginationPanel;
