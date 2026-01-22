import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ theme, setTheme, lang, setLang }) {
  return (
    <>
      {/* NAVBAR */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
      />

      {/* PAGE CONTENT */}
      <main id="page-content">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer lang={lang} />
    </>
  );
}
