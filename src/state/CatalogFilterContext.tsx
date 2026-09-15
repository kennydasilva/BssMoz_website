import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { FamilyId, MaterialId } from "../types";

export type FamilyFilter = FamilyId | "todos";
export type MaterialFilter = MaterialId | "todos";

interface CatalogFilterContextValue {
  familyFilter: FamilyFilter;
  materialFilter: MaterialFilter;
  setFamilyFilter: (id: FamilyFilter) => void;
  setMaterialFilter: (id: MaterialFilter) => void;
  openFamily: (id: FamilyId) => void;
}

const CatalogFilterContext = createContext<CatalogFilterContextValue | null>(null);

export function CatalogFilterProvider({ children }: { children: ReactNode }) {
  const [familyFilter, setFamilyFilter] = useState<FamilyFilter>("todos");
  const [materialFilter, setMaterialFilter] = useState<MaterialFilter>("todos");

  const value = useMemo<CatalogFilterContextValue>(
    () => ({
      familyFilter,
      materialFilter,
      setFamilyFilter,
      setMaterialFilter,
      openFamily: (id: FamilyId) => {
        setFamilyFilter(id);
        setMaterialFilter("todos");
        if (typeof window !== "undefined") window.location.hash = "#completo";
      },
    }),
    [familyFilter, materialFilter],
  );

  return <CatalogFilterContext.Provider value={value}>{children}</CatalogFilterContext.Provider>;
}

export function useCatalogFilter(): CatalogFilterContextValue {
  const ctx = useContext(CatalogFilterContext);
  if (!ctx) throw new Error("useCatalogFilter must be used within a CatalogFilterProvider");
  return ctx;
}
