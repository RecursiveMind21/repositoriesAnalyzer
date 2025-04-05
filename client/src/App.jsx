// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search'; 
import Analysis from './pages/Analysis/Analysis'; 
import Report from './pages/Report/Report'; 
import About from './pages/About/About';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/report" element={<Report />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/ >} />
      </Routes>
    </BrowserRouter>
  );
}