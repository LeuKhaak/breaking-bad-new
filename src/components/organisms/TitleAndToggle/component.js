import React from "react";
import * as styles from "./styles.module.scss";
import Btn from "../../../components/atoms/Btn/index";
import lines from "src/assets/icons/lines.svg";
import tiles from "src/assets/icons/tiles.svg";
import lines2 from "src/assets/icons/lines2.svg";
import tiles2 from "src/assets/icons/tiles2.svg";

function TitleAndToggle({ tile, changeStyles }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Catalog</h3>
      <div className={styles.toggleWrapper}>
        <Btn
          id="lines"
          btnStyle="toggle"
          icon={tile ? lines : lines2}
          onClick={changeStyles}
          arg={false}
        />
        <Btn
          id="tiles"
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
