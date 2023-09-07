import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";


function FooterMenu(props){
    const percentage = (props.percent === NaN || !props.percent ? 0 : props.percent);
    
  
     return(
         
        <Divfooter data-test="menu">
            <Link to="/habitos" ><p data-test="habit-link">Habitos</p></Link>
            
            <Link to="/hoje" > <Barra><CircularProgressbar data-test="today-link" value={percentage}
            text="Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
        
        })} /> </Barra> </Link>
            
            
            
            <Link to="/historico" > <p data-test="history-link" >Historico</p> </Link>
        </Divfooter>
         
     )
 }
 export default FooterMenu

 const Divfooter = styled.div`
    position:fixed;
    bottom:0px;
    left:0px;
    width:100%;
    height:70px;
    background-color:#ffffff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:30px;
    padding-right:30px;
    p{
        color:#52B6FF;
        font-size:18px;
        font-weight:400;

    }
 `

 const Barra = styled.div`
 width:91px;
 height:91px;
 margin-bottom:40px;
 
 `