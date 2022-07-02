import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppHeader } from './components/app/AppHeader';
import { MainPage } from './pages/MainPage';
import { SingleNews } from './pages/SingleNews';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main className='main' data-testid='main'>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/news/:id' element={<SingleNews/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
