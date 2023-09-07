import styled from "styled-components"
import axios from "axios"

function ListaHabitos(props){
    const array = ["D","S","T","Q","Q","S","S"]
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            "Authorization":`Bearer ${token}`
        }
    }
    function delet(){
        const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}`,config)
        request.then(resposta => {
            alert("Habito Deletado")
            window.location.reload(true);
        })
        request.catch(erro => {
            alert(erro.response.data.message)
        })
    }
    return(
        <MeusHabitos >
            <div>
            <h1 data-test="habit-name">{props.nome}</h1>
            <img data-test="habit-delete-btn" onClick={delet} src="/lixeira.png"/>
            </div>
            {array.map((e,i) => <Button data-test="habit-day" i={i} dias={props.dias} disabled>{e}</Button>)}
        </MeusHabitos>
    )
}
export default ListaHabitos

const MeusHabitos = styled.div` 
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
padding:14px;
margin-bottom:10px;
h1{
    font-weight: 400;
    font-size: 19.976px;
    color: #666666;
}

img{
    width:13px;
    height:15px;
}
div{
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
}

`

const Button = styled.button` 
    font-size: 19.976px;
    width:30px;
    height:30px;
    margin-right:4px;
    border:1px solid #CFCFCF;
    background-color: ${props => !(props.dias.includes(props.i)) ? "#FFFFFF": "#CFCFCF"};
    color: ${props => !(props.dias.includes(props.i)) ? "#CFCFCF": "#FFFFFF"};
`