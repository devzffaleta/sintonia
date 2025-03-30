
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    idade: "",
    endereco: {
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "",
    },
    cursoInteresse: [] as string[],
    comoChegouz: "",
    motivo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent as keyof typeof formData] as Record<string, unknown>,
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (courseName: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        cursoInteresse: [...formData.cursoInteresse, courseName],
      });
    } else {
      setFormData({
        ...formData,
        cursoInteresse: formData.cursoInteresse.filter(c => c !== courseName),
      });
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      comoChegouz: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Entraremos em contato em breve para agendar sua aula experimental.",
      });
      
      // Reset do formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        idade: "",
        endereco: {
          rua: "",
          numero: "",
          bairro: "",
          cidade: "",
          estado: "",
          cep: "",
        },
        cursoInteresse: [],
        comoChegouz: "",
        motivo: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="nome">Nome</Label>
            <Input
              id="nome"
              name="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone</Label>
            <Input
              id="telefone"
              name="telefone"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="idade">Idade</Label>
            <Input
              id="idade"
              name="idade"
              type="number"
              placeholder="Sua idade"
              value={formData.idade}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Endereço</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="endereco.rua">Rua</Label>
            <Input
              id="endereco.rua"
              name="endereco.rua"
              placeholder="Nome da rua"
              value={formData.endereco.rua}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="endereco.numero">Número</Label>
            <Input
              id="endereco.numero"
              name="endereco.numero"
              placeholder="Número"
              value={formData.endereco.numero}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="endereco.bairro">Bairro</Label>
            <Input
              id="endereco.bairro"
              name="endereco.bairro"
              placeholder="Bairro"
              value={formData.endereco.bairro}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="endereco.cidade">Cidade</Label>
            <Input
              id="endereco.cidade"
              name="endereco.cidade"
              placeholder="Cidade"
              value={formData.endereco.cidade}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="endereco.estado">Estado</Label>
            <Input
              id="endereco.estado"
              name="endereco.estado"
              placeholder="Estado"
              value={formData.endereco.estado}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="endereco.cep">CEP</Label>
            <Input
              id="endereco.cep"
              name="endereco.cep"
              placeholder="00000-000"
              value={formData.endereco.cep}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-3">Qual curso tem interesse?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="teatro" 
                checked={formData.cursoInteresse.includes("Teatro")}
                onCheckedChange={(checked) => handleCheckboxChange("Teatro", checked as boolean)} 
              />
              <Label htmlFor="teatro">Teatro</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="tv-cinema" 
                checked={formData.cursoInteresse.includes("TV e Cinema")}
                onCheckedChange={(checked) => handleCheckboxChange("TV e Cinema", checked as boolean)} 
              />
              <Label htmlFor="tv-cinema">TV e Cinema</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="canto" 
                checked={formData.cursoInteresse.includes("Canto")}
                onCheckedChange={(checked) => handleCheckboxChange("Canto", checked as boolean)} 
              />
              <Label htmlFor="canto">Canto</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="instrumentos" 
                checked={formData.cursoInteresse.includes("Instrumentos")}
                onCheckedChange={(checked) => handleCheckboxChange("Instrumentos", checked as boolean)} 
              />
              <Label htmlFor="instrumentos">Instrumentos</Label>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Como soube do curso?</h3>
          <RadioGroup 
            value={formData.comoChegouz}
            onValueChange={handleRadioChange}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Instagram" id="instagram" />
                <Label htmlFor="instagram">Instagram</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Facebook" id="facebook" />
                <Label htmlFor="facebook">Facebook</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Amigos" id="amigos" />
                <Label htmlFor="amigos">Amigos</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Google" id="google" />
                <Label htmlFor="google">Google</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="motivo">Por que deseja fazer esse curso?</Label>
          <Textarea
            id="motivo"
            name="motivo"
            placeholder="Conte-nos um pouco sobre suas motivações..."
            rows={4}
            value={formData.motivo}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <Button 
        type="submit"
        className="w-full bg-teatro-600 hover:bg-teatro-700"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Agendar aula experimental"}
      </Button>
    </form>
  );
};

export default ContactForm;
