import Home from "./Home";
import Cadastro from "./Cadastro";
import GlobalStyle from "./Components/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hoje from "./Hoje";
import Habitos from "./Habitos";
import { useState } from "react";

import UserContext from "./Components/UserContext";

function App() {
  const [usuario,setUsuario] = useState([]);
  return (
    <BrowserRouter>
      <UserContext.Provider value={usuario}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home setUsuario={setUsuario}/>} />
        <Route path="/cadastro" element={<Cadastro />} />
        
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
        
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
