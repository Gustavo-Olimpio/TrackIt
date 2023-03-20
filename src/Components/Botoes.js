import styled from "styled-components"
import { Link } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner'

function Botoes(props){
    

    return(
        <>
        <Divbtn>
            <Btn onClick={props.funcao} carregando={props.carregando}><div>{props.txt}</div>
            <ThreeDots 
height="60" 
width="60" 
radius="9"
color="#FFFFFF" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={props.carregando}
 /></Btn>
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
display:flex;
align-items:center;
justify-content:center;
div {
    display:${props => !props.carregando ? "flex" : "none"};
}


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