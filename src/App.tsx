import { LanguageProvider } from "./state/LanguageContext";
import { CatalogFilterProvider } from "./state/CatalogFilterContext";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { FamilyGrid } from "./components/FamilyGrid/FamilyGrid";
import { FullCatalog } from "./components/FullCatalog/FullCatalog";
import { Services } from "./components/Services/Services";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Faq } from "./components/Faq/Faq";
import { CtaBanner } from "./components/CtaBanner/CtaBanner";
import { QuoteForm } from "./components/QuoteForm/QuoteForm";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <LanguageProvider>
      <CatalogFilterProvider>
        <Header />
        <main>
          <Hero />
          <FamilyGrid />
          <FullCatalog />
          <Services />
          <Projects />
          <About />
          <Faq />
          <CtaBanner />
          <QuoteForm />
        </main>
        <Footer />
      </CatalogFilterProvider>
    </LanguageProvider>
  );
}

export default App;
