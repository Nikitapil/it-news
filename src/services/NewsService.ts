import axios from "axios";
import { INews } from "../domain/newsTypes";

export class NewsService {

  static async getTopNews(): Promise<INews[]> {
    const allNews = await axios.get(
      " https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const topHundredNews = await axios.all(
      allNews.data
        .slice(0, 100)
        .map((newsId: number) =>
          axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`
          )
        )
    );
    return topHundredNews.map((resp: any) => resp.data);
  }

  static async fetchSingleNews(id: string) {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        let comments = []
        if(response.data.kids.length) {
            comments = await NewsService.fetchComments(response.data.kids)
        }
        return {...response.data, comments}
  }

  static async fetchComments(commentIds: number[]) {
        const response = await axios.all(commentIds.map(id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)))
        return response.map(comment => comment.data)
  }
}
