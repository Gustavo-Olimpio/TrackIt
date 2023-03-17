import Logo from "./Components/Logo";
import Login from "./Components/Login";
import Botoes from "./Components/Botoes";
import { useState } from "react";
import axios from "axios";


function Home() {
  function logar(){
    console.log(dados)
    const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",dados)
    post.then(console.log("certo"))
    post.catch(erro => {
      alert(erro.response.data.message)
    })
  
  }
    const [dados,setDados] = useState({email:"",password:""});
    return (
      <div>
        <Logo />
        <Login c={0} dados={dados} setDados={setDados}/>
        <Botoes link={"/cadastro"} funcao={logar} p={"Não tem uma conta? Cadastre-se!"} txt={"Entrar"}/>
      </div>
    );
  }
  
  export default Home;