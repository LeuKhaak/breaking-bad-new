import { useSelector, useDispatch } from "react-redux";
import { React, useEffect } from "react";
import CardList from "./component";
import { getStartData } from "../../../store/actions/person";
import { getQuoteData } from "../../../store/actions/quote";

function CardListContainer() {
  const dispatch = useDispatch();

  const cardsData = useSelector((state) => state.cards.cardList);
  const tiles = useSelector((state) => state.cards.tiles);
  const getError = useSelector((state) => state.cards.getError);
  const loader = useSelector((state) => state.cards.loader);

  const currentPage = useSelector((state) => state.paginator.currentPage);
  const limit = useSelector((state) => state.paginator.perPage);
  const offset = limit * (currentPage - 1);

  useEffect(() => {
    dispatch(getQuoteData(""));
    dispatch(getStartData(limit, offset));
  }, [dispatch, limit, offset]);

  return (
    <CardList
      cardsData={cardsData}
      getError={getError}
      loader={loader}
      tiles={tiles}
    />
  );
}

export const container = CardListContainer;
