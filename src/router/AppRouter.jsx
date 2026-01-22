import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Calibracion from "../pages/Calibracion";
import Laboratorios from "../pages/Laboratorios";
import LaboratorioDetalle from "../pages/LaboratorioDetalle";
import Asesorias from "../pages/Asesorias";
import Suministros from "../pages/Suministros";
import Inspeccion from "../pages/Inspeccion";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/calibracion" element={<Calibracion />} />
      <Route path="/laboratorios" element={<Laboratorios />} />
      <Route path="/laboratorios/:slug" element={<LaboratorioDetalle />} />
      <Route path="/asesorias" element={<Asesorias />} />
      <Route path="/suministros" element={<Suministros />} />
      <Route path="/inspeccion" element={<Inspeccion />} />
    </Routes>
  );
}
