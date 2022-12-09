import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../components/Api/Request";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [techs, setTechs] = useState(false);
  const navigate = useNavigate();

  

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("TOKEN");
      
      if (token) {
        try {
          const res = await Api("profile/", {
            headers: {
              authorization: `Bearer ${token}`,
            },


          });

          
          setUser(res.data);

          navigate("/Home");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("TOKEN");
          navigate("/");
        }
      } else {
        navigate("/");
      }
    }

    loadUser();
  }, [techs]);

 
  async function formResLogin(data) {
    try {
      setLoading(true);

      let resLogin = await Api.post("sessions", data);
      toast.success("Login aprovado ", {
        autoClose: 2000,
      });

      localStorage.setItem("TOKEN", resLogin.data.token);
      localStorage.setItem("USER_ID", resLogin.data.user.id);
      setUser(resLogin.data.user);
      navigate("/Home");
    } catch (er) {
      console.log(er);
      toast.error("verifique login e senha e tente novamente", {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  }

  async function resFormRegister(data) {
    delete data.passwordConfirm;

    try {
      await Api.post("users", data);
      toast.success("Conta criada com sucesso!", {
        autoClose: 2000,
      });

      navigate("/");
    } catch (er) {
      console.log(er);
      toast.error("Ops! Algo deu errado", {
        autoClose: 2000,
      });
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        formResLogin,
        resFormRegister,
        loading,
        techs,
        setTechs
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
