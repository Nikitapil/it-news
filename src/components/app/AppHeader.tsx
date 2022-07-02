import React from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <header className='header'>
        <div className='container header__container'>
            <h1 className='header__title'><Link to='/'>IT News</Link></h1>
        </div>
    </header>
  )
}
