import Home from "./Home";
import Cadastro from "./Cadastro";
import GlobalStyle from "./Components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hoje from "./Hoje";
import Habitos from "./Habitos";
import Historico from "./Historico";

function App() {
 
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/historico" element={<Historico />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
