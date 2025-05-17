import { Tent, Users, Sun, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    icon: <Tent className="h-8 w-8 text-blue-600" />,
    title: 'Tendas Profissionais',
    description: 'Tendas de alta qualidade para eventos de todos os tamanhos, com proteção UV e resistência à chuva. Disponíveis em tamanhos de 3x3m a 10x10m.',
    images: ['/photo-1.jpg', '/photo-2.jpg']
  },
  {
    id: 2,
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Eventos Corporativos e Festas',
    description: 'Soluções completas para feiras, congressos, aniversários e casamentos ao ar livre. Estrutura, logística e conforto para seu público.',
    images: ['/photo-3.jpg', '/photo-4.jpg']
  },
  {
    id: 3,
    icon: <Sun className="h-8 w-8 text-blue-600" />,
    title: 'Mesas e Cadeiras para Eventos',
    description: 'Locação de mesas e cadeiras confortáveis, ideais para todos os tipos de eventos sociais ou empresariais.',
    images: ['/photo-1.jpg', '/photo-3.jpg']
  },
  {
    id: 4,
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Piso de Carpete para Eventos',
    description: 'Pisos de carpete sob medida para casamentos, cerimônias e eventos corporativos. Instalação rápida e acabamento profissional.',
    images: ['/photo-2.jpg', '/photo-4.jpg']
  }
];

export default function Services() {
  return (
    <div id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Oferecemos soluções completas para seu evento
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/service/${service.id}`}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {service.icon}
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center ">{service.title}</h3>
              <p className="mt-2 text-base text-gray-600 text-center text-center">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                Saiba Mais
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export const servicesData = services;