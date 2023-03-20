import axios from "axios"
import styled from "styled-components"
import Semana from "./Semana"
import { useState,useEffect } from "react";
import UserContext from "./UserContext"
import { useContext } from "react"
import ListaHabitos from "./ListaHabitos";

function ConteudoHabitos(){

    const {token} = useContext(UserContext)
    const [abre,setAbre] = useState(false)
    const [habito,setHabito] = useState({name:"",days:[]})
    const [allHabitos,setAllHabitos] = useState([])
    const [tem,setTem] = useState()

    const array = ["D","S","T","Q","Q","S","S"]
   
    const config = {
        headers: {
            "Authorization":`Bearer ${token}`
        }
    }
   
    useEffect(() => {
    const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config)
    request.then(resposta => {
        
        
        setAllHabitos(resposta.data)
        if (resposta.data.length > 0){
            setTem(true)
        } else {
            setTem(false)
        }
    })
    request.catch(erro => {
        console.log(erro.response.data.message)
    } )
    }, []);
   
    function clickMais(){
        if (abre===false){
        setAbre(true);
        }else{
            setAbre(false);
        }
    }
    function enviar(){
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",habito,config)
        request.then(resposta => {
        
            console.log(resposta)
        })
        request.catch(erro => {
            console.log(erro.response.data.message)
        } )
        setHabito({name:"",days:[]})
    }
    console.log(allHabitos)
    return(
        <DivHabitos>
            <TitBtn><h1>Meus Habitos</h1> <button onClick={clickMais}  >+</button></TitBtn>
            <CriaHabito abre={abre}> 
                <Botoes>
                    <input placeholder="Nome do habito" value={habito.name} onChange={e => setHabito({...habito,name:e.target.value})}></input> 
                    <div>
                        {array.map((e,i) => <Semana habito={habito} setHabito={setHabito}  key={i} i={i} dia={e}/>)}
                    </div>
                </Botoes>
                <Botton>
                    <p onClick={clickMais}>Cancelar</p>
                    <Save onClick={enviar}>Salvar</Save>
                </Botton>
            </CriaHabito>
           
            {(!tem) ? 
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            : 
            allHabitos.map((e) => <ListaHabitos key={e.id} id={e.id} nome={e.name} dias={e.days} />)
            }
            
            
        </DivHabitos>
    )
}
export default ConteudoHabitos

const Botoes = styled.div`
input{
        width:303px;
        height:45px;
        border-radius:5px;
        border: 1px solid #D5D5D5;
        background: #FFFFFF;
        font-size:20px;
        font-weight:400;
        padding-left:11px;
        margin-bottom:10px;
        ::placeholder{
            color:#DBDBDB;
        }
    }
    
    display:flex;
    flex-direction:column;
 
   
    
   

`


const DivHabitos = styled.div`
width:100%;
height:534px;
background-color:#F2F2F2;
margin-top:70px;
margin-bottom:70px;
padding-top:28px;
padding-right:18px;
padding-left:18px;

p{
    color: #666666;
    font-size:18px;

}
`

const TitBtn = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:28px;
button{
    width:40px;
    height:35px;
    color: #FFFFFF;
    background-color: #52B6FF;
    border:none;
    font-size:26px;
    border-radius:5px;
}
h1{
    font-size:22px;
    color: #126BA5;
    font-weight:400;
}
`

const CriaHabito = styled.div`
    width:340px;
    height:180px;
    background-color:#FFFFFF;
    margin-bottom:28px;
    padding:18px;
    display:${props => (props.abre) ? "flex":"none"};
    flex-direction:column;
    position: relative;
    
    
`
const Save = styled.button`
    width: 84px;
            height: 35px;
            background-color:#52B6FF;
            border:none;
            border-radius:5px;
            font-size:16px;
            font-weight:400;
            color:#FFFFFF;

`

const Botton = styled.div` 
        display:flex;
        
        width:180px;
        justify-content:space-between;
        position:absolute;
        bottom:20px;
        right:28px;
        align-items:center;
       p{
            font-size:16px;
            color: #52B6FF;
            font-weight: 400;
        }
    



`