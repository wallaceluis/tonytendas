import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Estamos prontos para ajudar no seu próximo evento
          </p>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <a
              href="https://wa.link/kdan4s"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-block px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold text-center"
            >
              Solicitar Orçamento
            </a>

          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                WhatsApp
              </h3>
              <p className="mt-2 text-base text-gray-600">
                <a href="https://wa.link/kdan4s" className="hover:text-blue-600 transition-colors">(19) 98726-4177</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                Email
              </h3>
              <p className="mt-2 text-base text-gray-600">
                <a href="mailto:contato@tonytendas.com.br" className="hover:text-blue-600 transition-colors">
                  contato@tonytendas.com.br
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                Endereço
              </h3>
              <p className="mt-2 text-base text-gray-600">
                R. Celeste Pinto de Oliveira, 277<br />
                Jardim do Lago Continuação, Campinas - SP
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}