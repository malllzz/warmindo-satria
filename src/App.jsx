import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import TentangKami from './pages/TentangKami';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
