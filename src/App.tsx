
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Historia from "./pages/Historia";
import Contato from "./pages/Contato";
import Admin from "./pages/Admin";
import './styles/main.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);

export default App;
