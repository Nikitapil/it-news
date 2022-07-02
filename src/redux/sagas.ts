import { INewsActionsTypes } from './../domain/newsTypes';
import { takeEvery, put, call } from "redux-saga/effects";
import { INews } from "../domain/newsTypes";
import { NewsService } from "../services/NewsService";
import { setSingleNews, setSingleNewsError, setSingleNewsLoading, setTopNews, setTopNewsError, setTopNewsLoading } from "./actionCreators";

function* getTopNewsSaga() {
  try {
    yield put(setTopNewsLoading(true));
    const response: INews[] = yield call(NewsService.getTopNews);
    yield put(setTopNews(response))
  } catch (error) {
      yield put(setTopNewsError(true))
  } finally {
    yield put(setTopNewsLoading(false));
  }
}

function*  getSingleNews({payload}: any) {
    try {
      yield put (setSingleNewsLoading(true))
      const response: INews = yield call(() => NewsService.fetchSingleNews(payload))
      yield put(setSingleNews(response))
    } catch (e) {
        yield put(setSingleNewsError(true))
    } finally {
      yield put (setSingleNewsLoading(false))
    }
}

export function* sagaListener() {
    yield takeEvery(INewsActionsTypes.FETCH_TOP_NEWS, getTopNewsSaga)
    yield takeEvery(INewsActionsTypes.FETCH_SINGLE_NEWS, getSingleNews)
}
