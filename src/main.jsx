import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Search from './pages/Search.jsx';
import FlashCards from './pages/FlashCards.jsx';
import './index.css';
import App from './App.jsx';
import { Routes, Route } from "react-router-dom"
import { AnimalProvider } from './AnimalContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AnimalProvider>

        {/* nav bar goes here */}
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/search' element={<Search />} />
          <Route path='/flash-cards' element={<FlashCards />} />
        </Routes>
      </AnimalProvider>
    </StrictMode>
  </BrowserRouter >
);
