import Login from "./Components/Login";
import Logo from "./Components/Logo";
import Botoes from "./Components/Botoes";

function Cadastro() {
    
    return (
      <>
      <Logo />
      <Login c={1}/>
      <Botoes p={"Já tem uma conta? Faça login!"}/>

      </>
      
    );
  }
  
  export default Cadastro;