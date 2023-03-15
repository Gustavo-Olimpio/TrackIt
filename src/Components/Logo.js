import styled from "styled-components"

function Logo(){
    return(
       <Divimage>
        <Imglogo src="/logo-completa.svg" />
        </Divimage>
    )
}

export default Logo 

const Imglogo = styled.img`
    margin-top:68px;
    margin-bottom:32px;
    width:180px;
    height:180px;


`
const Divimage = styled.div`
display:flex;
justify-content:center;
align-items:center;
`