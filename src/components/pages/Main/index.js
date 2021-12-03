import React from "react";
import * as styles from "./styles.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import image from "../../../assets/images/breaking-bad.webp";

function Main() {
  return (
    <div className={styles.wrapper}>
      <LazyLoadImage
        className={styles.image}
        src={image}
        alt="#"
      ></LazyLoadImage>
    </div>
  );
}

export default Main;
