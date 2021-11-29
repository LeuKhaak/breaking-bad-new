import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import CardList from "./component";
import { getStartData } from "../../../store/actions/person";

function CardListContainer() {
  const dispatch = useDispatch();

  const cardsData = useSelector((state) => state.cards.cardList);
  const getError = useSelector((state) => state.cards.getError);
  const loader = useSelector((state) => state.cards.loader);

  useEffect(() => {
    dispatch(getStartData());
  }, [dispatch]);

  return <CardList cardsData={cardsData} getError={getError} loader={loader} />;
}

export const container = CardListContainer;
