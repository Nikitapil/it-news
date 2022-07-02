import  axios  from 'axios';
import { NewsService } from './../services/NewsService';

jest.mock('axios')

describe('news servicу tests', () => {
    const news = {
        by: "danso",
        descendants: 29,
        id: 31958201,
        kids: [],
        score: 92,
        time: 1656762091,
        title: "ShotSpotter defamation lawsuit against VICE has been dismissed",
        type: "story",
        url: "https://twitter.com/mikeburesh/status/1542944407426572289"
      }
    const comment = {
        "by" : "norvig",
        "id" : 2921983,
        "kids" : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
        "parent" : 2921506,
        "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
        "time" : 1314211127,
        "type" : "comment"
      }

    test('should work get top news function',async () => {
        (axios.all as any).mockReturnValue([{data: news}]);
        (axios.get as any).mockReturnValue({data: [1, 2, 3, 4, 5]})
        const topNews = await NewsService.getTopNews()
        expect(axios.get).toHaveBeenCalled()
        expect(topNews).toEqual([news])
    })

    test('should work fetch singl news function', async () => {
        (axios.get as any).mockReturnValue({data: news});
        const singleNews = await NewsService.fetchSingleNews('1')
        expect(axios.get).toHaveBeenCalled()
    })

    test('should work fetch comments function', async () => {
        (axios.get as any).mockReturnValue({data: comment});
        (axios.all as any).mockReturnValue([{data: comment}]);
        const comments = await NewsService.fetchComments([1, 2, 3, 4])
        expect(comments).toEqual([comment])
    })
})