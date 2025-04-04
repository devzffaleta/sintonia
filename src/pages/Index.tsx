import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, Star, Users, Calendar, Trophy } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScheduleTableGroup } from "@/components/ScheduleTable";
import { Button } from "@/components/ui/button";
import { WhatsappButton } from "@/components/WhatsappButton";

const courses = [
  {
    id: "1",
    title: "Teatro",
    category: "Curso básico ao avançado",
    shortDescription: "Descubra técnicas fundamentais da interpretação teatral",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    url: "/cursos?categoria=teatro"
  },
  {
    id: "2",
    title: "TV & Cinema",
    category: "Técnicas para câmera",
    shortDescription: "Aprenda a atuar para produções audiovisuais",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80",
    url: "/cursos?categoria=tv-cinema"
  },
  {
    id: "3",
    title: "Canto",
    category: "Técnica vocal",
    shortDescription: "Desenvolva sua voz e expressão musical para o palco",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/cursos?categoria=canto"
  },
  {
    id: "4",
    title: "Instrumentos",
    category: "Piano e violão",
    shortDescription: "Aulas de instrumentos para complementar sua formação",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/cursos?categoria=instrumentos"
  },
];

const showcaseItems = [
  {
    id: "1",
    title: "Apresentação A",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    url: "/galeria/apresentacao-a"
  },
  {
    id: "2",
    title: "Apresentação B",
    image: "https://images.unsplash.com/photo-1610890690846-5149750c8634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    url: "/galeria/apresentacao-b"
  },
  {
    id: "3",
    title: "Apresentação C",
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/galeria/apresentacao-c"
  },
];

const stats = [
  {
    icon: <Users className="w-8 h-8 text-teatro-500" />,
    value: "1000+",
    label: "Alunos formados"
  },
  {
    icon: <Star className="w-8 h-8 text-teatro-500" />,
    value: "15+",
    label: "Anos de experiência"
  },
  {
    icon: <Trophy className="w-8 h-8 text-teatro-500" />,
    value: "50+",
    label: "Prêmios conquistados"
  },
  {
    icon: <Calendar className="w-8 h-8 text-teatro-500" />,
    value: "200+",
    label: "Apresentações anuais"
  }
];

const Index = () => {
  return (
    <>
      <Navbar />
      
      <main className="overflow-hidden w-full">
        {/* Hero Section com overlay gradiente */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/lovable-uploads/Foto_referente_a_um_espetaculo_corcunda_de_notre_dame.jpg" 
              alt="Banner Principal - Espetáculo O Corcunda de Notre Dame" 
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-start space-y-6 max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                Desperte o artista que existe em você
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 drop-shadow-lg">
                Desenvolva sua expressão artística, liberte sua criatividade e transforme-se através da arte
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  className="bg-teatro-500 hover:bg-teatro-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/aula-experimental">
                    Aula Experimental
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full shadow-lg backdrop-blur-sm transition-all duration-300"
                >
                  <Link to="/cursos">
                    Ver cursos
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
            <div className="absolute w-96 h-96 bg-teatro-500/30 rounded-full blur-3xl mix-blend-overlay" style={{ left: '10%', top: '20%' }}></div>
            <div className="absolute w-96 h-96 bg-teatro-500/30 rounded-full blur-3xl mix-blend-overlay" style={{ right: '10%', bottom: '20%' }}></div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="py-16 bg-white w-full">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                  {stat.icon}
                  <span className="text-4xl font-bold text-teatro-500 mt-4">{stat.value}</span>
                  <span className="text-gray-600 text-center mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Cursos com design cards melhorado */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-4xl font-bold mb-4">Nossos Cursos</h2>
                <p className="text-gray-600 max-w-2xl">Explore nossa variedade de cursos desenvolvidos para despertar e aprimorar seu talento artístico</p>
              </div>
              <Link to="/cursos" className="text-teatro-500 hover:text-teatro-700 flex items-center group">
                Ver todos <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Certificação com layout moderno */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6">Certificado Reconhecido</h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Nossos cursos oferecem certificação reconhecida no mercado artístico, valorizando seu currículo e abrindo portas para oportunidades profissionais. Todo aluno formado recebe um certificado que comprova suas habilidades e dedicação ao aprendizado das artes.
                </p>
                <Button
                  asChild
                  className="bg-teatro-500 hover:bg-teatro-600 text-lg px-8 py-6 rounded-full"
                >
                  <Link to="/certificacao">
                    Saiba mais sobre nossa certificação
                  </Link>
                </Button>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-teatro-500 rounded-3xl rotate-3 opacity-10"></div>
                  <img 
                    src="/lovable-uploads/15c47f53-c670-443e-9313-550fff4a9c16.png" 
                    alt="Certificado Centro Cultural Sintonia" 
                    className="relative rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mostra com galeria melhorada */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Mostra de Talentos</h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Conheça alguns trabalhos realizados por nossos alunos e apresentações do centro cultural
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {showcaseItems.map(item => (
                <Link to={item.url} key={item.id} className="group relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="flex justify-center items-center space-x-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-teatro-500 text-teatro-500 hover:bg-teatro-500 hover:text-white"
              >
                <ChevronLeft size={24} />
              </Button>
              
              <Link 
                to="/galeria" 
                className="text-teatro-500 hover:text-teatro-700 text-lg font-semibold"
              >
                Ver galeria completa
              </Link>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-teatro-500 text-teatro-500 hover:bg-teatro-500 hover:text-white"
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Horários com visual moderno */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Horário das Aulas</h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                Escolha o melhor horário para sua rotina e comece sua jornada artística
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <ScheduleTableGroup />
            </div>
          </div>
        </section>
      </main>
      
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default Index;
