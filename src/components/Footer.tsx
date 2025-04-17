import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                Bingo<span className="text-pink-500">Live</span>+
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              A emoção do bingo tradicional agora no digital, com sorteios ao vivo e grandes
              prêmios.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition">
                  Início
                </a>
              </li>
              <li>
                <a href="/how-to-play" className="text-gray-400 hover:text-white transition">
                  Como Jogar
                </a>
              </li>
              <li>
                <a href="/prizes" className="text-gray-400 hover:text-white transition">
                  Prêmios
                </a>
              </li>
              <li>
                <a href="/results" className="text-gray-400 hover:text-white transition">
                  Resultados
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-400 hover:text-white transition">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Informações</h3>
            <ul className="space-y-4">
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">
                  Contato
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-white transition">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Segurança</h3>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded">18+</span>
              <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded">SSL</span>
              <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded">2FA</span>
              <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded">RGPD</span>
            </div>
            <p className="text-gray-400 mt-4">
              Sua segurança é nossa prioridade. Todos os dados são criptografados.
            </p>
            <p className="text-gray-400 mt-4">
              <span className="w-4 h-4 inline-block bg-gray-800 rounded-full mr-2"></span>
              Sorteios auditados e certificados.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-center text-sm">
            © 2023 BingoLive+. Todos os direitos reservados. CNPJ: 12.345.678/0001-99
          </p>
          <p className="text-gray-600 text-center text-xs mt-2">
            Esta plataforma é exclusivamente direcionada a maiores de 18 anos. Jogue com responsabilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}