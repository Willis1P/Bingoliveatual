import React from 'react';

export const BingoCard: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4">Sua Cartela</h2>
      <div className="grid grid-cols-5 gap-2">
        {['B', 'I', 'N', 'G', 'O'].map((letter) => (
          <div key={letter} className="text-center font-bold text-pink-500">
            {letter}
          </div>
        ))}
        {Array(25).fill(null).map((_, index) => (
          <div
            key={index}
            className={`aspect-square flex items-center justify-center bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-600 transition cursor-pointer
              ${index === 12 ? 'bg-pink-600 hover:bg-pink-700' : ''}`}
          >
            {index === 12 ? 'FREE' : Math.floor(Math.random() * 75) + 1}
          </div>
        ))}
      </div>
    </div>
  );
};