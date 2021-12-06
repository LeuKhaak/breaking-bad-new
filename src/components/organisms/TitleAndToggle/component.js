import React from "react";
import * as styles from "./styles.module.scss";
import Btn from "src/components/atoms/Btn/index";
import lines from "../../../assets/icons/lines.svg";
import tiles from "../../../assets/icons/tiles.svg";
import lines2 from "../../../assets/icons/lines2.svg";
import tiles2 from "../../../assets/icons/tiles2.svg";

function TitleAndToggle({ tile, changeStyles }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Catalog</h3>
      <div className={styles.toggleWrapper}>
        <Btn
          btnStyle="toggle"
          icon={tile ? lines : lines2}
          onClick={changeStyles}
          arg={false}
        />
        <Btn
          btnStyle="toggle"
          icon={tile ? tiles : tiles2}
          onClick={changeStyles}
          arg={true}
        />
      </div>
    </div>
  );
}

export default TitleAndToggle;
