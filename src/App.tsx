import { LanguageProvider } from "./state/LanguageContext";
import { CatalogFilterProvider } from "./state/CatalogFilterContext";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { FamilyGrid } from "./components/FamilyGrid/FamilyGrid";
import { FullCatalog } from "./components/FullCatalog/FullCatalog";

function App() {
  return (
    <LanguageProvider>
      <CatalogFilterProvider>
        <Header />
        <main>
          <Hero />
          <FamilyGrid />
          <FullCatalog />
        </main>
      </CatalogFilterProvider>
    </LanguageProvider>
  );
}

export default App;
