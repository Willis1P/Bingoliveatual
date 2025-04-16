import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Bingo Live Plus</h3>
            <p className="text-gray-400">Experience the thrill of live online bingo with amazing prizes and a great community.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500">How to Play</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Prizes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Rules</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Responsible Gaming</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500"><Mail size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bingo Live Plus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};