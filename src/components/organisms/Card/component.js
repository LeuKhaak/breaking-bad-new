import React from "react";
import * as styles from "./styles.module.scss";
import Loader from "../../../components/atoms/Loader";
import Error from "../../../components/atoms/Error";
import { Link } from "react-router-dom";
import Btn from "../../../components/atoms/Btn";
import arrow from "src/assets/icons/arrow.svg";

function Card({
  personData,
  getError,
  loader,
  quoteData,
  quoteError,
  quoteLoader,
}) {
  return getError ? (
    <Error notice="Character not found!" />
  ) : loader ? (
    <Loader />
  ) : personData ? (
    <div className={styles.card}>
      <div className={styles.container}>
        <Link to="/catalog" className={styles.link}>
          <Btn btnText="Back to catalog" icon={arrow} />
        </Link>
        <div className={styles.person}>
          <div className={styles.image}>
            <img className={styles.img} src={personData.img} alt="#" />
          </div>
          <div className={styles.inf}>
            <span
              className={
                personData.status === "Alive" ? styles.alive : styles.deceased
              }
            >
              {personData.status.toLowerCase()}
            </span>
            <h3 className={styles.name}>{personData.name}</h3>
            <span className={styles.birthday}>
              Birthday:
              <span className={styles.inner}>{personData.birthday}</span>
            </span>
            <span className={styles.niсkName}>
              Niсk-name:
              <span className={styles.inner}>{personData.nickname}</span>
            </span>
            {quoteError ? (
              <Error />
            ) : quoteLoader ? (
              <Loader />
            ) : (
              <span className={styles.quote}>
                <span className={styles.quoteLabel}>Quote:</span>
                <span className={styles.inner}>{quoteData}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.card}>
      <div className={styles.noCharacter}>
        <Error notice="Invalid character name!" />
        <span className={styles.instruction}>
          Go back to the catalog and enter a different name.
        </span>
      </div>
    </div>
  );
}

export default Card;
