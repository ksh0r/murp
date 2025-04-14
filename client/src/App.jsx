import { useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Tasks from './pages/Tasks.jsx'
import './App.css';

function App() {
  return (
      <Router>
      <Header />
      <Sidebar />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
        </Routes>

      </Router>
  );
}

export default App;
