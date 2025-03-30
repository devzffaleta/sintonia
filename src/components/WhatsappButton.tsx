
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type WhatsappButtonProps = {
  showText?: boolean;
  phoneNumber?: string;
  message?: string;
};

export const WhatsappButton = ({ 
  showText = false, 
  phoneNumber = "5511999999999", 
  message = "Olá! Gostaria de mais informações sobre os cursos." 
}: WhatsappButtonProps) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  if (showText) {
    return (
      <Button 
        className="bg-green-500 hover:bg-green-600 text-white"
        onClick={() => window.open(whatsappUrl, "_blank")}
      >
        <MessageCircle className="mr-2" size={18} />
        Fale conosco pelo WhatsApp
      </Button>
    );
  }
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contato por WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};
