import { INewsActionsTypes } from './../domain/newsTypes';
import { INews } from "../domain/newsTypes";

export const setTopNews = (payload:INews[] ) => {
    return {
        type: INewsActionsTypes.SET_TOP_NEWS,
        payload
    }
}
export const setTopNewsLoading = (payload:boolean ) => {
    return {
        type: INewsActionsTypes.SET_TOP_NEWS_LOADING,
        payload
    }
}
export const setTopNewsError = (payload:boolean ) => {
    return {
        type: INewsActionsTypes.SET_TOP_NEWS_ERROR,
        payload
    }
}
export const fetchTopNews = () => {
    return { type: INewsActionsTypes.FETCH_TOP_NEWS }
}

export const setSingleNews = (payload:INews ) => {
    return {
        type: INewsActionsTypes.SET_SINGLE_NEWS,
        payload
    }
}

export const fetchSingleNews = (payload: string ) => {
    return {
        type: INewsActionsTypes.FETCH_SINGLE_NEWS,
        payload
    }
}

export const setSingleNewsLoading = (payload: boolean ) => {
    return {
        type: INewsActionsTypes.SET_SINGLE_NEWS_LOADING,
        payload
    }
}

export const setSingleNewsError = (payload: boolean ) => {
    return {
        type: INewsActionsTypes.SET_SINGLE_NEWS_ERROR,
        payload
    }
}