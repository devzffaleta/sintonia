
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type CourseCardProps = {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  image?: string;
  url: string;
};

const CourseCard = ({ id, title, category, shortDescription, image, url }: CourseCardProps) => {
  return (
    <div className="curso-card group">
      <div className="h-40 bg-gray-200 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500">Imagem não disponível</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-700 mb-3">{shortDescription}</p>
        <Link 
          to={url} 
          className="inline-flex items-center font-medium text-black hover:underline"
        >
          Saiba mais <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
