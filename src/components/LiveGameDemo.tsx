import React from 'react';
import { Play } from 'lucide-react';

export const LiveGameDemo = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-white text-center mb-8">See Live Bingo in Action</h2>
          <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
            <Play className="text-purple-500" size={64} />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};