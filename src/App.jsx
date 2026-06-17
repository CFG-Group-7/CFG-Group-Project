import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import FlashCards from './pages/FlashCards';
import Quiz from './pages/Quiz';
import MoreFun from './pages/MoreFun';


function App() {

  return (
    <>
      <h1>Welcome to Zoopedia</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/flashcards' element={<FlashCards />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/more' element={<MoreFun />} />
      </Routes>
    </>
  );
}

export default App;
