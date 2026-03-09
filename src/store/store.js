import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import customerReducer from "../features/customer/reducer";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        customer: customerReducer,
    },
    middleware: [saga],
});

saga.run(rootSaga);

export default store;