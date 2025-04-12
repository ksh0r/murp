import { useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import './App.css';

function App() {
  return (
      <Router>
      <Header />
      <Sidebar />
      <Dashboard />
      </Router>
  );
}

export default App;
