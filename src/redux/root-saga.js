import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop/shop.sagas";

export default function* footSaga() {
  yield all([call(fetchCollectionStart)]);
}

