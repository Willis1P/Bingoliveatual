import React from 'react';
import { Calendar } from 'lucide-react';

export const UpcomingGames = () => {
  const games = [
    {
      time: "2:00 PM",
      prize: "$1,000",
      players: "124"
    },
    {
      time: "3:30 PM",
      prize: "$2,500",
      players: "256"
    },
    {
      time: "5:00 PM",
      prize: "$5,000",
      players: "312"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Upcoming Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <Calendar className="text-purple-500 mb-4" size={32} />
              <div className="text-2xl font-bold text-white mb-2">{game.time}</div>
              <div className="text-purple-500 text-lg mb-2">Prize Pool: {game.prize}</div>
              <div className="text-gray-300">{game.players} players registered</div>
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                Join Game
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};