import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronDown, Music, Ticket, Music2, Star, Sparkles } from "lucide-react";
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
    <div className="font-sans bg-blue-50">
      {/* Navbar divertido */}
      <nav className="bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/Logo Centro Cultural Sintonia.png" 
            alt="Sintonia Logo" 
            className="h-16 w-auto mr-2 hover:rotate-6 transition-all duration-300"
          />
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/centro-cultural" className="hover:text-yellow-300 transition-colors text-lg font-bold hover:scale-110 transform duration-200">
            Centro Cultural
          </Link>
          <Link to="/ingressos" className="hover:text-yellow-300 transition-colors text-lg font-bold hover:scale-110 transform duration-200">
            Ingressos
          </Link>
          <Link to="#" className="hover:text-yellow-300 transition-colors text-lg font-bold hover:scale-110 transform duration-200">
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

      {/* Hero Section Divertida */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-yellow-50">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 bg-red-500 rounded-full opacity-20 animate-bounce" style={{ left: '10%', top: '20%' }} />
          <div className="absolute w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ right: '15%', top: '15%', animationDelay: '0.5s' }} />
          <div className="absolute w-40 h-40 bg-blue-500 rounded-full opacity-20 animate-bounce" style={{ left: '20%', bottom: '20%', animationDelay: '0.8s' }} />
        </div>

        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 mb-8 text-center relative animate-pulse">
          Sintonia
        </h1>
        
        <div 
          className="relative w-24 h-24 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-125 transition-transform cursor-pointer shadow-lg hover:shadow-xl p-1"
          onClick={toggleVideo}
        >
          <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
            <Play size={40} className="text-red-500 ml-2" />
          </div>
        </div>
        
        {videoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              <Button 
                variant="ghost" 
                className="absolute -top-12 right-0 text-white hover:text-yellow-400"
                onClick={() => setVideoPlaying(false)}
              >
                Fechar
              </Button>
              <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400">
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
        
        <div className="absolute bottom-8 animate-bounce">
          <Button 
            variant="ghost"
            className="text-blue-500 hover:text-red-500 text-4xl"
            onClick={() => scrollToSection('nos')}
          >
            <ChevronDown size={48} />
          </Button>
        </div>
      </section>

      {/* Nós Section */}
      <section id="nos" className="py-24 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-40 h-40 bg-red-500 rounded-full -z-10 opacity-30 animate-pulse"></div>
                <h2 className="text-6xl font-bold text-blue-500 mb-6">Nós...</h2>
                <p className="text-xl text-gray-700 max-w-xl leading-relaxed">
                  Somos uma organização focada no crescimento do aluno
                  no universo da forma lúdica, sempre para melhorar quem
                  somos e o que pretendemos ser.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
                  alt="Pessoas trabalhando juntas"
                  className="relative rounded-3xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Atividades */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Teatro */}
            <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-red-500">
              <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Ticket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-red-500 mb-4">Teatro</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Explore a arte da expressão dramática e desenvolva sua presença cênica através de técnicas teatrais inovadoras.
                </p>
                <Link to="/cursos?categoria=teatro">
                  <Button className="bg-red-500 text-white hover:bg-red-600 transition-all duration-300 rounded-full text-lg font-bold">
                    Descobrir Teatro
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card Canto */}
            <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-yellow-400">
              <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-yellow-500 mb-4">Canto</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Liberte sua voz e descubra seu potencial vocal através de técnicas modernas e exercícios personalizados.
                </p>
                <Link to="/cursos?categoria=canto">
                  <Button className="bg-yellow-400 text-white hover:bg-yellow-500 transition-all duration-300 rounded-full text-lg font-bold">
                    Explorar Canto
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card Dança */}
            <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-blue-500">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="p-8">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Music2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-500 mb-4">Dança</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Movimente-se com graça e expressão, descobrindo novos ritmos e desenvolvendo sua coordenação corporal.
                </p>
                <Link to="/cursos?categoria=danca">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 rounded-full text-lg font-bold">
                    Iniciar Dança
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Laís Almeida */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-60 h-60 bg-yellow-400 rounded-full -z-10 opacity-30 animate-pulse"></div>
                <h2 className="text-6xl font-bold text-red-500 mb-6 relative">
                  Laís Almeida
                  <Sparkles className="absolute -right-12 -top-8 w-10 h-10 text-yellow-400 animate-bounce" />
                </h2>
                <p className="text-xl text-gray-700 max-w-xl leading-relaxed mb-8">
                  Uma visionária das artes, dedicada a transformar vidas através da expressão artística e cultural.
                </p>
                <div className="flex gap-4">
                  <Star className="w-10 h-10 text-yellow-400 animate-pulse" />
                  <Star className="w-10 h-10 text-red-500 animate-pulse delay-100" />
                  <Star className="w-10 h-10 text-blue-500 animate-pulse delay-200" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                <img 
                  src="/path-to-lais-image.jpg" 
                  alt="Laís Almeida"
                  className="relative rounded-full shadow-lg w-[400px] h-[400px] object-cover mx-auto border-8 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 10 Anos Sintonia */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 to-yellow-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-40 h-40 bg-red-500 rounded-full opacity-20 animate-bounce" style={{ left: '5%', top: '10%' }} />
          <div className="absolute w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ right: '10%', top: '20%', animationDelay: '0.3s' }} />
          <div className="absolute w-48 h-48 bg-blue-500 rounded-full opacity-20 animate-bounce" style={{ left: '15%', bottom: '15%', animationDelay: '0.6s' }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 mb-6 animate-pulse">
              10 Anos de Sintonia
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Uma década de transformação, arte e cultura. Celebramos 10 anos de histórias, 
              conquistas e sonhos realizados através da expressão artística.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 border-4 border-red-500">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-red-500 mb-4">1000+</h3>
                <p className="text-xl text-gray-600">Alunos Transformados</p>
                <div className="mt-4 flex justify-center gap-2">
                  <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <Star className="w-6 h-6 text-red-500 animate-pulse delay-100" />
                  <Star className="w-6 h-6 text-blue-500 animate-pulse delay-200" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 border-4 border-yellow-400">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-yellow-500 mb-4">50+</h3>
                <p className="text-xl text-gray-600">Espetáculos Realizados</p>
                <div className="mt-4 flex justify-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-400 animate-bounce" />
                  <Sparkles className="w-6 h-6 text-red-500 animate-bounce delay-100" />
                  <Sparkles className="w-6 h-6 text-blue-500 animate-bounce delay-200" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 border-4 border-blue-500">
              <div className="text-center">
                <h3 className="text-5xl font-bold text-blue-500 mb-4">10</h3>
                <p className="text-xl text-gray-600">Anos de História</p>
                <div className="mt-4 flex justify-center gap-2">
                  <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <Star className="w-6 h-6 text-red-500 animate-pulse delay-100" />
                  <Star className="w-6 h-6 text-blue-500 animate-pulse delay-200" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative rounded-3xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <img 
                src="https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Celebração 10 anos Sintonia"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
                <h3 className="text-4xl font-bold mb-2">Uma Jornada de Sucesso</h3>
                <p className="text-xl opacity-90">Transformando vidas através da arte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Chamada para o Curso - Versão Dinâmica */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-blue-50">
        {/* Elementos decorativos animados */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-40 h-40 bg-red-500 rounded-full opacity-20 animate-bounce" style={{ left: '5%', top: '10%' }} />
          <div className="absolute w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ right: '10%', top: '20%', animationDelay: '0.3s' }} />
          <div className="absolute w-48 h-48 bg-blue-500 rounded-full opacity-20 animate-bounce" style={{ left: '15%', bottom: '15%', animationDelay: '0.6s' }} />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 mb-6 animate-pulse">
              Venha Fazer Parte da Nossa Família
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              No Centro Cultural Sintonia, você encontrará um espaço acolhedor para desenvolver suas habilidades artísticas e viver experiências transformadoras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card Cursos */}
            <div className="group relative bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 border-4 border-red-500">
              <div className="absolute inset-0 bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="text-center relative">
                <div className="bg-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Music className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-red-500 mb-4">Cursos</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Teatro, Canto, Dança e muito mais. Escolha o seu caminho artístico.
                </p>
                <Link to="/cursos">
                  <Button className="bg-red-500 text-white hover:bg-red-600 transition-all duration-300 rounded-full text-lg font-bold">
                    Ver Cursos
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card Professores */}
            <div className="group relative bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 border-4 border-yellow-400">
              <div className="absolute inset-0 bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="text-center relative">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-yellow-500 mb-4">Professores</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Equipe especializada e dedicada ao seu desenvolvimento artístico.
                </p>
                <Link to="/professores">
                  <Button className="bg-yellow-400 text-white hover:bg-yellow-500 transition-all duration-300 rounded-full text-lg font-bold">
                    Conhecer Equipe
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card Espaço */}
            <div className="group relative bg-white rounded-3xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300 border-4 border-blue-500">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              <div className="text-center relative">
                <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-500 mb-4">Espaço</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Ambiente acolhedor e equipado para seu desenvolvimento artístico.
                </p>
                <Link to="/espaco">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 rounded-full text-lg font-bold">
                    Visitar Espaço
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Imagem Destaque com Overlay */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative rounded-3xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
                alt="Centro Cultural Sintonia"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
                <h3 className="text-4xl font-bold mb-2">Um Mundo de Possibilidades</h3>
                <p className="text-xl opacity-90">Descubra seu potencial artístico</p>
                <Link to="/">
                  <Button className="mt-6 bg-white text-blue-500 hover:bg-blue-50 transition-all duration-300 rounded-full text-lg font-bold px-8 py-4 transform hover:scale-105">
                    Comece Sua Jornada
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Divertido */}
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

export default SintoniaPrincipal;
