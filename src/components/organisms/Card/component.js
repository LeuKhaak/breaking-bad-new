import { React } from "react";
import * as styles from "./styles.module.scss";
import Loader from "src/components/atoms/Loader/index";
import Error from "src/components/atoms/Error/index";
import { Link } from "react-router-dom";

function Card({ personData, getError, loader }) {
  return getError ? (
    <Error notice="Character not found!" />
  ) : loader ? (
    <Loader />
  ) : personData ? (
    <section className={styles.card}>
      <div className={styles.content}>
        <Link to="/catalog" className={styles.link}>
          <div className={styles.backWrapper}>
            <span className={styles.arrow}></span>
            <span className={styles.back}>Back to catalog</span>
          </div>
        </Link>
        <div className={styles.person}>
          <div className={styles.image}>
            <img className={styles.img} src={personData.img} alt="#" />
          </div>
          <div className={styles.inf}>
            <span
              className={
                personData.status === "Deceased"
                  ? styles.deceased
                  : styles.alive
              }
            >
              {personData.status.toLowerCase()}
            </span>
            <h3 className={styles.name}>{personData.name}</h3>
            <span className={styles.birthday}>
              Birthday:{" "}
              <span className={styles.inner}>{personData.birthday}</span>
            </span>
            <span className={styles.niсkName}>
              Niсk-name:{" "}
              <span className={styles.inner}>{personData.nickname}</span>
            </span>
            <span className={styles.quote}>
              <span className={styles.quoteLabel}>Quote: </span>
              <span className={styles.inner}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Vestibulum
                nec mi felis fames hendrerit per. Natoque sem enim, phasellus ac
                ultrices fames. Orci mus magna.
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
}

export default Card;
