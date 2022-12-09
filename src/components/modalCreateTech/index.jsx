import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserContext } from "../../contexts/userContext";
import { Api } from "../Api/Request";
import { StyledFonts } from "../styles/StyledFonts";
import { StyledModalCreateTech } from "./styledModalCreateTech";


export function ModalCreateTech({ setModalIsOpen }) {
  const { register, handleSubmit } = useForm();
  const {techs,setTechs} = useContext(UserContext)

  async function submitForm(data){


    try {
        
        const token = localStorage.getItem("TOKEN")
        Api.defaults.headers.common['Authorization'] =`Bearer ${token}` 
        await Api.post("users/techs",data)
        setTechs(!techs)
        setModalIsOpen(false) 
        toast.success("Nova tecnologia adicionada")
        
    } catch (err) {

      toast.error("Nao foi possivel adicionar nova teconologia verifique se ja nao foi adicionada e tente novamente")
        console.log(err)


       
        
    } 


  }


  return (
    <StyledModalCreateTech >
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="headerModal">
          <StyledFonts tag="h2" textStyle="Title2" color="--Grey-0">
            Cadastrar Tecnologia
          </StyledFonts>
          <button className="XModal" type="button" onClick={() => setModalIsOpen(false)}>
            X
          </button>
        </div>
        <div className="inputs">
          <div className="divInput">
            <label htmlFor="tech">Nome</label>
            <input className="inputForm" type="text" id="tech" {...register("title")} required placeholder="Digite sua nova tecnologia" />
          </div>
          <div className="divInput" >
            <label htmlFor="nivel">Selecionar status</label>

            <select className="inputForm"  name="" id="nivel" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit" className="buttonPrimary">Cadastrar Tecnologia</button>
        </div>
      </form>
    </StyledModalCreateTech>
  );
}
