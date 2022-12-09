import { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/userContext";
import { Api } from "../Api/Request";
import { StyledFonts } from "../styles/StyledFonts";
import { StyledCard } from "./StyledCard";


export function Card({status,title,id}){

    const {techs,setTechs} = useContext(UserContext)

    async function trash(id){

        try {

            const token= localStorage.getItem("TOKEN")
            Api.defaults.headers.common['Authorization'] =`Bearer ${token}`;
            const res = await Api.delete(`users/techs/${id}`)
            setTechs(!techs)
            toast.success("Item removido com sucesso")

        } catch (err) {

            toast.error("Nao foi possivel remover este item tente novamente mais tarde")
            console.log(err)
        }

    }


    return(
        <StyledCard>
            <StyledFonts tag="h3"  textStyle="Title1" color="--Grey-0" >
                {title}
            </StyledFonts>

            <div className="statusAndButton">
                <StyledFonts tag="span" textStyle="Headline" color="--Grey-1">
                    {status}
                </StyledFonts>

                <button className="trashButton" onClick={()=> trash(id)} ></button>
                
            </div>
        </StyledCard>
    )

}