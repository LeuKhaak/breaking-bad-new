import React from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";

const Btn = ({ location, btnText, icon, btnStyle, type, color, onClick }) => {
  const classBtn = cn(
    styles.btn,
    styles[btnStyle],
    styles[color],
    styles[type]
  );
  return (
    <button
      className={classBtn}
      style={location && location !== "/catalog" ? { background: "none" } : {}}
      onClick={onClick}
    >
      {icon ? <img className={styles.icon} src={icon} alt="#" /> : ""}
      <span className={styles.linkText}>{btnText}</span>
    </button>
  );
};

export default Btn;
