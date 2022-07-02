import {
  INewsActionsTypes,
  INewsInitialState,
  TNewsActions,
} from "../domain/newsTypes";

const initialState: INewsInitialState = {
  topNews: [],
  isTopNewsLoading: false,
  isTopNewsError: false,
  singleNews: null,
  isSingleNewsLoading: false,
  isSingleNewsError: false,
};

export const newsReducer = (
  state = initialState,
  action: TNewsActions
): INewsInitialState => {
  switch (action.type) {
    case INewsActionsTypes.SET_TOP_NEWS:
      return { ...state, topNews: action.payload };
    case INewsActionsTypes.SET_TOP_NEWS_LOADING:
      return { ...state, isTopNewsLoading: action.payload };
    case INewsActionsTypes.SET_TOP_NEWS_ERROR:
      return { ...state, isTopNewsError: action.payload };
    case INewsActionsTypes.SET_SINGLE_NEWS:
      return { ...state, singleNews: action.payload };
    case INewsActionsTypes.SET_SINGLE_NEWS_LOADING:
      return { ...state, isSingleNewsLoading: action.payload };
    case INewsActionsTypes.SET_SINGLE_NEWS_ERROR:
      return { ...state, isSingleNewsError: action.payload };
    default:
      return { ...state };
  }
};
export type RootState = ReturnType<typeof newsReducer>;
