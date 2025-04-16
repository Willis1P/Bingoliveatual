import React from 'react';

export const NumberBoard: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Números Sorteados</h2>
        <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
          Ao Vivo
        </div>
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
        {Array(75).fill(null).map((_, index) => (
          <div
            key={index}
            className="aspect-square flex items-center justify-center bg-gray-700 rounded-lg text-white font-medium"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};