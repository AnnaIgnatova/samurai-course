import React from "react";
import styles from "./styles.module.css";

export interface PagintaionData {
  currentPage: number;
  handlePage: (page: number) => void;
}

export const Pagination: React.FC<PagintaionData> = ({
  currentPage,
  handlePage,
}) => {
  return (
    <div className={styles.pages}>
      {Array.from(Array(10).keys()).map((page) => (
        <div
          key={page}
          className={`${styles.page} ${
            currentPage === page + 1 && styles["active-page"]
          }`}
          onClick={() => handlePage(page + 1)}
        >
          {page + 1}
        </div>
      ))}
    </div>
  );
};
