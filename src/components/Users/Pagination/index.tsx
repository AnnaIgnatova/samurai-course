import React from "react";
import styles from "./styles.module.css";

export interface PagintaionData {
  currentPage: number;
  handlePage: (page: number) => void;
  totalCount: number;
  pageCount: number;
}

export const Pagination: React.FC<PagintaionData> = ({
  currentPage,
  handlePage,
  totalCount,
  pageCount,
}) => {
  const [leftBorderNum, setLeftBorderNum] = React.useState(1);

  const handleRight = () => {
    if (leftBorderNum + pageCount < totalCount) {
      setLeftBorderNum(leftBorderNum + pageCount);
      handlePage(leftBorderNum + pageCount);
    }
  };

  const handleLeft = () => {
    if (leftBorderNum - pageCount >= 1) {
      setLeftBorderNum(leftBorderNum - pageCount);
      handlePage(leftBorderNum - pageCount);
    }
  };

  return (
    <div className={styles["pagination-container"]}>
      <button
        onClick={handleLeft}
        className={`${styles["pagintaion-button"]} ${styles["button-left"]}`}
      ></button>
      <div className={styles.pages}>
        {Array.from(Array(pageCount).keys()).map((page) => (
          <div
            key={leftBorderNum + page}
            className={`${styles.page} ${
              currentPage === leftBorderNum + page && styles["active-page"]
            }`}
            onClick={() => handlePage(leftBorderNum + page)}
          >
            {leftBorderNum + page}
          </div>
        ))}
      </div>
      <button
        onClick={handleRight}
        className={`${styles["pagintaion-button"]} ${styles["button-right"]}`}
      ></button>
    </div>
  );
};
