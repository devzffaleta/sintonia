
import { ChevronRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

type ShowcaseCardProps = {
  id: string;
  title: string;
  image?: string;
  url: string;
  downloadUrl?: string;
};

const ShowcaseCard = ({ id, title, image, url, downloadUrl }: ShowcaseCardProps) => {
  return (
    <div className="curso-card group">
      <div className="h-52 bg-gray-200 overflow-hidden">
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
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-base font-bold">{title}</h3>
        <div className="flex items-center space-x-2">
          {downloadUrl && (
            <a 
              href={downloadUrl} 
              className="text-black hover:text-teatro-700"
              download
              title="Download"
            >
              <Download size={18} />
            </a>
          )}
          <Link 
            to={url} 
            className="text-black hover:text-teatro-700"
            title="Ver mais"
          >
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
