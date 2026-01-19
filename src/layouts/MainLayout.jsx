import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const MainLayout = () => {
  return (
    <div className="app-layout">
      <Header />

      {/* CONTENIDO CENTRAL */}
      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
