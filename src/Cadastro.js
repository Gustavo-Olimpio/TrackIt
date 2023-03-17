import Login from "./Components/Login";
import Logo from "./Components/Logo";
import Botoes from "./Components/Botoes";
import { useState } from "react";
import axios from "axios";

function Cadastro() {
  
  function cadastro(){
    console.log(dados)
    const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",dados)
    post.then(console.log("certo"))
    post.catch(erro => {
      alert(erro.response.data.message)
    })
    
  }
  const [dados,setDados] = useState({email:"",name:"",image:"",password:""});
    return (
      <>
      <Logo />
      <Login c={1} dados={dados} setDados={setDados}/>
      <Botoes link={"/"} funcao={cadastro} p={"Já tem uma conta? Faça login!"} txt={"Cadastrar"}/>

      </>
      
    );
  }
  
  export default Cadastro;