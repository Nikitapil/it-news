import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { INews } from '../../domain/newsTypes'
import { formatTimeStampToDate } from '../../utils/dates'

interface NewsLinkProps {
    news: INews
}

export const NewsLink:FC<NewsLinkProps> = ({news}) => {
  return (
    <Link to={`/news/${news.id}`} className='news-link'>
        <div className='news-link__top'  data-testid='news-link'>
            <h3 className='news-link__title'>{news.title}</h3>
            <p>{formatTimeStampToDate(news.time)}</p>
        </div>
        <div className='news-link__bottom'>
            <p>Aythored by {news.by}</p>
            <p>Score: {news.score}</p>
        </div>
    </Link>
 )
}
