import React from "react";
import * as styles from "./styles.module.scss";
import cn from "classnames";

const Btn = ({
  location,
  disp,
  btnText,
  icon,
  btnStyle,
  type,
  color,
  onClick,
  arg,
  arg2,
  id,
}) => {
  const classBtn = cn(
    styles.btn,
    styles[btnStyle],
    styles[color],
    styles[type]
  );
  const onClick1 = () => {
    if (onClick) onClick(arg, arg2);
  };
  return (
    <button
      className={classBtn}
      id={id}
      style={
        location && location !== "/catalog"
          ? { background: "none" }
          : disp
          ? { display: disp }
          : {}
      }
      onClick={() => {
        onClick1();
      }}
    >
      {icon ? (
        <img
          className={styles.icon}
          src={icon}
          alt="#"
          style={{ fill: "red" }}
        />
      ) : (
        ""
      )}
      <span className={styles.linkText}>{btnText}</span>
    </button>
  );
};

export default Btn;
