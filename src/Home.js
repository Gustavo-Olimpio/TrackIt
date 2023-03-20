import Logo from "./Components/Logo";
import Login from "./Components/Login";
import Botoes from "./Components/Botoes";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


  
function Home(props) {
  const [carregando,setCarregando] = useState(false);
  const navigate = useNavigate();
  function logar(){
    console.log(dados)
    setCarregando(true)
    setTimeout(testar,1000)
    
  }
  
  function testar(){
    const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",dados)
    post.then((e) => {
      setCarregando(false)
      navigate("/hoje");
      
      props.setUsuario(e.data)
      console.log(e.data)
    })
    post.catch(erro => {
      alert(erro.response.data.message)
      setCarregando(false)
    }) 
  }
    const [dados,setDados] = useState({email:"",password:""});
    
    return (
      <div>
        <Logo />
        <Login c={0} dados={dados} setDados={setDados}/>
        <Botoes carregando={carregando} link={"/cadastro"} funcao={logar} p={"Não tem uma conta? Cadastre-se!"} txt={"Entrar"}/>
      </div>
    );
  }
  
  export default Home;
  