import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-purple-900 to-purple-700 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-white mb-8">
              A emoção do <span className="text-pink-500">Bingo</span> no digital!
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Jogue bingo online com jogadores de todo o país. Cartelas automáticas, sorteios ao
              vivo e grandes prêmios esperam por você!
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/game')}
                className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition"
              >
                Jogar Agora →
              </button>
              <button
                onClick={() => navigate('/demo')}
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Ver Demonstração
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
              </div>
              <div className="text-white">
                <span className="font-bold">+10.000 jogadores ativos</span>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)} <span className="text-white ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white text-xl font-bold">Próximo Sorteio</h3>
                  <span className="bg-pink-600 text-white text-sm px-3 py-1 rounded-full">
                    AO VIVO EM <span className="font-bold">90%</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Prêmio estimado</span>
                  <span className="text-white font-bold">R$ 2.450,00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">25% para completar</span>
                  <span className="text-gray-400">15/20 jogadores</span>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4 mb-6">
                {['B7', 'I24', 'N38', 'G52', 'O70'].map((number) => (
                  <div
                    key={number}
                    className="bg-purple-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center"
                  >
                    {number}
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <div className="grid grid-cols-5 gap-2 text-center">
                  {['B', 'I', 'N', 'G', 'O'].map((letter) => (
                    <div key={letter} className="text-pink-500 font-bold">
                      {letter}
                    </div>
                  ))}
                  {Array(25)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="text-white py-2"
                      >
                        {Math.floor(Math.random() * 75) + 1}
                      </div>
                    ))}
                </div>
              </div>
              <button className="w-full bg-pink-600 text-white py-3 rounded-lg mt-4 hover:bg-pink-700 transition">
                Comprar Cartela por R$ 10,00
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}