import React from 'react';
import { Users, Ticket, Trophy } from 'lucide-react';

export function HowToPlay() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Como Jogar no <span className="text-pink-500">BingoLive+</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">1. Crie sua conta</h3>
            <p className="text-gray-400">
              Cadastre-se em menos de 1 minuto usando e-mail, celular ou redes sociais.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
              <Ticket className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">2. Compre suas cartelas</h3>
            <p className="text-gray-400">
              Escolha quantas cartelas quiser para cada rodada. Quanto mais cartelas, maiores suas chances!
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Trophy className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">3. Acompanhe o sorteio</h3>
            <p className="text-gray-400">
              Os números são sorteados ao vivo e suas cartelas são marcadas automaticamente.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition">
            Comece a Jogar Agora →
          </button>
        </div>
      </div>
    </div>
  );
}