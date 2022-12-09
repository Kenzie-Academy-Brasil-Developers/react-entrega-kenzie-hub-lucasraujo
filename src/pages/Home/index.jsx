import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContentHome } from "../../components/contentHome";
import { StyledFonts } from "../../components/styles/StyledFonts";
import { UserContext } from "../../contexts/userContext";
import { StyledHome } from "./StyledHome";


export function Home() {

  const { user,loadingValidade} = useContext(UserContext)
  const navigate = useNavigate()
  
  if(loadingValidade ){
    return ;
  }

  function logout(){
    localStorage.clear()
    navigate("/")
  }

  

  return(
    <StyledHome>
      <header className="contentHome">
        <StyledFonts
          tag="h1"
          textStyle="Logo"
          color="--Color-primary"
          className={"logo1"}
        >
          Kenzie Hub
        </StyledFonts>
        <button onClick={()=>{logout()}} className="buttonSecondary">Sair</button>
      </header>
      <div className="contentHome UserInfo">
        <StyledFonts tag="p" textStyle="Title1" color="--Grey-0">
          {user && user.name}
        </StyledFonts>

        <StyledFonts tag="span" textStyle="Headline" color="--Grey-1">
          { user && user.course_module}
        </StyledFonts>
      </div>

      <section className="contentHome ">
         
        <ContentHome/>

      </section>

    </StyledHome>
  );
}

