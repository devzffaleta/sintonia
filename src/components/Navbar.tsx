
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/641a89d4-7595-4da4-9efc-0648690728d1.png" 
              alt="Teatro Infinito" 
              className="h-10 mr-2"
            />
            <span className="text-lg font-bold">Teatro Infinito</span>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-teatro-500 transition-colors">
              Início
            </Link>
            <Link to="/cursos" className="text-white hover:text-teatro-500 transition-colors">
              Cursos
            </Link>
            <Link to="/galeria" className="text-white hover:text-teatro-500 transition-colors">
              Galeria
            </Link>
            <Link to="/aula-experimental" className="text-white hover:text-teatro-500 transition-colors">
              Contato
            </Link>
            <Button 
              className="bg-teatro-500 hover:bg-teatro-600 text-white" 
              asChild
            >
              <Link to="/aula-experimental">
                Aula Experimental
              </Link>
            </Button>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teatro-500">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teatro-500">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teatro-500">
              <Youtube size={20} />
            </a>
          </div>

          {/* Menu button for mobile */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-white hover:text-teatro-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/cursos" 
                  className="block text-white hover:text-teatro-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link 
                  to="/galeria" 
                  className="block text-white hover:text-teatro-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link 
                  to="/aula-experimental" 
                  className="block text-white hover:text-teatro-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Button 
                  className="w-full bg-teatro-500 hover:bg-teatro-600 text-white" 
                  asChild
                >
                  <Link 
                    to="/aula-experimental"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Aula Experimental
                  </Link>
                </Button>
              </li>
              <li className="flex space-x-4 pt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teatro-500">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teatro-500">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teatro-500">
                  <Youtube size={20} />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
