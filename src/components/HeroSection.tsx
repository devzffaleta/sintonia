
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
};

const HeroSection = ({ 
  title, 
  subtitle, 
  ctaText = "Aula Experimental", 
  ctaLink = "/aula-experimental",
  image 
}: HeroSectionProps) => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: image ? `url(${image})` : 'url(https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)',
            filter: 'brightness(0.4)'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">{subtitle}</p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-teatro-500 hover:bg-teatro-600 text-white"
            >
              <Link to={ctaLink}>
                {ctaText}
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link to="/cursos">
                Ver cursos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
