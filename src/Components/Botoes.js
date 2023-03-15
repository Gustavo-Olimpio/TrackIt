import styled from "styled-components"

function Botoes(props){
    return(
        <>
        <Divbtn>
            <Btn >Entrar </Btn>
            <Pcadastro>{props.p}</Pcadastro>
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