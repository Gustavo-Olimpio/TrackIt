import Login from "./Components/Login";
import Logo from "./Components/Logo";
import Botoes from "./Components/Botoes";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [carregando,setCarregando] = useState(false);
  const navigate = useNavigate();
  function cadastro(){
    console.log(dados)
    setCarregando(true)
    setTimeout(testar,1000)
    
  }
  function testar(){
    const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",dados)
    post.then(() => {
      setCarregando(false)
      navigate("/");
    })
    post.catch(erro => {
      alert(erro.response.data.message)
      setCarregando(false)
      
    })
  }
  const [dados,setDados] = useState({email:"",name:"",image:"",password:""});
    return (
      <>
      <Logo />
      <Login c={1} dados={dados} setDados={setDados}/>
      <Botoes datatest={"signup-btn"} dtlink={"login-link"} carregando={carregando} link={"/"} funcao={cadastro} p={"Já tem uma conta? Faça login!"} txt={"Cadastrar"}/>

      </>
      
    );
  }
  
  export default Cadastro;