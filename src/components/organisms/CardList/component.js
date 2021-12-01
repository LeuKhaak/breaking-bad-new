import React from "react";
import * as styles from "./styles.module.scss";
import CardMini from "src/components/molecules/CardMini";
import Loader from "src/components/atoms/Loader";
import Error from "src/components/atoms/Error";
import { Link } from "react-router-dom";

function CardList({ getError, loader, cardsData }) {
  return getError ? (
    <Error notice="The request failed!" />
  ) : loader ? (
    <Loader />
  ) : (
    <section className={styles.cardList}>
      <div className={styles.container}>
        <div className={styles.list}>
          {cardsData &&
            cardsData.map((element) => (
              <Link
                key={element.char_id}
                to={`/person/${element.char_id}`}
                className={styles.link}
              >
                <CardMini
                  list={true}
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
    </section>
  );
} //

export default CardList;
