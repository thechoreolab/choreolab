import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './styles.css';

// Placeholder pages
const LandingPage = () => <div style={{ padding: '2rem' }}>Welcome to ChoreoLab</div>;
const CreatePage = () => <div style={{ padding: '2rem' }}>Create Page Coming Soon</div>;
const LearnPage = () => <div style={{ padding: '2rem' }}>Learn Page Coming Soon</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
