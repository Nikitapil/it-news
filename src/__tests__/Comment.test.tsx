import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createStore } from "redux";
import { Comment } from "../components/news/Comment";
import { IComment } from "../domain/newsTypes";
import { newsReducer } from "../redux/newsReducer";
import { NewsService } from "../services/NewsService";
import { renderWithRedux } from "../utils/testUtils";

jest.mock('../services/NewsService.ts')

describe('comment item tests', () => {
    let store: any;
    let comment: IComment = {
        "by" : "norvig",
        "id" : 2921983,
        "kids" : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
        "parent" : 2921506,
        "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        "time" : 1314211127,
        "type" : "comment"
      }
  beforeEach(() => {
    store = createStore(newsReducer);
    comment = {
        "by" : "norvig",
        "id" : 2921983,
        "kids" : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
        "parent" : 2921506,
        "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        "time" : 1314211127,
        "type" : "comment"
      }
    })

    test('should render comment component', () => {
        render(renderWithRedux(<Comment comment={comment}/>, '/',store ))
        expect(screen.getByTestId('comment')).toBeInTheDocument()
        expect(screen.getByTestId('reply-btn')).toBeInTheDocument()
    })

    test('should render without reply btn', () => {
        delete comment.kids
        render(renderWithRedux(<Comment comment={comment}/>, '/',store ))
        expect(screen.queryByTestId('reply-btn')).not.toBeInTheDocument()
    })
    test('should work reply btn', async () => {
        (NewsService.fetchComments as any).mockReturnValue([{...comment}])
        render(renderWithRedux(<Comment comment={comment}/>, '/',store ))
        expect(screen.getByTestId('reply-btn')).toBeInTheDocument()
        const button = screen.getByTestId('reply-btn')
        fireEvent.click(button)
        expect(NewsService.fetchComments).toHaveBeenCalled()
        await waitFor(() => {
            expect(screen.getByTestId('comment-comments')).toBeInTheDocument()
        })
        fireEvent.click(button)
         await waitFor(() => {
            expect(screen.queryByTestId('comment-comments')).not.toBeInTheDocument()
        })
    })
})