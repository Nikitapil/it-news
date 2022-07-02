import { render, screen,  } from "@testing-library/react"
import { createStore } from "redux";
import App from "../App";
import { INews } from "../domain/newsTypes";
import { MainPage } from "../pages/MainPage"
import { setTopNews, setTopNewsError, setTopNewsLoading } from "../redux/actionCreators";
import { newsReducer } from "../redux/newsReducer";
import { renderWithRedux } from "../utils/testUtils"


describe('main page tests', () => {
    let store: any;
    let topNews: INews[] = []
  beforeEach(() => {
    store = createStore(newsReducer);
    topNews  = [{
    by: "danso",
    descendants: 29,
    id: 31958201,
    kids: [31958889, 31958722, 31958816, 31958754, 31958685, 31958842],
    score: 92,
    time: 1656762091,
    title: "ShotSpotter defamation lawsuit against VICE has been dismissed",
    type: "story",
    url: "https://twitter.com/mikeburesh/status/1542944407426572289"}]
  });

  test('should render app', () => {
    render(renderWithRedux(<App/>, '/',store ))
    expect(screen.getByTestId('main')).toBeInTheDocument()
})

    test('should render main page', () => {
        store.dispatch(setTopNews(topNews))
        render(renderWithRedux(<MainPage/>, '/',store ))
        expect(screen.getByTestId('news-link')).toBeInTheDocument()
    })

    test('should show loader', () => {
        store.dispatch(setTopNewsLoading(true))
        render(renderWithRedux(<MainPage/>, '/',store ))
        expect(screen.queryByTestId('news-link')).not.toBeInTheDocument()
        expect(screen.getByTestId('loader')).toBeInTheDocument()
    })

    test('should show error message', () => {
        store.dispatch(setTopNewsError(true))
        render(renderWithRedux(<MainPage/>, '/',store ))
        expect(screen.queryByTestId('news-link')).not.toBeInTheDocument()
        expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
        expect(screen.getByText('Sorry, but news service is unavailable now')).toBeInTheDocument()
    })
})