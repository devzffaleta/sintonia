
import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronDown } from "lucide-react";
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
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Top navigation */}
      <nav className="bg-black text-white p-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/641a89d4-7595-4da4-9efc-0648690728d1.png" 
            alt="Sintonia Logo" 
            className="h-8 mr-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/centro-cultural" className="hover:text-teatro-500 transition-colors text-sm">
            Centro Cultural
          </Link>
          <Link to="#" className="hover:text-teatro-500 transition-colors text-sm">
            Contato
          </Link>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-white text-white hover:bg-white hover:text-black"
          >
            Entrar
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-200 h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-bold text-blue-600 mb-8 text-center animate-fade-in">
          Sintonia
        </h1>
        
        <div className="relative w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" onClick={toggleVideo}>
          <Play size={32} className="text-blue-600 ml-1" />
        </div>
        
        {videoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              <Button 
                variant="ghost" 
                className="absolute -top-12 right-0 text-white"
                onClick={() => setVideoPlaying(false)}
              >
                Fechar
              </Button>
              <div className="aspect-video bg-black">
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
            className="text-blue-600"
            onClick={() => scrollToSection('nos')}
          >
            <ChevronDown size={32} />
          </Button>
        </div>
      </section>

      {/* Nós Section */}
      <section id="nos" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-40 h-40 bg-red-500 rounded-full -z-10"></div>
                <h2 className="text-5xl font-bold text-blue-600 mb-6">Nós...</h2>
                <p className="text-lg text-gray-700 max-w-xl">
                  Somos uma organização focada no crescimento do aluno
                  no universo da forma lúdica, sempre para melhorar quem
                  somos e o que pretendemos ser.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative ml-4 rotate-3 bg-gray-300 h-64 w-full max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
                  alt="Pessoas trabalhando juntas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teatro Section */}
      <section id="teatro" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <div className="relative mr-4 -rotate-2 bg-gray-300 h-64 w-full max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Encenação de teatro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-48 h-48 bg-teal-400 rounded-full -z-10"></div>
                <h2 className="text-5xl font-bold text-blue-600 mb-6">Teatro</h2>
                <p className="text-lg text-gray-700 max-w-xl">
                  Falar sobre a expressão e teatro 
                  no dia-a-dia, como é trabalhar 
                  o olho de quem assiste, o 
                  objetivo é gerar interesse 
                  (texto com todas 
                  as modalidades presentes 
                  no sintonia).
                </p>
                <Link to="/cursos?categoria=teatro">
                  <Button className="mt-4 bg-teatro-500 hover:bg-teatro-600">
                    Saiba mais sobre Teatro
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canto Section */}
      <section id="canto" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-44 h-44 bg-blue-400 rounded-full -z-10"></div>
                <h2 className="text-5xl font-bold text-blue-600 mb-6">Canto</h2>
                <p className="text-lg text-gray-700 max-w-xl">
                  Falar sobre a expressão e como 
                  atre e como no quais a melhorar
                  a dicção e soltar o seu extinto
                  social e se livrar da vergonha
                  (Colocar em um carrossel com 
                  todas as modalidades presentes
                  no sintonia).
                </p>
                <Link to="/cursos?categoria=canto">
                  <Button className="mt-4 bg-teatro-500 hover:bg-teatro-600">
                    Saiba mais sobre Canto
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative ml-4 rotate-2 bg-gray-300 h-64 w-full max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Pessoa cantando"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dança Section */}
      <section id="danca" className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <div className="relative mr-4 -rotate-3 bg-gray-300 h-64 w-full max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Pessoas dançando"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-52 h-52 bg-yellow-300 rounded-full -z-10 opacity-70"></div>
                <h2 className="text-5xl font-bold text-blue-600 mb-6">Dança</h2>
                <p className="text-lg text-gray-700 max-w-xl">
                  Falar sobre a importância dessa arte 
                  e como ela ajuda a melhorar a auto
                  estima essencial, a criatividade e gerar
                  um melhor controle corporal
                  (Colocar em um carrossel com todas as
                  modalidades presentes no sintonia).
                </p>
                <Link to="/cursos?categoria=danca">
                  <Button className="mt-4 bg-teatro-500 hover:bg-teatro-600">
                    Saiba mais sobre Dança
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 relative overflow-hidden bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-60 h-60 bg-pink-300 rounded-full -z-10 opacity-70"></div>
                <h2 className="text-5xl font-bold text-pink-600 mb-6">Laís Almeida</h2>
                <p className="text-lg text-gray-700 max-w-xl">
                  Falar sobre o seu 
                  propósito inicial, 
                  suas motivações, 
                  sonho até o
                  presente.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-orange-300 rounded-full -z-10 opacity-70"></div>
                <h3 className="text-3xl font-bold text-orange-600 mb-4">Almeida</h3>
                <p className="text-lg text-gray-700 max-w-xl">
                  Falar suas 
                  qualificações, 
                  prêmios e feitos 
                  (vendar o peixe).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-16 relative overflow-hidden bg-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/641a89d4-7595-4da4-9efc-0648690728d1.png" 
              alt="Centro Cultural Sintonia" 
              className="h-16"
            />
          </div>
          <h2 className="text-4xl font-bold text-orange-600 mb-8">centro cultural Sintonia</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Um furacão de transformação
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-gray-600">
            <div>Sobre</div>
            <div>Contato</div>
            <div>Políticas</div>
            <div>Parcerias</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SintoniaPrincipal;
