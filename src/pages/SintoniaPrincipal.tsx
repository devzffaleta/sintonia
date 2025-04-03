import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronDown, Music, Ticket, Music2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const SintoniaPrincipal = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans">
      {/* Navbar com gradiente */}
      <nav className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white p-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/641a89d4-7595-4da4-9efc-0648690728d1.png" 
            alt="Sintonia Logo" 
            className="h-10 mr-2 hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/centro-cultural" className="hover:text-yellow-300 transition-colors text-sm font-medium">
            Centro Cultural
          </Link>
          <Link to="#" className="hover:text-yellow-300 transition-colors text-sm font-medium">
            Contato
          </Link>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Entrar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20"
            style={{
              left: "10%",
              top: "20%"
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
            style={{
              right: "10%",
              top: "30%"
            }}
          />
        </div>

        <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-transparent bg-clip-text mb-8 text-center relative">
          Sintonia
        </h1>
        
        <div 
          className="relative w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg hover:shadow-xl"
          onClick={toggleVideo}
        >
          <Play size={36} className="text-white ml-1" />
        </div>

        {videoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              <Button 
                variant="ghost" 
                className="absolute -top-12 right-0 text-white hover:text-yellow-300"
                onClick={() => setVideoPlaying(false)}
              >
                Fechar
              </Button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Sintonia Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
        
        <div className="absolute bottom-8">
          <Button 
            variant="ghost"
            className="text-purple-600 hover:text-blue-500"
            onClick={() => scrollToSection('nos')}
          >
            <ChevronDown size={36} />
          </Button>
        </div>
      </section>

      {/* Nós Section */}
      <section id="nos" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-40 h-40 bg-gradient-to-br from-red-500 to-pink-500 rounded-full -z-10 opacity-80 blur-sm"></div>
                <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text mb-6">Nós...</h2>
                <p className="text-xl text-gray-700 max-w-xl leading-relaxed">
                  Somos uma organização focada no crescimento do aluno
                  no universo da forma lúdica, sempre para melhorar quem
                  somos e o que pretendemos ser.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
                  alt="Pessoas trabalhando juntas"
                  className="relative rounded-xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seções de Atividades */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Teatro */}
            <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <Ticket className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Teatro</h3>
                <p className="text-gray-600 mb-6">
                  Explore a arte da expressão dramática e desenvolva sua presença cênica através de técnicas teatrais inovadoras.
                </p>
                <Link to="/cursos?categoria=teatro">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 transition-all duration-300">
                    Descobrir Teatro
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card Canto */}
            <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <Music className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Canto</h3>
                <p className="text-gray-600 mb-6">
                  Liberte sua voz e descubra seu potencial vocal através de técnicas modernas e exercícios personalizados.
                </p>
                <Link to="/cursos?categoria=canto">
                  <Button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500 transition-all duration-300">
                    Explorar Canto
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card Dança */}
            <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-yellow-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <Music2 className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Dança</h3>
                <p className="text-gray-600 mb-6">
                  Movimente-se com graça e expressão, descobrindo novos ritmos e desenvolvendo sua coordenação corporal.
                </p>
                <Link to="/cursos?categoria=danca">
                  <Button className="bg-gradient-to-r from-teal-400 to-yellow-300 text-white hover:from-teal-500 hover:to-yellow-400 transition-all duration-300">
                    Iniciar Dança
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Laís Almeida */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-60 h-60 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full -z-10 opacity-70 blur-lg"></div>
                <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text mb-6">
                  Laís Almeida
                </h2>
                <p className="text-xl text-gray-700 max-w-xl leading-relaxed mb-8">
                  Uma visionária das artes, dedicada a transformar vidas através da expressão artística e cultural.
                </p>
                <div className="flex gap-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                <img 
                  src="/path-to-lais-image.jpg" 
                  alt="Laís Almeida"
                  className="relative rounded-full shadow-lg w-[400px] h-[400px] object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img 
              src="/lovable-uploads/641a89d4-7595-4da4-9efc-0648690728d1.png" 
              alt="Centro Cultural Sintonia" 
              className="h-20 mx-auto mb-8 hover:scale-105 transition-transform"
            />
            <h2 className="text-4xl font-bold mb-4">Centro Cultural Sintonia</h2>
            <p className="text-xl mb-12 opacity-90">Um furacão de transformação</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto text-sm">
              <div className="space-y-2">
                <h4 className="font-bold mb-2">Sobre</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Nossa História</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Equipe</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Missão</a></li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-bold mb-2">Contato</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Fale Conosco</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Localização</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Suporte</a></li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-bold mb-2">Políticas</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Privacidade</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Termos</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Cookies</a></li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-bold mb-2">Parcerias</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Empresas</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Educação</a></li>
                  <li><a href="#" className="hover:text-yellow-300 transition-colors">Cultura</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SintoniaPrincipal;
