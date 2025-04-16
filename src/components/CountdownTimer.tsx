import React from 'react';
import { Clock } from 'lucide-react';

export const CountdownTimer = () => {
  return (
    <div className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          <Clock className="text-purple-500" size={32} />
          <div className="text-2xl text-white font-bold">
            Next game starts in: <span className="text-purple-500">05:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};