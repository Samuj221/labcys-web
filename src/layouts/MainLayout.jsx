import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/layout.css";

export default function MainLayout({ theme, setTheme, lang, setLang }) {
  return (
    <>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
      />

      {/* CONTENEDOR GLOBAL */}
      <main className="app-main">
        <Outlet />
      </main>

      <Footer lang={lang} />
    </>
  );
}
