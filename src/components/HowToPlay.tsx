import React from 'react';
import { CheckCircle } from 'lucide-react';

export const HowToPlay = () => {
  const steps = [
    {
      title: "Create an Account",
      description: "Sign up for free and join our bingo community"
    },
    {
      title: "Buy Cards",
      description: "Purchase your digital bingo cards for the next game"
    },
    {
      title: "Join Live Game",
      description: "Enter the live game room and get ready to play"
    },
    {
      title: "Win Prizes",
      description: "Match numbers and win exciting prizes"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">How to Play</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6">
              <CheckCircle className="text-purple-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};