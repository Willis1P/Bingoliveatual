import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <CountdownTimer />
      <HowToPlay />
      <UpcomingGames />
      <Prizes />
      <Testimonials />
      <LiveGameDemo />
      <Footer />
      
      <WinnerModal />
    </div>
  );
}

export default App;