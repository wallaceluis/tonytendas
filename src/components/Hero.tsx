import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-white pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/home.jpeg"
          alt="Tenda para eventos"
        />
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Tony Tendas
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-white">
          Transformando seus eventos em momentos inesquecíveis com as melhores tendas e estruturas de Campinas e região.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
          >
            Solicite um orçamento
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}