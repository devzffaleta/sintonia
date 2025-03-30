
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { WhatsappButton } from "@/components/WhatsappButton";

const AulaExperimental = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-center">Agende uma aula experimental</h1>
              <p className="text-lg text-gray-700 mb-10 text-center">
                Preencha o formulário abaixo e entraremos em contato para agendar sua aula experimental gratuita
              </p>
              
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <WhatsappButton />
      <Footer />
    </>
  );
};

export default AulaExperimental;
