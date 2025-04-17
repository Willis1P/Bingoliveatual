import React from 'react';
import { Volume2, Send } from 'lucide-react';

export function LiveGameDemo() {
  const drawnNumbers = [
    'B3', 'I17', 'N31', 'G48', 'O63',
    'B9', 'I22', 'N36', 'G55', 'O70'
  ];

  const lastNumbers = ['N36', 'I22', 'O83', 'B9', 'G48'];

  const chatMessages = [
    {
      id: 1,
      user: 'Carla',
      avatar: 'https://i.pravatar.cc/40?img=1',
      message: 'Alguém já está perto de ganhar? Tenho 4 em uma linha!',
      time: '2 min atrás'
    },
    {
      id: 2,
      user: 'Marcos',
      avatar: 'https://i.pravatar.cc/40?img=2',
      message: 'Eu também! Falta só o G55 pra completar a segunda coluna',
      time: '1 min atrás'
    },
    {
      id: 3,
      user: 'Bia',
      avatar: 'https://i.pravatar.cc/40?img=3',
      message: 'Acabei de entrar, como funciona essa rodada demo?',
      time: 'agora'
    }
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Experimente o <span className="text-pink-500">Bingo Ao Vivo</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Bingo Demo</h3>
                <div className="flex items-center gap-4">
                  <span className="bg-pink-600 text-white text-sm px-3 py-1 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    15 jogadores
                  </span>
                  <button className="text-white hover:text-gray-300 transition">
                    <Volume2 size={20} />
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-white font-medium mb-4">Números Sorteados</h4>
                <div className="grid grid-cols-5 gap-4">
                  {drawnNumbers.map((number, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        index < 5 ? 'bg-emerald-600' : 'bg-purple-600'
                      }`}
                    >
                      {number}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-white font-medium mb-4">Últimos Números</h4>
                <div className="flex gap-4">
                  {lastNumbers.map((number, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold"
                    >
                      {number}
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
                Sortear Próximo Número
              </button>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-4">Suas Cartelas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((card) => (
                  <div key={card} className="bg-gray-800 rounded-lg p-4">
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
                            className={`py-2 rounded ${
                              Math.random() > 0.8 ? 'bg-purple-600 text-white' : 'text-white'
                            }`}
                          >
                            {Math.floor(Math.random() * 75) + 1}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Chat ao Vivo</h3>
              <p className="text-sm text-gray-400">Converse com outros jogadores durante o sorteio</p>
            </div>

            <div className="space-y-4 mb-6">
              {chatMessages.map((message) => (
                <div key={message.id} className="flex gap-3">
                  <img
                    src={message.avatar}
                    alt={message.user}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-white">{message.user}</span>
                      <span className="text-xs text-gray-400">{message.time}</span>
                    </div>
                    <p className="text-gray-300">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="w-full bg-gray-700 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-pink-500 hover:text-pink-400 transition">
                <Send size={20} />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              O chat é moderado. Evite spam ou linguagem inadequada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}