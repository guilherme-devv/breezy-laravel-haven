
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Historia from "./pages/Historia";
import Contato from "./pages/Contato";
import Admin from "./pages/Admin";
import Transparencia from "./pages/Transparencia";
import CRPs from "./pages/CRPs";
import Contabilidade from "./pages/Contabilidade";
import Investimentos from "./pages/Investimentos";
import Certificacoes from "./pages/Certificacoes";
import './styles/main.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/transparencia" element={<Transparencia />} />
      <Route path="/crps" element={<CRPs />} />
      <Route path="/contabilidade" element={<Contabilidade />} />
      <Route path="/investimentos" element={<Investimentos />} />
      <Route path="/certificacoes" element={<Certificacoes />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default App;
