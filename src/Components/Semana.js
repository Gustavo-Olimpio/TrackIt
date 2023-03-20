import styled from "styled-components"
import { useState } from "react";

function Semana(props){
    const [cores,setCor] = useState(false);

  function seleciona(){
    if (!props.habito.days.includes(props.i)){
    setCor(true)
    props.setHabito({...props.habito,days:[...props.habito.days,props.i]})
    } else {
        setCor(false)
        let array = props.habito.days
        let index = array.indexOf(props.i);
        array.splice(index,1)
        props.setHabito({...props.habito,days:[...array]})
    }
  }
 
    return(
        <>
        <Botao onClick={seleciona} cores={cores}>{props.dia}</Botao>
        </>
    )
}
export default Semana

const Botao = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => (props.cores) ? "#CFCFCF":"#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${props => (props.cores) ? "#FFFFFF":"#DBDBDB"};
    font-size:20px;
    margin-right:4px;
`

