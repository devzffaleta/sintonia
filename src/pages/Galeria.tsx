
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ShowcaseCard from "@/components/ShowcaseCard";
import { WhatsappButton } from "@/components/WhatsappButton";

const showcaseItems = [
  {
    id: "1",
    title: "A Noite dos Sonhos",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    url: "/galeria/a-noite-dos-sonhos",
    downloadUrl: "#"
  },
  {
    id: "2",
    title: "O Jardim Secreto",
    image: "https://images.unsplash.com/photo-1610890690846-5149750c8634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    url: "/galeria/o-jardim-secreto",
    downloadUrl: "#"
  },
  {
    id: "3",
    title: "Memórias de Ontem",
    image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/galeria/memorias-de-ontem",
    downloadUrl: "#"
  },
  {
    id: "4",
    title: "Entre Mundos",
    image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2215&q=80",
    url: "/galeria/entre-mundos",
    downloadUrl: "#"
  },
  {
    id: "5",
    title: "A Dança das Sombras",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/galeria/a-danca-das-sombras",
    downloadUrl: "#"
  },
  {
    id: "6",
    title: "Encontro dos Elementos",
    image: "https://images.unsplash.com/photo-1503452916978-28d5b27819af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    url: "/galeria/encontro-dos-elementos",
    downloadUrl: "#"
  },
];

const Galeria = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection 
          title="Galeria"
          subtitle="Conheça os espetáculos, apresentações e trabalhos desenvolvidos por nossos alunos e professores"
          image="https://images.unsplash.com/photo-1503452916978-28d5b27819af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcaseItems.map(item => (
                <ShowcaseCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default Galeria;
