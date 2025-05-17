import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryImages = [
  { src: '/tendas6.jpeg', alt: 'Tenda branca para eventos', description: 'Tenda versátil para áreas externas' },
  { src: '/tendas+cadeiras1.jpeg', alt: 'Feira ao ar livre', description: 'Estrutura completa para feiras' },
  { src: '/tendas+cadeiras3.jpeg', alt: 'Feira ao ar livre', description: 'Estrutura completa para feiras' },
  { src: '/tendacristal1.jpeg', alt: 'Casamentos', description: 'Estrutura para casamentos' },
  { src: '/tendas14.jpeg', alt: 'Tenda branca', description: 'Tenda para eventos ao ar livre' },
  { src: '/tendas11.jpeg', alt: 'Eventos empresariais', description: 'Estrutura para o eventos empresariais' },
  { src: '/tendas+cadeiras5.jpeg', alt: 'Eventos empresariais', description: 'Estrutura para o eventos empresariais' },
  { src: '/tendacristal7.jpeg', alt: 'Tenda cristal iluminada', description: 'Tenda cristal com iluminação' },
  { src: '/piso2.jpeg', alt: 'Eventos empresariais', description: 'Estrutura para o eventos empresariais' },
  { src: '/tendacristal8.jpeg', alt: 'Tenda cristal para eventos', description: 'Tenda cristal com acabamento premium' },
  { src: '/tendas+cadeiras2.jpeg', alt: 'Feira ao ar livre', description: 'Estrutura completa para feiras' },
  { src: '/tendas8.jpeg', alt: 'Tenda branca grande', description: 'Tenda versátil para grandes eventos' },
  { src: '/tendacristal5.jpeg', alt: 'Tenda cristal sofisticada', description: 'Tenda cristal para eventos especiais' },
  { src: '/tendacristal3.jpeg', alt: 'Casamentos', description: 'Estrutura para casamentos' },
  { src: '/tendas2.jpeg', alt: 'Tenda branca resistente', description: 'Tenda versátil e resistente' }
  
];

export default function Gallery() {
  return (
    <div id="gallery" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossa Galeria
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Conheça alguns dos nossos trabalhos e estruturas disponíveis
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              {/* Container para controlar layout responsivo */}
              <div className="flex flex-col lg:relative">
                
                {/* Imagem com altura diferente em cada tamanho */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[300px] lg:h-[500px] object-cover"
                />

                {/* Texto: absoluto no desktop, bloco normal no mobile */}
                <div className="bg-white text-black p-4 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:bg-black lg:bg-opacity-50 lg:text-white">
                  <h3 className="text-xl font-semibold">{image.alt}</h3>
                  <p className="mt-2 mb-4">{image.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
        </div>
      </div>
    </div>
  );
}