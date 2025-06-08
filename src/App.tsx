import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/Footer'; // Optional, if you added Footer

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
