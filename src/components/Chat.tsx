import React from 'react';

export const Chat: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white">Chat ao Vivo</h2>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {Array(5).fill(null).map((_, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-600" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">Usuário {index + 1}</span>
                  <span className="text-sm text-gray-400">há 2min</span>
                </div>
                <p className="text-gray-300">Boa sorte a todos! 🍀</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};