import TopoMenu from "./Components/TopoMenu"
import FooterMenu from "./Components/FooterMenu"
import ConteudoHoje from "./Components/ConteudoHoje"
import { useState } from "react"

function Hoje(){
    const [percent,setPercent] = useState()
 
    return(
        <div>
       <TopoMenu />
       <ConteudoHoje setPercent={setPercent}/>
       <FooterMenu percent = {percent}/>
        </div>
    )
}
export default Hoje