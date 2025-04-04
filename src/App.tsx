import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cursos from "./pages/Cursos";
import Galeria from "./pages/Galeria";
import AulaExperimental from "./pages/AulaExperimental";
import NotFound from "./pages/NotFound";
import SintoniaPrincipal from "./pages/SintoniaPrincipal";
import Ingressos from "./pages/Ingressos";
import { StrictMode } from "react";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SintoniaPrincipal />} />
              <Route path="/centro-cultural" element={<Index />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/aula-experimental" element={<AulaExperimental />} />
              <Route path="/ingressos" element={<Ingressos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
