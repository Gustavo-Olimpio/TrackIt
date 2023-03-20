import styled from "styled-components"
import { useEffect } from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { useContext } from "react";

function ConteudoHoje(){
    const {token} = useContext(UserContext)
    const config = {
        headers: {
            "Authorization":`Bearer ${token}`
        }
    }
    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
    request.then(resposta => {
        
        
        console.log(resposta.data)
       
    })
    request.catch(erro => {
        console.log(erro.response.data.message)
    } )

    }, []);
    return(
        <DivHoje>

        </DivHoje>
    )
}
export default ConteudoHoje

const DivHoje = styled.div`
width:100%;
height:534px;
background-color:#F2F2F2;
margin-top:70px;
margin-bottom:70px;

`