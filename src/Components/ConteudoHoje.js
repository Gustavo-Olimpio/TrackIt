import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";


function ConteudoHoje(props){
    const semana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]
    const [hoje,setHoje] = useState(0)
    const [click,setClick] = useState([])
    const today = dayjs(new Date()).format('DD/MM')
    const week = semana[new Date().getDay()]
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            "Authorization":`Bearer ${token}`
        }
    }
    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
    request.then(resposta => {
        setHoje(resposta.data)
        console.log(resposta.data)
        for(let i =0; i<resposta.data.length ; i++){
            if(resposta.data[i].done === true){
                setClick([...click, resposta.data[i].id])
            }
        }
    })
    request.catch(erro => {
        console.log(erro.response.data.message)
    } )

    }, []);
    function mark(event, id) {
        event.preventDefault();
        console.log(id);
        if (click.includes(id)) {
          // Se o id já estiver em click, remova-o
          const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,"",config)
    request.then(resposta => {
        setClick(click.filter(itemId => itemId !== id));
    })
    request.catch(erro => {
        alert(erro.response.data.message)
    } )
        } else {
          // Caso contrário, adicione-o
          const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,"",config)
    request.then(resposta => {
        setClick([...click, id]);
    })
    request.catch(erro => {
        alert(erro.response.data.message)
    } )
        }
      }
    console.log(click)
    return(
        <DivHoje>
            <h1>{week}, {today}</h1>
            {hoje[0] ? <h2>{((click.length/hoje.length)*100).toFixed()}% dos hábitos concluídos</h2> : <></>} 
            {props.setPercent(((click.length/hoje.length)*100).toFixed())}
            {hoje === 0 ? <p>Carregando...</p> : !hoje[0] ? <p>Nenhum habito marcado para hoje</p> : hoje.map(e =>        
                <div id={e.id}>
                <h3>{e.name}</h3>
                <p>Sequência atual: {e.currentSequence} dias</p>
                <p>Seu recorde: {e.highestSequence} dias</p>
                <Check id={e.id} click={click}  onClick={(a) => mark(a,e.id)}>
                    
                    <img src="https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png"/> </Check>
            </div>)}
            
        </DivHoje>
    )
}
export default ConteudoHoje

const DivHoje = styled.div`
padding:20px;
width:100%;
height:100%;
background-color:#F2F2F2;
margin-top:70px;
margin-bottom:70px;
h1{
    font-size:22px;
    font-weight:400;
    color:#126BA5;
    margin-bottom:10px;
}
h2{
    font-size:18px;
    font-weight:400;
    color:#00CED1;
    margin-bottom:30px;
}
div{
    background-color:#FFFFFF;
    height:94px;
    width:100%;
    padding:10px;
    position:relative;
    margin-bottom:10px;
    h3{
        font-size:20px;
        font-weight:400;
        color:#666666;
        margin-bottom:10px;
    }
    p{
        font-size:14px;
        font-weight:400;
        color:#666666;
        margin-bottom:2px;
    }
}
`
const Check = styled.section`
width:70px;
height:70px;
background-color:${props => props.click.includes(props.id) ? "#87CEFA" : "#E7E7E7"};
position:absolute;
right:10px;
bottom:12px;
display:flex;
align-items:center;
justify-content:center;
border-radius:5px;
img{
    width:50px;
    height:50px;
    display:${props => props.click.includes(props.id) ? "flex" : "none"};
}
`