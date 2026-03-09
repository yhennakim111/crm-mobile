import { put, takeLatest } from "redux-saga/effects";
import { loadCustomers, setCustomers } from "./reducer";

function* handleLoadCustomers() {
    yield put(setCustomers([{ id: 1, name: "Test Customer" }]));
}

export default function* customerSagas() {
    yield takeLatest(loadCustomers.type, handleLoadCustomers);
}