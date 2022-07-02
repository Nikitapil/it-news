import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { INews } from "../domain/newsTypes";
import { SingleNews } from "../pages/SingleNews";
import { setSingleNews, setSingleNewsError, setSingleNewsLoading } from "../redux/actionCreators";
import { newsReducer } from "../redux/newsReducer";
import { renderWithRedux } from "../utils/testUtils";

describe('single news tests', () => {
    let store: any;
    let news: INews | null = null
  beforeEach(() => {
    store = createStore(newsReducer);
    news  = {
    by: "danso",
    descendants: 29,
    id: 31958201,
    kids: [31958889, 31958722, 31958816, 31958754, 31958685, 31958842],
    score: 92,
    time: 1656762091,
    title: "ShotSpotter defamation lawsuit against VICE has been dismissed",
    type: "story",
    url: "https://twitter.com/mikeburesh/status/1542944407426572289",
    comments: [ {
        "by" : "norvig",
        "id" : 2921983,
        "kids" : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
        "parent" : 2921506,
        "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        "time" : 1314211127,
        "type" : "comment"
      }]
}
    
  });

  test('shold render single news page', () => {
    store.dispatch(setSingleNews(news!))
    render(renderWithRedux(<SingleNews/>, '/',store ))
    expect(screen.getByTestId('single-news')).toBeInTheDocument()
  })
  test('shold show error on single news page', () => {
    store.dispatch(setSingleNewsError(true))
    render(renderWithRedux(<SingleNews/>, '/',store ))
    expect(screen.queryByTestId('single-news')).not.toBeInTheDocument()
    expect(screen.getByText('Sorry, but news service is unavailable now')).toBeInTheDocument()
  })
  test('shold show loader on single news page', () => {
    store.dispatch(setSingleNewsLoading(true))
    render(renderWithRedux(<SingleNews/>, '/',store ))
    expect(screen.queryByTestId('single-news')).not.toBeInTheDocument()
    expect(screen.queryByText('Sorry, but news service is unavailable now')).not.toBeInTheDocument()
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  test('should show comments', () => {
    store.dispatch(setSingleNews(news!))
    render(renderWithRedux(<SingleNews/>, '/',store ))
    expect(screen.getByTestId('comment')).toBeInTheDocument()
  })
})