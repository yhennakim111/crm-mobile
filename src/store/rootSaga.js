import { all } from "redux-saga/effects";
import customerSagas from "../features/customer/sagas";

export default function* rootSaga() {
    yield all([customerSagas()]);
}