import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppLoader } from '../components/app/AppLoader'
import { NewsLink } from '../components/news/NewsLink'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchTopNews } from '../redux/actionCreators'
import '../styles/mainpage.scss'

export const MainPage = () => {
  const dispatch = useDispatch()
  const {topNews, isTopNewsLoading, isTopNewsError} = useTypedSelector(state => state)

  const updateNews = () => {
    dispatch(fetchTopNews())
  }

    useEffect(() => {
      updateNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className='container main-page'>
     <div className='main-page__header'>
        <h2 className='main_page__title'>Latest IT news</h2>
        <button className='main-page__update' disabled={isTopNewsLoading} onClick={updateNews}>&#8635;</button>
     </div>
      {isTopNewsLoading && <AppLoader/>}
      {topNews.length > 0 && !isTopNewsLoading && <div className='news-links-container'>
        {topNews.map(news => <NewsLink key={news.id} news={news} />)}
        </div>}
        {isTopNewsError && <p>Sorry, but news service is unavailable now</p>}
    </div>
  )
}
