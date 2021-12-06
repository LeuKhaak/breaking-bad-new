import React from "react";
import * as styles from "./styles.module.scss";
import CardMini from "src/components/molecules/CardMini";
import Loader from "src/components/atoms/Loader";
import Error from "src/components/atoms/Error";
import { Link } from "react-router-dom";

function CardList({ getError, loader, cardsData, tiles }) {
  return getError ? (
    <Error notice="The request failed!" />
  ) : loader ? (
    <Loader />
  ) : (
    <div className={styles.cardList}>
      <div className={styles.container}>
        <div className={tiles ? styles.noHeadersLine : styles.headersLine}>
          <span className={styles.status}>Status</span>
          <span className={styles.name}>Name</span>
          <span className={styles.birthday}>Birthday</span>
        </div>
        <div className={tiles ? styles.list : styles.listLines}>
          {cardsData &&
            cardsData.map((element) => (
              <Link
                key={element.char_id}
                to={`/person/${element.char_id}`}
                className={styles.link}
              >
                <CardMini
                  tiles={tiles}
                  id={element.id}
                  name={element.name}
                  birthday={element.birthday}
                  img={element.img}
                  status={element.status}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
} //

export default CardList;
