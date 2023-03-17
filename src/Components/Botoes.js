import styled from "styled-components"
import { Link } from "react-router-dom";

function Botoes(props){
    

    return(
        <>
        <Divbtn>
            <Btn onClick={props.funcao} >{props.txt}</Btn>
            <Link to={props.link} ><Pcadastro>{props.p}</Pcadastro></Link>
        </Divbtn>
        </>
    )
}

export default Botoes

const Btn = styled.button`
width:303px;
height:45px;
border-radius:5px;
background-color:#52B6FF;
font-size:20px;
padding-left:10px;
border:none;
color:#FFFFFF;
margin-bottom:25px;
font-weight:400;


`

const Divbtn = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`

const Pcadastro = styled.p`
font-size:14px;
color:#52B6FF;
text-decoration:underline;
font-weight:400;


`