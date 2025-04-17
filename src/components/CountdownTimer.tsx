import React, { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;

        return {
          hours: newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-purple-700 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Bingo Especial de Sexta-feira
            </h2>
            <p className="text-gray-200">
              Prêmio mínimo garantido de R$ 5.000,00
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="bg-gray-900 text-white text-2xl font-bold px-4 py-2 rounded">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-white text-2xl font-bold">:</span>
              <div className="bg-gray-900 text-white text-2xl font-bold px-4 py-2 rounded">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-white text-2xl font-bold">:</span>
              <div className="bg-gray-900 text-white text-2xl font-bold px-4 py-2 rounded">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>

            <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
              Participar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}