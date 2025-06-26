
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Historia from "./pages/Historia";
import Contato from "./pages/Contato";
import './styles/main.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  </BrowserRouter>
);

export default App;
