import { useState } from 'react';
import './App.css';



import { Header } from "./components/Header.jsx";
import CoreConcepts from './components/CoreConcepts.jsx';
import RecyclingProcess from './components/RecyclingProcess.jsx';

function App() {
  return (
    <>
      <Header />
      <CoreConcepts />
      <RecyclingProcess />
    </>
  );
}

export default App
