
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import HeroSection from "@/components/HeroSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WhatsappButton } from "@/components/WhatsappButton";

// Dados dos cursos
const allCourses = [
  // Teatro
  {
    id: "teatro-adulto",
    title: "Teatro para Adultos",
    category: "teatro",
    audience: "adulto",
    shortDescription: "Para iniciantes e avançados a partir de 18 anos",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    url: "/cursos/teatro-adulto"
  },
  {
    id: "teatro-adolescente",
    title: "Teatro para Adolescentes",
    category: "teatro",
    audience: "adolescente",
    shortDescription: "Expressão corporal e técnicas para 13 a 17 anos",
    image: "https://images.unsplash.com/photo-1595967444215-7bd91558a6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    url: "/cursos/teatro-adolescente"
  },
  {
    id: "teatro-infantil",
    title: "Teatro para Crianças",
    category: "teatro",
    audience: "infantil",
    shortDescription: "Jogos e brincadeiras teatrais para 7 a 12 anos",
    image: "https://images.unsplash.com/photo-1576404425489-8e0347945182?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/cursos/teatro-infantil"
  },
  {
    id: "teatro-idoso",
    title: "Teatro para 60+",
    category: "teatro",
    audience: "idoso",
    shortDescription: "Atividades adaptadas para a terceira idade",
    image: "https://images.unsplash.com/photo-1573056019137-d5d2329554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/cursos/teatro-idoso"
  },
  
  // TV & Cinema
  {
    id: "atuacao-camera",
    title: "Atuação para Câmera",
    category: "tv-cinema",
    audience: "adulto",
    shortDescription: "Técnicas específicas para trabalhar em produções audiovisuais",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80",
    url: "/cursos/atuacao-camera"
  },
  {
    id: "preparacao-elenco",
    title: "Preparação de Elenco",
    category: "tv-cinema",
    audience: "adulto",
    shortDescription: "Formação para atuar como preparador de elenco",
    image: "https://images.unsplash.com/photo-1594136312437-92633401d39f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    url: "/cursos/preparacao-elenco"
  },
  
  // Canto
  {
    id: "tecnica-vocal",
    title: "Técnica Vocal",
    category: "canto",
    audience: "adulto",
    shortDescription: "Aperfeiçoamento da voz falada e cantada",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/cursos/tecnica-vocal"
  },
  {
    id: "musicas-teatro",
    title: "Músicas para Teatro",
    category: "canto",
    audience: "adulto",
    shortDescription: "Interpretação musical para espetáculos",
    image: "https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    url: "/cursos/musicas-teatro"
  },
  
  // Instrumentos
  {
    id: "piano-iniciante",
    title: "Piano para Iniciantes",
    category: "instrumentos",
    audience: "adulto",
    shortDescription: "Primeiros passos no piano",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/cursos/piano-iniciante"
  },
  {
    id: "violao-iniciante",
    title: "Violão para Iniciantes",
    category: "instrumentos",
    audience: "adulto",
    shortDescription: "Aprenda os acordes e técnicas básicas de violão",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/cursos/violao-iniciante"
  },
];

const courseCategories = [
  { id: "teatro", name: "Teatro" },
  { id: "tv-cinema", name: "TV & Cinema" },
  { id: "canto", name: "Canto" },
  { id: "instrumentos", name: "Instrumentos" },
];

const Cursos = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("teatro");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  
  useEffect(() => {
    // Pegar categoria da URL ou usar padrão
    const categoriaParam = searchParams.get("categoria");
    if (categoriaParam && courseCategories.some(cat => cat.id === categoriaParam)) {
      setSelectedCategory(categoriaParam);
    }
  }, [searchParams]);
  
  useEffect(() => {
    // Filtrar cursos pela categoria selecionada
    setFilteredCourses(allCourses.filter(course => course.category === selectedCategory));
  }, [selectedCategory]);
  
  // Determinar título e descrição da categoria
  const getCategoryDescription = () => {
    switch(selectedCategory) {
      case "teatro":
        return {
          title: "Teatro",
          desc: "Cursos que exploram as técnicas fundamentais de interpretação, expressão corporal e criação cênica."
        };
      case "tv-cinema":
        return {
          title: "TV & Cinema",
          desc: "Formação para atuar diante das câmeras, com técnicas específicas para produções audiovisuais."
        };
      case "canto":
        return {
          title: "Canto",
          desc: "Desenvolvimento vocal e interpretação de canções para performances artísticas."
        };
      case "instrumentos":
        return {
          title: "Instrumentos",
          desc: "Aulas de instrumentos musicais que complementam a formação do artista cênico."
        };
      default:
        return {
          title: "Cursos",
          desc: "Conheça nossa oferta completa de formação artística."
        };
    }
  };
  
  const categoryInfo = getCategoryDescription();
  
  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection 
          title={categoryInfo.title}
          subtitle={categoryInfo.desc}
          image={filteredCourses[0]?.image}
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs 
              defaultValue={selectedCategory} 
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-10">
                {courseCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {courseCategories.map(category => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map(course => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Metodologia</h2>
              <p className="text-lg text-gray-700 mb-6">
                Nossa metodologia de ensino é baseada em práticas contemporâneas que combinam teoria e exercícios práticos. Trabalhamos com turmas reduzidas para garantir atenção individualizada e desenvolvimento personalizado de cada aluno.
              </p>
              <p className="text-lg text-gray-700">
                Os cursos são divididos em módulos progressivos, permitindo que o aluno avance de acordo com seu ritmo e objetivos pessoais. Professores experientes e atuantes no mercado garantem uma formação alinhada com as demandas profissionais atuais.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Semestre</h2>
              <p className="text-lg text-gray-700 mb-10">
                O próximo semestre começa em 5 de agosto. As matrículas já estão abertas e as vagas são limitadas.
              </p>
              
              <div className="flex justify-center">
                <WhatsappButton showText />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Cursos;
