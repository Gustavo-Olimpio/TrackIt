import styled from "styled-components"

function Txt(props){
    return(
        <>
        <Divtxt placeholder={props.valor}>

        </Divtxt>
        </>
    )
}

export default Txt

const Divtxt = styled.input`

width:303px;
height:45px;
border-radius:5px;
background-color:#FFFFFF;
font-size:20px;
padding-left:10px;
border:1px solid #D4D4D4;
margin-bottom:6px;
:focus{
    outline:0;
}
::placeholder {
    color:#DBDBDB;
    font-family: 'Lexend Deca', sans-serif;
    font-weight:400;
    
}
`