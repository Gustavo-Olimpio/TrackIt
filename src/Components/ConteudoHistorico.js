import styled from "styled-components";
import Calendar from "react-calendar";
import { useState,useEffect } from "react";
import axios from "axios";
import "react-calendar/dist/Calendar.css"; // Importe o estilo CSS

function ConteudoHistorico() {
  const [value, onChange] = useState(new Date());
  const [hist, setHist] = useState([]);
  const [verm,setVerm] = useState([]);
  const [verd,setVerd] = useState([]);
  const token = localStorage.getItem("token")
  const config = {
    headers: {
        "Authorization":`Bearer ${token}`
    }
}
  useEffect(() => {
    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",config)
request.then(resposta => {
    console.log(resposta.data)
    setHist(resposta.data)
    for(let i=0; i < resposta.data.length ; i++){
        for(let j=0; j < resposta.data[i].habits ; j++){
            if(resposta.data[i].habits[j].done === false){
                return setVerm([...verm,resposta.data[i].day])
            }
        }
        setVerd([...verd,resposta.data[i].day])
    }
})
request.catch(erro => {
    console.log(erro.response.data.message)
} )

}, []);

  return (
    <DivHistorico>
        {console.log( verd)}
        {console.log( verm)}
        <h1>Historico</h1>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </DivHistorico>
  );
}

export default ConteudoHistorico;

const DivHistorico = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  margin-top: 70px;
  margin-bottom: 70px;
  h1{
    font-size:22px;
    font-weight:400;
    color:#126BA5;
    margin-bottom:10px;
}
div{
    width: 100%;
    height: 100%;
}
`;
const CustomCalendar = styled(Calendar)`
  /* Estilos personalizados aqui */
  background-color: #ffffff; /* Cor de fundo */
  color: #333; /* Cor do texto */
  border-radius: 5px; /* Borda arredondada */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra */
`;