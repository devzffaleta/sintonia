
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
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

const Index = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection 
          title="Desperte o artista que existe em você"
          subtitle="Desenvolva sua expressão artística, liberte sua criatividade e transforme-se através do teatro"
        />
        
        {/* Cursos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Nossos Cursos</h2>
              <Link to="/cursos" className="text-teatro-500 hover:text-teatro-700 flex items-center">
                Ver todos <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Certificação */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Certificado Reconhecido</h2>
                <p className="text-gray-700 mb-6">
                  Nossos cursos oferecem certificação reconhecida no mercado artístico, valorizando seu currículo e abrindo portas para oportunidades profissionais. Todo aluno formado recebe um certificado que comprova suas habilidades e dedicação ao aprendizado das artes cênicas.
                </p>
                <Button
                  asChild
                  className="bg-teatro-500 hover:bg-teatro-600"
                >
                  <Link to="/certificacao">
                    Saiba mais sobre nossa certificação
                  </Link>
                </Button>
              </div>
              
              <div className="w-full lg:w-1/2 bg-gray-300 h-80 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/15c47f53-c670-443e-9313-550fff4a9c16.png" 
                  alt="Certificado Teatro Infinito" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mostra */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Mostra</h2>
            <p className="text-gray-700 mb-10">
              Conheça alguns trabalhos realizados por nossos alunos e apresentações da escola
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {showcaseItems.map(item => (
                <div key={item.id} className="bg-gray-200 h-52 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-center items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-teatro-500 text-teatro-500"
              >
                <ChevronLeft size={20} />
              </Button>
              
              <Link 
                to="/galeria" 
                className="text-teatro-500 hover:text-teatro-700 flex items-center"
              >
                Ver tudo
              </Link>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-teatro-500 text-teatro-500"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Horários */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Horário das Aulas</h2>
            <ScheduleTableGroup />
          </div>
        </section>
      </main>
      
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default Index;
