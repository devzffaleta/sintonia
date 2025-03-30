
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Centro Cultural Sintonia</h3>
            <p className="text-gray-300 mb-4">
              Formando artistas e transformando vidas através da arte do teatro.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teatro-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teatro-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teatro-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teatro-500 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-300 hover:text-teatro-500 transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-300 hover:text-teatro-500 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/aula-experimental" className="text-gray-300 hover:text-teatro-500 transition-colors">
                  Aula Experimental
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cursos?categoria=teatro" className="text-gray-300 hover:text-teatro-500 transition-colors">
                  Teatro
                </Link>
              </li>
              <li>
                <Link to="/cursos?categoria=tv-cinema" className="text-gray-300 hover:text-teatro-500 transition-colors">
                  TV & Cinema
                </Link>
              </li>
              <li>
                <Link to="/cursos?categoria=canto" className="text-gray-300 hover:text-teatro-500 transition-colors">
                  Canto
                </Link>
              </li>
              <li>
                <Link to="/cursos?categoria=instrumentos" className="text-gray-300 hover:text-teatro-500 transition-colors">
                  Instrumentos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-teatro-500" />
                <span className="text-gray-300">Rua do Teatro, 123 - Centro</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-teatro-500" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-teatro-500" />
                <span className="text-gray-300">contato@centroculturalsintonia.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Centro Cultural Sintonia. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link to="/politica-privacidade" className="hover:text-teatro-500 transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-uso" className="hover:text-teatro-500 transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
