import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Search from './pages/Search.jsx';
import FlashCardsPage from './pages/FlashCardsPage.jsx';
import './index.css';
import App from './App.jsx';
import { Routes, Route } from "react-router-dom"
import { AnimalProvider } from './AnimalContext.jsx';
import NavBar from "./components/Navbar"; 
import MoreFun from './pages/MoreFun.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AnimalProvider>

        <NavBar />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/search' element={<Search />} />
          <Route path='/flash-cards' element={<FlashCardsPage />} />
          <Route path="/more-fun" element={<MoreFun />} />
        </Routes>
      </AnimalProvider>
    </StrictMode>
  </BrowserRouter >
);
