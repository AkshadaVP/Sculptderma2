// All necessary React components and hooks are imported here.
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Header from './components/Header';
import DrSection from './components/DrSection';
import CentreContent from './components/CentreContent';
import Footer from './components/Footer';

// The App component, with a simple state and UI.
function App() {

  return (
    <>
      <Navbar />
      <Header />
      <DrSection />
      <CentreContent />
      <Footer />
    </>
  );
}

// The main entry point of the application.
// This is where the 'Uncaught ReferenceError: React is not defined' was happening.
// By importing React, we resolve the issue and allow JSX to be used correctly.
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

export default App;
