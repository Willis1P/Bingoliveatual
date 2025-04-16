import React from 'react';
import { useModal } from '../hooks/useModal';

export const Navbar: React.FC = () => {
  const { openModal } = useModal();

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-blue-900 py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fas fa-dice text-2xl text-pink-500"></i>
          <span className="text-2xl font-bold text-white">Bingo<span className="text-pink-500">Live+</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-white hover:text-pink-400 transition">Início</a>
          <a href="#games" className="text-white hover:text-pink-400 transition">Jogos</a>
          <a href="#how-to-play" className="text-white hover:text-pink-400 transition">Como Jogar</a>
          <a href="#prizes" className="text-white hover:text-pink-400 transition">Prêmios</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => openModal('login')}
            className="bg-transparent border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-900 transition"
          >
            Entrar
          </button>
          <button 
            onClick={() => openModal('register')}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Cadastre-se
          </button>
          <button className="md:hidden text-white">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};