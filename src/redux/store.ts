import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { newsReducer } from "./newsReducer";
import { sagaListener } from "./sagas";

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(newsReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(sagaListener)