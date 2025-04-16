import React from 'react';

export const WinnerModal: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center hidden">
      <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-white mb-2">Parabéns!</h2>
          <p className="text-xl text-pink-500 font-medium mb-4">
            Você ganhou R$ 1.225,00!
          </p>
          <p className="text-gray-400 mb-6">
            O prêmio foi dividido entre 2 ganhadores.
            10% do valor total foi destinado à plataforma.
          </p>
          <div className="space-y-4">
            <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
              Continuar Jogando
            </button>
            <button className="w-full bg-transparent border border-pink-600 text-pink-500 py-3 rounded-lg hover:bg-pink-600 hover:text-white transition">
              Sacar Prêmio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};