import { React } from "react";
import * as styles from "./styles.module.scss";
import Loader from "src/components/atoms/Loader";
import Error from "src/components/atoms/Error";
import { Link } from "react-router-dom";
import Btn from "src/components/atoms/Btn";
import arrow from "../../../assets/icons/arrow.svg";

function Card({ personData, getError, loader }) {
  return getError ? (
    <Error notice="Character not found!" />
  ) : loader ? (
    <Loader />
  ) : personData ? (
    <section className={styles.card}>
      <div className={styles.content}>
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
