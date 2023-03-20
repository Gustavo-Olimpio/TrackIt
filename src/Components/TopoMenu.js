import { useContext } from "react"
import styled from "styled-components"
import UserContext from "./UserContext"

function TopoMenu(){
   const {image} = useContext(UserContext)
 
    return(
       
        <Topo data-test="header">
            <Logo src="/logo-simplificada.svg" />
            <Userimg src={image} />

        </Topo>
        
    )
}
export default TopoMenu

const Topo = styled.div`
width:100%;
height:70px;
background-color:#126BA5;
display:flex;
justify-content:space-between;
align-items:center;
padding-left:18px;
padding-right:18px;
position:fixed;
top:0px;
left:0px;
`

const Logo = styled.img`
width:97px;
height:49px;
`
const Userimg = styled.img`
width:51px;
height:51px;
border-radius:98px;

`