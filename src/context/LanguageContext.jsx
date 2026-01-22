import { createContext, useContext, useState } from "react";

// 1. Crear contexto
const LanguageContext = createContext();

// 2. Provider
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Hook
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
