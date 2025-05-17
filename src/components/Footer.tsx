import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contato" className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src="/tony-tendas-logo.jpg" alt="Tony Tendas Logo" className="h-10 w-auto mr-2 rounded-md" />
            </div>
            <p className="text-blue-200 mb-6">
              Soluções completas em tendas e coberturas para eventos em Campinas e região. Qualidade e confiança para seu evento.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/TonyTendas/" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/tonytendas/" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:contato@tonytendas.com.br" className="text-blue-200 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#gallery" className="text-blue-200 hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="/service/1" className="text-blue-200 hover:text-white transition-colors">Tendas Profissionais</a></li>
              <li><a href="/service/2" className="text-blue-200 hover:text-white transition-colors">Eventos Corporativos e Festas</a></li>
              <li><a href="/service/3" className="text-blue-200 hover:text-white transition-colors">Mesas e Cadeiras para Eventos</a></li>
              <li><a href="/service/4" className="text-blue-200 hover:text-white transition-colors">Piso de Carpete para Eventos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone size={20} className="text-blue-300 mr-3 flex-shrink-0" />
                <div>
                  <p>(19) 98726-4177</p>
                </div>
              </li>
              <li className="flex">
                <Mail size={20} className="text-blue-300 mr-3 flex-shrink-0" />
                <span>contato@tonytendas.com.br</span>
              </li>
              <li className="flex">
                <MapPin size={20} className="text-blue-300 mr-3 flex-shrink-0" />
                <span>R. Celeste Pinto de Oliveira, 277 - Jardim do Lago Continuação, Campinas - SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 mt-8 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Tony Tendas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;