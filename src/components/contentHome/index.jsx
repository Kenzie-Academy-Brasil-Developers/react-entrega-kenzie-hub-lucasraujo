import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Card } from "../card/Card";
import { ModalCreateTech } from "../modalCreateTech";
import { StyledFonts } from "../styles/StyledFonts";
import { StyledContentHome } from "./StyledContentHome";


export function ContentHome() {

  const [ModalIsOpen, setModalIsOpen ] = useState(false)

  const { user } = useContext(UserContext)




  return (
    
    <StyledContentHome >
      {ModalIsOpen && <ModalCreateTech setModalIsOpen={setModalIsOpen}/> }

      <div className="HeraderContent">
        <StyledFonts tag="h2" textStyle="Title2" color="--Grey-0">
        Tecnologias
        </StyledFonts>

        <button className="buttonAdd" onClick={()=> setModalIsOpen(true)} ></button>

      </div>

      <div className="Cards">
         {user && user.techs.map((ele)=>{        
          return <Card key={ele.id}  status={ele.status}  title={ele.title} id={ele.id}/>
          })}

      </div>

      

    </StyledContentHome>
  );
}
