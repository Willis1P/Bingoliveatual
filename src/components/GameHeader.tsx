import React from 'react';

export const GameHeader: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Bingo Especial de Sexta</h1>
          <p className="text-gray-400">Prêmio atual: R$ 2.450,00</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">15</div>
            <div className="text-sm text-gray-400">Jogadores</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-500">R$ 10,00</div>
            <div className="text-sm text-gray-400">Por cartela</div>
          </div>
        </div>
      </div>
    </div>
  );
};