import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import CompanyPage from './pages/CompanyPage.jsx';
import JournalPage from './pages/JournalPage.jsx';
import StudentInfoPage from './pages/StudentInfoPage.jsx';
import HeritageSitesPage from './pages/HeritageSitesPage.jsx';


function App() {
  return (
    <Router>
      <div className="font-mono min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/student-info" element={<StudentInfoPage />} />
          <Route path="/heritage" element={<HeritageSitesPage />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
