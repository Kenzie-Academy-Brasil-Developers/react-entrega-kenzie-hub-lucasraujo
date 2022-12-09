import { FormLogin } from "../../components/formLogin";
import { StyledFonts } from "../../components/styles/StyledFonts";
import { StyledLogin } from "./StyledLogin";

export function Login(){

    return(
        <StyledLogin>

            <StyledFonts tag="h1" textStyle="Logo" color="--Color-primary" className={"logo1"} >Kenzie Hub</StyledFonts>
            
            <FormLogin />

            

        </StyledLogin>
    )

}