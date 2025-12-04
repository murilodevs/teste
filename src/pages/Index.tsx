import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import BudgetForm from "@/components/BudgetForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Murilo Celestino | Editor de Vídeo Profissional</title>
        <meta
          name="description"
          content="Editor de vídeo profissional especializado em VSLs, Ads, vídeos curtos e conteúdo para redes sociais. Transformando ideias em histórias visuais impactantes."
        />
        <meta
          name="keywords"
          content="editor de vídeo, edição de vídeo, VSL, video sales letter, ads, anúncios, reels, tiktok, youtube, premiere, after effects"
        />
        <meta property="og:title" content="Murilo Celestino | Editor de Vídeo Profissional" />
        <meta
          property="og:description"
          content="Editor de vídeo profissional especializado em VSLs, Ads, vídeos curtos e conteúdo para redes sociais."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://murilocelestino.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Portfolio />
          <BudgetForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
