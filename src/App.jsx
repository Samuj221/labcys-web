import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MainLayout from "./layouts/MainLayout";
import { useLanguage } from "./context/LanguageContext";

// Pages
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import ServicioDetalle from "./pages/ServicioDetalle";
import LaboratorioDetalle from "./pages/LaboratorioDetalle";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

// Styles
import "./styles/theme.css";
import "./styles/layout.css";

function App() {
  const [theme, setTheme] = useState("dark");

  // 🌐 Language desde CONTEXT
  const { lang } = useLanguage();

  /* ======================
     THEME HANDLING
  ====================== */
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            theme={theme}
            setTheme={setTheme}
          />
        }
      >
        {/* HOME */}
        <Route index element={<Home />} />

        {/* SERVICES */}
        <Route path="servicios" element={<Servicios />} />
        <Route path="servicios/:slug" element={<ServicioDetalle />} />
        <Route
          path="servicios/:slug/:lab"
          element={<LaboratorioDetalle />}
        />

        {/* STATIC */}
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
