import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import styles from "./leftSide.module.scss";

const LeftSide = () => {
  const image = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.contact.image;
      }
    )
  );

  return (
    <img
      src={image}
      alt="contact-image"
      loading="lazy"
      className={styles["contact-image"]}
    />
  );
};

export default LeftSide;
