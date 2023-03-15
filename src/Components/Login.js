import styled from "styled-components"
import Txt from "./Txt"


function Login(props){
    const array = [["email","senha"],["email","senha","nome","foto"]]
    console.log(array[props.c])
    return(
        <Ontxt>
       {array[props.c].map((e) => <Txt key={e} valor={e}/>)} 
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