import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Bingo<span className="text-pink-500">Live</span>+
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-pink-500 transition">
              Início
            </Link>
            <Link to="/games" className="text-white hover:text-pink-500 transition">
              Jogos
            </Link>
            <Link to="/how-to-play" className="text-white hover:text-pink-500 transition">
              Como Jogar
            </Link>
            <Link to="/prizes" className="text-white hover:text-pink-500 transition">
              Prêmios
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <Link
                to="/profile"
                className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition"
              >
                Meu Perfil
              </Link>
            ) : (
              <>
                <button className="text-white hover:text-pink-500 transition">
                  Entrar
                </button>
                <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
                  Cadastre-se
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}