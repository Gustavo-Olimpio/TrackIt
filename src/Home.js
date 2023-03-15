import Logo from "./Components/Logo";
import Login from "./Components/Login";
import Botoes from "./Components/Botoes";


function Home() {
    
    return (
      <div>
        <Logo />
        <Login c={0}/>
        <Botoes p={"Não tem uma conta? Cadastre-se!"}/>
      </div>
    );
  }
  
  export default Home;