import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem } from "@mui/material";

import styles from "./UsersBox.module.css";

import { useNavigate } from "react-router-dom";
const PaginationPanel = ({ count=1, page=1 }) => {
  const navigate = useNavigate();
    return (
        <Pagination
            className={styles.pagination}
            page={+page}
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={(_, num) => {
              navigate(`/users/${num}`);             
            }}
        />
    );
};

export default PaginationPanel;
