import styled from "styled-components";
import Calendar from "react-calendar";
import { useState,useEffect } from "react";
import axios from "axios";
import "react-calendar/dist/Calendar.css"; // Importe o estilo CSS
import dayjs from "dayjs";

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
    setHist(resposta.data)
    let vermelhos = []
    let verdes = []
    for (let i = 0; i < resposta.data.length; i++) {
      let encontrouHabitNaoFeito = false; // Inicialize a flag como false para cada dia
    
      for (let j = 0; j < resposta.data[i].habits.length; j++) {
        if (resposta.data[i].habits[j].done === false) {
          encontrouHabitNaoFeito = true;
          break; // Saia do loop interno quando encontrar um hábito não feito
        }
      }
      if (encontrouHabitNaoFeito) {
        vermelhos.push(resposta.data[i].day);
      } else {
        verdes.push(resposta.data[i].day);
      }
    }
    setVerm(vermelhos)
    setVerd(verdes)
})
request.catch(erro => {
    alert(erro.response.data.message)
} )
}, []);

  return (
    <DivHistorico>
        <h1>Historico</h1>
      <div>
      <CustomCalendar
  onChange={onChange}
  value={value}
  tileContent={({ date }) => {
    // Verifique se a data está na lista de datas verdes
    const dataFormatada = dayjs(date).format('DD/MM/YYYY');
    
    if (verd.includes(dataFormatada)) {
      return <div style={{ backgroundColor: 'green', color: 'white' }}></div>;
    }
    // Verifique se a data está na lista de datas vermelhas
    else if (verm.includes(dataFormatada)) {
      return <div style={{ backgroundColor: 'red', color: 'white' }}></div>;
    }
    // Se a data não estiver em nenhuma das listas, retorne nulo para não renderizar nada
    else {
      return null;
    }
  }}
/>
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
  
`;
