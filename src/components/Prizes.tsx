import React from 'react';
import { Zap, Shield, CreditCard } from 'lucide-react';

export function Prizes() {
  const prizeDistribution = [
    { winners: 1, amount: 900.00 },
    { winners: 2, amount: 450.00 },
    { winners: 3, amount: 300.00 },
    { winners: 5, amount: 180.00 }
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos <span className="text-pink-500">Prêmios</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-purple-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              90% do valor arrecadado é distribuído!
            </h3>
            <p className="text-gray-300 mb-8">
              Apenas 10% fica com a plataforma para manutenção e melhorias. Quanto mais
              jogadores, maior o prêmio!
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total arrecadado</span>
                <span className="text-white font-bold">R$ 1.000,00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Taxa da plataforma (10%)</span>
                <span className="text-white font-bold">R$ 100,00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-pink-500 font-bold">Prêmio total (90%)</span>
                <span className="text-pink-500 font-bold">R$ 900,00</span>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-400 flex items-center gap-2">
              <span className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">i</span>
              O prêmio é dividido igualmente entre todos os vencedores da rodada.
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-bold text-white mb-6">Exemplo de Distribuição</h3>
            <div className="space-y-4">
              {prizeDistribution.map((prize, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                  <span className="text-white">
                    {prize.winners} {prize.winners === 1 ? 'vencedor' : 'vencedores'}
                  </span>
                  <span className="text-white font-bold">
                    R$ {prize.amount.toFixed(2)} {prize.winners > 1 ? 'cada' : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Pagamento Rápido</h3>
              <p className="text-gray-400">
                Seus prêmios são creditados instantaneamente em sua carteira virtual após a confirmação do resultado.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Segurança Garantida</h3>
              <p className="text-gray-400">
                Utilizamos tecnologia de ponta para garantir a justiça dos sorteios e a segurança de seus dados.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <CreditCard className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Saque Fácil</h3>
              <p className="text-gray-400">
                Solicite saques a qualquer momento para sua conta bancária ou carteira digital preferida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}