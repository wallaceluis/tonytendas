import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../components/Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type ServiceDetailsMap = {
  [key in 1 | 2 | 3 | 4]: {
    fullDescription: string;
    characteristics: string[];
  };
};

// Defina aqui as imagens do carrossel por serviço
const galleryImagesByService: {
  [key in 1 | 2 | 3 | 4]: {
    src: string;
    alt: string;
    description: string;
  }[];
} = {
  1: [
    { src: '/tendacristal8.jpeg', alt: 'Tenda cristal para eventos', description: 'Tenda cristal com acabamento premium' },
    { src: '/tendas11.jpeg', alt: 'Tenda branca para eventos', description: 'Tenda versátil para áreas externas' },
    { src: '/tendacristal1.jpeg', alt: 'Tenda cristal para eventos', description: 'Tenda cristal com acabamento premium' },
    { src: '/tendas6.jpeg', alt: 'Tenda branca para eventos', description: 'Tenda versátil para áreas externas' },
    { src: '/tendacristal3.jpeg', alt: 'Tenda cristal elegante', description: 'Tenda cristal com design moderno' },
    { src: '/tendas8.jpeg', alt: 'Tenda branca grande', description: 'Tenda versátil para grandes eventos' },
    { src: '/tendacristal5.jpeg', alt: 'Tenda cristal sofisticada', description: 'Tenda cristal para eventos especiais' },
    { src: '/tendas14.jpeg', alt: 'Tenda branca', description: 'Tenda para eventos ao ar livre' },
    { src: '/tendacristal7.jpeg', alt: 'Tenda cristal iluminada', description: 'Tenda cristal com iluminação' },
    { src: '/tendas2.jpeg', alt: 'Tenda branca resistente', description: 'Tenda versátil e resistente' },
  ],
  2: [
  { src: '/piso2.jpeg', alt: 'Eventos empresariais', description: 'Estrutura para o eventos empresariais' }, // Eventos
  { src: '/tendacristal1.jpeg', alt: 'Casamentos', description: 'Estrutura para casamentos' },        // Casamento
  { src: '/tendas+cadeiras2.jpeg', alt: 'Feira ao ar livre', description: 'Estrutura completa para feiras' }, // Feira
  { src: '/tendas11.jpeg', alt: 'Eventos empresariais', description: 'Estrutura para o eventos empresariais' }, // Eventos
  { src: '/tendacristal3.jpeg', alt: 'Casamentos', description: 'Estrutura para casamentos' },        // Casamento
  { src: '/tendas+cadeiras3.jpeg', alt: 'Feira ao ar livre', description: 'Estrutura completa para feiras' }, // Feira
  { src: '/tendas+cadeiras5.jpeg', alt: 'Eventos empresariais', description: 'Estrutura para o eventos empresariais' },  // Eventos
  { src: '/tendacristal8.jpeg', alt: 'Casamentos', description: 'Estrutura para casamentos' },      // Casamento
  { src: '/tendas+cadeiras1.jpeg', alt: 'Feira ao ar livre', description: 'Estrutura completa para feiras' } // Feira
  ],
  3: [
    { src: '/tendas+cadeiras1.jpeg', alt: 'Mesas e cadeiras', description: 'Locação de mesas e cadeiras para eventos' },
    { src: '/tendas+cadeiras3.jpeg', alt: 'Mesas e cadeiras', description: 'Locação de mesas e cadeiras para eventos' },
    { src: '/tendas+cadeiras4.jpeg', alt: 'Mesas e cadeiras', description: 'Locação de mesas e cadeiras para eventos' },
    { src: '/tendas+cadeiras5.jpeg', alt: 'Mesas e cadeiras', description: 'Locação de mesas e cadeiras para eventos' },
    { src: '/tendas+cadeiras8.jpeg', alt: 'Mesas e cadeiras', description: 'Locação de mesas e cadeiras para eventos' },
  ],
  4: [
    { src: '/piso2.jpeg', alt: 'Piso instalado', description: 'Piso com acabamento profissional' },
    { src: '/piso3.jpeg', alt: 'Piso de carpete para eventos', description: 'Piso sob medida para eventos' },
    { src: '/piso1.jpeg', alt: 'Piso de carpete para eventos', description: 'Piso sob medida para eventos' },
    { src: '/piso5.jpeg', alt: 'Piso instalado', description: 'Piso com acabamento profissional' },
    { src: '/piso6.jpeg', alt: 'Piso em preparação', description: 'Piso com acabamento profissional' },
    { src: '/piso4.jpeg', alt: 'Piso instalado', description: 'Piso com acabamento profissional' }
  ],
};

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
  return (
    // Aqui padding-top grande para "empurrar" o conteúdo para baixo (ex: 24 = 6rem)
    <div className="min-h-screen flex justify-center px-4 pt-24">
      <div className="text-center space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">Serviço não encontrado</h2>
        <Link
          to="/"
          className="inline-block mt-12 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}

  const serviceDetailsMap: ServiceDetailsMap = {
    1: {
      fullDescription:
        'Tendas de alta qualidade para eventos de todos os tamanhos, tendas brancas ou tendas cristal, todas com proteção UV e resistência à chuva. Disponíveis em tamanhos de 3x3m a 10x10m.',
      characteristics: [
        'Tamanhos: 3x3m, 4x4m, 5x5m, 6x6m, 8x8m, 10x10m',
        'Montagem e desmontagem incluídas',
        'Equipe técnica especializada',
        'Material de alto desempenho',
        'Proteção UV e à prova de chuva'
      ]
    },
    2: {
      fullDescription:
        'Soluções completas para feiras, congressos, aniversários e casamentos ao ar livre. Estrutura, logística e conforto para seu público.',
      characteristics: [
        'Tendas, pisos, mobiliário e iluminação',
        'Planejamento personalizado',
        'Equipe especializada no local',
        'Logística eficiente e pontual',
        'Cobertura para grandes áreas'
      ]
    },
    3: {
      fullDescription:
        'Locação de mesas e cadeiras confortáveis, ideais para todos os tipos de eventos sociais ou empresariais.',
      characteristics: [
        'Modelos clássicos e modernos',
        'Ideal para casamentos, formaturas e festas',
        'Conforto e limpeza garantidos',
        'Entrega e retirada inclusas',
        'Combinação com toalhas e capas sob demanda'
      ]
    },
    4: {
      fullDescription:
        'Pisos de carpete sob medida para casamentos, cerimônias e eventos corporativos. Instalação rápida e acabamento profissional.',
      characteristics: [
        'Piso nivelado e seguro',
        'Várias cores disponíveis',
        'Alta resistência e elegância',
        'Instalação por equipe própria',
        'Ideal para ambientes internos ou cobertos'
      ]
    }
  };

  const serviceId = service.id as 1 | 2 | 3 | 4;

  const details =
    serviceDetailsMap[serviceId] || {
      fullDescription: service.description,
      characteristics: ['Informações indisponíveis no momento.']
    };

  // Imagens específicas para o serviço atual
  const images = galleryImagesByService[serviceId] || [];

  return (
    <div className="pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            &larr; Voltar para a Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>
            <p className="text-lg text-gray-600 mb-8">{details.fullDescription}</p>

            {/* Carrossel */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="rounded-lg overflow-hidden shadow-xl mb-8"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover"
                    title={image.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Botão sempre logo abaixo do carrossel */}
            <a
              href="https://wa.link/kdan4s"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-block px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold text-center"
            >
              Solicitar Orçamento
            </a>


            {/* Imagem extra para serviços 1 e 3 fica abaixo do botão */}
            {(service.id === 1 || service.id === 3) && (
              <div className="mb-8">
                <img
                  src={`/public/mesas-cadeira-por-tenda.png`}
                  alt={`Ilustração do serviço de ${service.title}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Características:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {Array.isArray(details.characteristics) &&
                  details.characteristics.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
