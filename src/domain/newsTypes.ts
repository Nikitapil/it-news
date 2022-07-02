export enum INewsActionsTypes {
  SET_TOP_NEWS = "SET_TOP_NEWS",
  SET_TOP_NEWS_LOADING = "SET_TOP_NEWS_LOADING",
  SET_TOP_NEWS_ERROR = "SET_TOP_NEWS_ERROR",
  FETCH_TOP_NEWS = "FETCH_TOP_NEWS",
  SET_SINGLE_NEWS = "SET_SINGLE_NEWS",
  FETCH_SINGLE_NEWS = "FETCH_SINGLE_NEWS",
  SET_SINGLE_NEWS_LOADING = "SET_SINGLE_NEWS_LOADING",
  SET_SINGLE_NEWS_ERROR = "SET_SINGLE_NEWS_ERROR",
}

export interface IComment {
  by: string;
  id: number;
  kids?: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
  comments?: IComment[]
}

export interface INews {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  comments?: IComment[];
}

export interface INewsInitialState {
  topNews: INews[];
  isTopNewsLoading: boolean;
  isTopNewsError: boolean;
  singleNews: INews | null;
  isSingleNewsLoading: boolean;
  isSingleNewsError: boolean;
}
interface ISetTopNewsAction {
  type: INewsActionsTypes.SET_TOP_NEWS;
  payload: INews[];
}
interface ISetTopNewsLoading {
  type: INewsActionsTypes.SET_TOP_NEWS_LOADING;
  payload: boolean;
}

interface ISetTopNewsError {
  type: INewsActionsTypes.SET_TOP_NEWS_ERROR;
  payload: boolean;
}

interface ISetSingleNews {
  type: INewsActionsTypes.SET_SINGLE_NEWS;
  payload: INews;
}

interface ISetSingleNewsLoading {
  type: INewsActionsTypes.SET_SINGLE_NEWS_LOADING;
  payload: boolean;
}

interface ISetSingleNewsError {
    type: INewsActionsTypes.SET_SINGLE_NEWS_ERROR;
    payload: boolean;
  }

export type TNewsActions =
  | ISetTopNewsAction
  | ISetTopNewsLoading
  | ISetTopNewsError
  | ISetSingleNews
  | ISetSingleNewsLoading
  | ISetSingleNewsError
