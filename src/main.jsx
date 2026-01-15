import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function MainLayout() {
  return (
    <>
      {/* SEO base global */}
      <Helmet>
        <title>LABCYS | Metrology & Calibration Solutions</title>
        <meta
          name="description"
          content="LABCYS provides professional metrology, calibration, and laboratory solutions with precision, reliability, and international standards compliance."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-black text-white">
        {/* NAVBAR */}
        <Navbar />

        {/* CONTENIDO DINÁMICO */}
        <main className="flex-1 pt-20">
          <Outlet />
        </main>

        {/* FOOTER */}
        <Footer />

        {/* WHATSAPP FLOTANTE */}
        <WhatsAppButton />
      </div>
    </>
  );
}

export default MainLayout;
