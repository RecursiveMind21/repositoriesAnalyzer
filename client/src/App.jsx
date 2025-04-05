// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search'; // Placeholder for Search component
import Analysis from './pages/Analysis/Analysis'; // Placeholder for Analysis component
import Report from './pages/Report/Report'; // Placeholder for Report component

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}