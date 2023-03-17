import styled from "styled-components"
import Txt from "./Txt"


function Login(props){
    const array = [["email","senha"],["email","senha","nome","foto"]]
    const arrayvalores = ["email","password","name","image"]
    return(
        <Ontxt>
       {array[props.c].map((e,i) => <Txt key={e} i={i} titulo={arrayvalores} dados={props.dados} setDados={props.setDados} valor={e}/>)} 
        </Ontxt>
    )
}

export default Login 

const Ontxt = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`