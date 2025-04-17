import React from 'react';

const games = [
  {
    id: 1,
    title: 'Bingo Tradicional',
    description: 'Rodada clássica com prêmio mínimo garantido de R$ 1000,00',
    image: '/images/bingo-tradicional.jpg',
    price: 10.00,
    startTime: '15:30',
    players: 42,
    maxPlayers: 100,
    prize: 3780.00,
    status: 'AO VIVO'
  },
  {
    id: 2,
    title: 'Bingo de Sexta',
    description: 'Rodada especial com prêmio mínimo de R$ 5.000,00 e bônus extras',
    image: '/images/bingo-sexta.jpg',
    price: 20.00,
    startTime: '20:00',
    players: 18,
    maxPlayers: 200,
    prize: 3600.00,
    status: 'EM BREVE'
  },
  {
    id: 3,
    title: 'Bingo Turbo',
    description: 'Rodada rápida com apenas 50 números e prêmio garantido',
    image: '/images/bingo-turbo.jpg',
    price: 5.00,
    startTime: '10:00',
    players: 0,
    maxPlayers: 50,
    prize: 250.00,
    status: 'AMANHÃ'
  }
];

export function UpcomingGames() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Próximos <span className="text-pink-500">Jogos</span>
          </h2>
          <div className="flex justify-center gap-4">
            <button className="bg-pink-600 text-white px-6 py-2 rounded">Hoje</button>
            <button className="text-white hover:text-pink-500 transition">Amanhã</button>
            <button className="text-white hover:text-pink-500 transition">Esta Semana</button>
            <button className="text-white hover:text-pink-500 transition">Todos</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                  game.status === 'AO VIVO' ? 'bg-pink-600' :
                  game.status === 'EM BREVE' ? 'bg-purple-600' :
                  'bg-blue-600'
                } text-white`}>
                  {game.status}
                </span>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{game.title}</h3>
                  <span className="text-gray-400">R$ {game.price.toFixed(2)}</span>
                </div>

                <p className="text-gray-400 text-sm mb-6">{game.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">Início em</p>
                    <p className="text-white font-medium">{game.startTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Jogadores</p>
                    <p className="text-white font-medium">{game.players}/{game.maxPlayers}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Prêmio</p>
                    <p className="text-white font-medium">R$ {game.prize.toFixed(2)}</p>
                  </div>
                </div>

                <div className="relative pt-1 mb-4">
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-700">
                    <div
                      style={{ width: `${(game.players / game.maxPlayers) * 100}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                        game.status === 'AO VIVO' ? 'bg-pink-600' :
                        game.status === 'EM BREVE' ? 'bg-purple-600' :
                        'bg-blue-600'
                      }`}
                    />
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded text-white font-medium transition ${
                    game.status === 'AO VIVO' ? 'bg-pink-600 hover:bg-pink-700' :
                    game.status === 'EM BREVE' ? 'bg-purple-600 hover:bg-purple-700' :
                    'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Participar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}