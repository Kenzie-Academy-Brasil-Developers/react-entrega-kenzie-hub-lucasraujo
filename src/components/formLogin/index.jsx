import { StyledFonts } from "../styles/StyledFonts";
import {useForm} from "react-hook-form"
import { Link} from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup"
import { StyledFormLogin } from "./StyledFormLogin";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export function FormLogin (){

    const { formResLogin, loading }= useContext(UserContext)
    

    const formSchema = yup.object().shape({
        email:yup.string().required("Este campo e obrigatorio"),
        password:yup.string().required("Este campo e obrigatorio")
    })
    
    const {register, handleSubmit, formState:{ errors }  }=useForm({
        
        resolver: yupResolver(formSchema),
    })

    const hasErrors = Object.keys(errors).length !== 0

    return(

        <StyledFormLogin noValidate onSubmit={handleSubmit(formResLogin)}>

            <StyledFonts tag="h2" textStyle="Title1" color="--Grey-0">Login</StyledFonts>

            <div className="divOfInput">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="inputForm" {...register("email")} placeholder="Digite aqui seu email" />
                {errors.email && <StyledFonts tag="span" textStyle="Headline" color="--Negative"  >{errors.email.message}</StyledFonts>}
                
            </div>
            <div className="divOfInput">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" className="inputForm" {...register("password")} placeholder="Digite aqui sua senha"/>
                {errors.password && <StyledFonts tag="span" textStyle="Headline" color="--Negative">{errors.password.message}</StyledFonts>}
            </div>


            <button type="submit"  className={hasErrors  ? "buttonDisable":"buttonPrimary"} disabled={hasErrors}>{loading? <p>Carregando...</p>:<p>Entrar</p>}</button>

            <StyledFonts tag="p" textStyle="HeadlineBold" color="--Grey-1">Ainda não possui uma conta?</StyledFonts>

            <Link to={"/Register"} className="buttonSecondary perCent" >Cadastre-se</Link>




        </StyledFormLogin>
    )


}