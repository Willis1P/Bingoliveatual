import React from 'react';
import { Trophy } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Live Bingo Plus
              <span className="text-purple-500">!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the thrill of live bingo from anywhere in the world. Play with friends, win big prizes, and join our growing community of bingo enthusiasts!
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Play Now
              </button>
              <button className="border-2 border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-purple-900/30 rounded-full p-8 animate-float">
              <Trophy size={200} className="text-purple-500" />
            </div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};