import { useState } from "react";
import { Link } from "react-router-dom";
import { Ticket, Calendar, Users, Star, ChevronDown, Sparkles, Music, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Ingressos = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans bg-blue-50">
      {/* Navbar divertido */}
      <nav className="bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/Logo Centro Cultural Sintonia.png" 
              alt="Sintonia Logo" 
              className="h-16 w-auto mr-2 hover:rotate-6 transition-all duration-300"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/centro-cultural" className="hover:text-yellow-300 transition-colors text-lg font-bold hover:scale-110 transform duration-200">
            Centro Cultural
          </Link>
          <Link to="/ingressos" className="text-yellow-300 transition-colors text-lg font-bold scale-110 transform duration-200">
            Ingressos
          </Link>
          <Link to="/contato" className="hover:text-yellow-300 transition-colors text-lg font-bold hover:scale-110 transform duration-200">
            Contato
          </Link>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-red-500 transition-all duration-300 font-bold rounded-full"
          >
            Entrar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-yellow-50">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 bg-red-500 rounded-full opacity-20 animate-bounce" style={{ left: '10%', top: '20%' }} />
          <div className="absolute w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ right: '15%', top: '15%', animationDelay: '0.5s' }} />
          <div className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-20 animate-bounce" style={{ left: '20%', bottom: '20%', animationDelay: '0.8s' }} />
        </div>

        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 mb-8 text-center relative animate-pulse">
          Ingressos para Espetáculos
        </h1>
        
        <p className="text-2xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
          Garanta seu lugar em nossos espetáculos incríveis e viva momentos inesquecíveis
        </p>

        <Button 
          variant="ghost"
          className="text-blue-500 hover:text-red-500 text-4xl absolute bottom-8 animate-bounce"
          onClick={() => scrollToSection('proximos-eventos')}
        >
          <ChevronDown size={48} />
        </Button>
      </section>

      {/* Próximos Eventos */}
      <section id="proximos-eventos" className="py-24 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 mb-16">
            Mostras Artísticas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Evento 1 */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212" 
                  alt="Espetáculo de Dança"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white text-sm font-semibold bg-red-500 px-3 py-1 rounded-full inline-block mb-2">
                    Dança
                  </p>
                  <h3 className="text-white text-2xl font-bold">Sintonia em Movimento</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">15 de Março, 2024 - 20h</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Teatro Municipal - Rua das Artes, 123</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-500">R$ 45,00</span>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 rounded-full">
                    Comprar Ingresso
                  </Button>
                </div>
              </div>
            </div>

            {/* Evento 2 */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9" 
                  alt="Espetáculo de Teatro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white text-sm font-semibold bg-yellow-400 px-3 py-1 rounded-full inline-block mb-2">
                    Teatro
                  </p>
                  <h3 className="text-white text-2xl font-bold">O Sonho de Uma Noite</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">22 de Março, 2024 - 19h</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Centro Cultural Sintonia - Av. Principal, 456</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-500">R$ 55,00</span>
                  <Button className="bg-yellow-400 text-white hover:bg-yellow-500 transition-all duration-300 rounded-full">
                    Comprar Ingresso
                  </Button>
                </div>
              </div>
            </div>

            {/* Evento 3 */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81" 
                  alt="Espetáculo de Música"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white text-sm font-semibold bg-red-500 px-3 py-1 rounded-full inline-block mb-2">
                    Música
                  </p>
                  <h3 className="text-white text-2xl font-bold">Concerto de Primavera</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">29 de Março, 2024 - 20h</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Auditório Central - Praça da Música, 789</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-500">R$ 65,00</span>
                  <Button className="bg-red-500 text-white hover:bg-red-600 transition-all duration-300 rounded-full">
                    Comprar Ingresso
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temporadas */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 mb-16">
            Espetáculos em Temporada
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Temporada 1 */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf" 
                  alt="O Pequeno Príncipe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white text-sm font-semibold bg-green-500 px-3 py-1 rounded-full inline-block mb-2">
                    Temporada
                  </p>
                  <h3 className="text-white text-2xl font-bold">O Pequeno Príncipe</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Todos os sábados - 16h</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Teatro Infantil - Sala Principal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-500">R$ 50,00</span>
                  <Button className="bg-green-500 text-white hover:bg-green-600 transition-all duration-300 rounded-full">
                    Comprar Ingresso
                  </Button>
                </div>
              </div>
            </div>

            {/* Temporada 2 */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3" 
                  alt="Romeu e Julieta"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white text-sm font-semibold bg-green-500 px-3 py-1 rounded-full inline-block mb-2">
                    Temporada
                  </p>
                  <h3 className="text-white text-2xl font-bold">Romeu e Julieta</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Sextas e Sábados - 20h</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Teatro Principal - Palco Central</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-500">R$ 60,00</span>
                  <Button className="bg-green-500 text-white hover:bg-green-600 transition-all duration-300 rounded-full">
                    Comprar Ingresso
                  </Button>
                </div>
              </div>
            </div>

            {/* Temporada 3 */}
            <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1512053459797-38c3a066cabd" 
                  alt="Concerto Sinfônico"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-white text-sm font-semibold bg-green-500 px-3 py-1 rounded-full inline-block mb-2">
                    Temporada
                  </p>
                  <h3 className="text-white text-2xl font-bold">Concerto Sinfônico</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Domingos - 19h</span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">Sala de Concertos - Auditório Nobre</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-500">R$ 70,00</span>
                  <Button className="bg-green-500 text-white hover:bg-green-600 transition-all duration-300 rounded-full">
                    Comprar Ingresso
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-lg">
              <div className="space-y-4">
                <h4 className="font-bold mb-4 text-xl">Sobre</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Nossa História</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Equipe</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Missão</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold mb-4 text-xl">Contato</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Fale Conosco</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Localização</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Suporte</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold mb-4 text-xl">Políticas</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Privacidade</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Termos</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Cookies</a></li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold mb-4 text-xl">Parcerias</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Empresas</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Educação</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors hover:scale-110 inline-block transform">Cultura</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ingressos; 