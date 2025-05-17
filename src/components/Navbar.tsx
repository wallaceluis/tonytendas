import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="/" className="flex items-center">
            <img src="/tony-tendas-logo.jpg" alt="Tony Tendas Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold p-5 text-[#2B2F5E]">Tony Tendas</span>
          </a>

          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600">Galeria</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Serviços</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Contato</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Galeria</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Serviços</a>
              <a href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Contato</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}