import Inputs from "./Inputs";
import { useNavigate } from "react-router-dom";

const InputsLogin = () => {
  const navigate = useNavigate();
  const handleCreateAcount = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    /* code.......*/
    navigate("/Home");
  };

  return (
    <>
      <p className="text-2xl font-bold">Iniciar sesión</p>
      <div>
        <Inputs
          type={"email"}
          placeHolder={"User name"}
          label={"Correo electronico o nombre de usuario"}
          id={"correo"}
        />
        <Inputs
          type={"password"}
          placeHolder={"Password"}
          label={"Ingresa su contraseña"}
          id={"contrasena"}
        />
      </div>
      <a className="border-blue-800" href="/">
        ¿Olvidaste tu Contraseña?
      </a>
      <button className="text-blue-800" onClick={handleCreateAcount}>
        Crear una cuenta
      </button>
      <button
        className="flex justify-center py-2 text-white bg-blue-800 w-72 rounded-3xl text-xl"
        onClick={handleLogin}
      >
        Ingresar
      </button>
    </>
  );
};

export default InputsLogin;
