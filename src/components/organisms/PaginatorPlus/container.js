import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLimit } from "src/store/actions/paginator";
import PaginatorPlus from "./component";

function PaginatorPlusContainer() {
  const loader = useSelector((state) => state.cards.loader);
  const dispatch = useDispatch();
  const perPage = useSelector((state) => state.paginator.perPage);
  const amounts = [5, 10, 15, 20];

  const changeL = (val) => {
    dispatch(changeLimit(val));
  };
  return (
    <PaginatorPlus
      loader={loader}
      perPage={perPage}
      amounts={amounts}
      changeL={changeL}
    />
  );
}

export const container = PaginatorPlusContainer;
