import React from 'react';
import { Gift } from 'lucide-react';

export const Prizes = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Prize Pool</h2>
        <div className="flex justify-center">
          <div className="bg-gray-700 rounded-lg p-8 max-w-2xl w-full">
            <div className="flex items-center justify-center mb-6">
              <Gift className="text-purple-500" size={48} />
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-4">$10,000</div>
              <p className="text-gray-300 text-xl mb-6">Today's Total Prize Pool</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Play to Win
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};