import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { AppLoader } from '../components/app/AppLoader'
import { Comment } from '../components/news/Comment'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchSingleNews } from '../redux/actionCreators'
import '../styles/singlenews.scss'
import { formatTimeStampToDate } from '../utils/dates'
export const SingleNews = () => {
    const { singleNews, isSingleNewsError, isSingleNewsLoading} = useTypedSelector(state => state)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSingleNews(id!))
    }, [])

    if(isSingleNewsError && !isSingleNewsLoading) {
        return (<p>Sorry, but news service is unavailable now</p>)
    }

    if(isSingleNewsLoading) {
        return (<div className='container  single-news__container'><AppLoader/></div>)
    }

  return (
    <div className='container single-news__container' data-testid='single-news'>
       <div className='single-news__top'> 
        <Link className='single-news__back' to='/'>&larr; To main page</Link>
        <h2 className='single-news__title'>{singleNews?.title}</h2>
       </div>
        <div className='news-info'>
            <p>Original news <a className='news-link__outside' href={singleNews?.url}>here</a></p>
            <ul className='news-attrs'>
                <li className='news-attrs__item'>
                    <h3>Date:</h3>
                    <p>{formatTimeStampToDate(singleNews?.time!)}</p>
                </li>
                <li className='news-attrs__item'>
                    <h3>Author:</h3>
                    <p>{singleNews?.by}</p>
                </li>
                <li className='news-attrs__item'>
                    <h3>Comments count:</h3>
                    <p>{singleNews?.comments?.length || 0}</p>
                </li>
            </ul>
        </div>
        <div className='news-comments'>
            <h2 className='news-comments__title'>News Comments</h2>
            {singleNews?.comments?.map(comment => {
                return (<Comment key={comment.id} comment={comment} />)
            })}
        </div>
    </div>
  )
}
