import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import ServicioDetalle from "./pages/ServicioDetalle";
import LaboratorioDetalle from "./pages/LaboratorioDetalle";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

import "./styles/theme.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("es");

  // 🔹 Asegura que el theme SIEMPRE exista desde el primer render
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              theme={theme}
              setTheme={setTheme}
              lang={lang}
              setLang={setLang}
            />
          }
        >
          <Route index element={<Home lang={lang} />} />

          <Route
            path="servicios"
            element={<Servicios lang={lang} />}
          />

          <Route
            path="servicios/:slug"
            element={<ServicioDetalle lang={lang} />}
          />

          <Route
            path="servicios/:slug/:lab"
            element={<LaboratorioDetalle lang={lang} />}
          />

          <Route
            path="nosotros"
            element={<Nosotros lang={lang} />}
          />

          <Route
            path="contacto"
            element={<Contacto lang={lang} />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
