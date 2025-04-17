import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountdownTimer } from './components/CountdownTimer';
import { HowToPlay } from './components/HowToPlay';
import { UpcomingGames } from './components/UpcomingGames';
import { Prizes } from './components/Prizes';
import { Testimonials } from './components/Testimonials';
import { LiveGameDemo } from './components/LiveGameDemo';
import { Footer } from './components/Footer';
import { WinnerModal } from './components/WinnerModal';
import { AuthProvider } from './contexts/AuthContext';
import { Profile } from './components/Profile';

function HomePage() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <CountdownTimer />
      <HowToPlay />
      <UpcomingGames />
      <Prizes />
      <Testimonials />
      <LiveGameDemo />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
          <WinnerModal />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;