import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AIImageGenerator from './components/AIImageGenerator';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/generator" element={<AIImageGenerator />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;