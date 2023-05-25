import Inputs from "./Inputs";
import { useNavigate } from "react-router-dom";
const InputsRegister = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center">
        <p className="pr-20 text-3xl font-bold">Registrarse</p>
      </div>
      <div className="flex w-full pr-8">
        <div className="w-1/2">
          <Inputs
            placeHolder={"Primer nombre"}
            label={"Primer Nombre"}
            id={"primerNombre"}
          />
        </div>
        <div className="w-1/2">
          <Inputs
            placeHolder={"Segundo nombre"}
            label={"Segundo Nombre"}
            id={"segundoNombre"}
          />
        </div>
      </div>
      <div className="flex w-full pr-8">
        <div className="w-1/2">
          <Inputs
            placeHolder={"Primer Apellido"}
            label={"Primer Apellido"}
            id={"primerApellido"}
          />
        </div>
        <div className="w-1/2">
          <Inputs
            placeHolder={"Segundo Apellido"}
            label={"Segundo Apellido"}
            id={"segundoApellido"}
          />
        </div>
      </div>
      <div className="flex w-full pr-8">
        <div className="w-1/2">
          <Inputs
            placeHolder={"Correo"}
            label={"Correo Electronico"}
            id={"correo"}
          />
        </div>
        <div className="w-1/2">
          <Inputs
            placeHolder={"Constraseña"}
            label={"Contraseña"}
            id={"contrasena"}
          />
        </div>
      </div>
      <div className="flex w-full pr-8">
        <div className="w-1/2">
          <p>Identificador</p>
          <select
            className="h-8 px-1 mb-5 mr-2 border-2 border-gray-200 rounded-lg "
            id="id"
            placeholder="Choose"
          >
            <option className="form-option">Choose</option>
            <option className="form-option">1</option>
            <option className="form-option">2</option>
            <option className="form-option">2</option>
          </select>
        </div>
        <div className="w-1/2">
          <Inputs
            placeHolder={"Numero de telefono"}
            label={"Numero de telefono"}
            id={"telefono"}
          />
        </div>
      </div>
      <div className="flex w-full pr-8">
        <div className="w-1/2">
          <p>Tipo ID</p>
          <select
            className="h-8 px-1 mb-5 mr-2 border-2 border-gray-200 rounded-lg "
            id="Tipoid"
            placeholder="Tipo Id"
          >
            <option className="form-option">Choose</option>
            <option className="form-option">CC</option>
            <option className="form-option">TI</option>
            <option className="form-option">CE</option>
          </select>
        </div>
        <div className="w-1/2">
          <Inputs
            placeHolder={"Numero de identificacion"}
            label={"Numero de identificacion"}
            id={"identificacion"}
          />
        </div>
      </div>
      <div className="flex w-full pr-8">
        <div className="w-1/2">
          <button className="text-blue-800" onClick={handleLogin}>
            Ya tengo cuanta!, Iniciar sesión
          </button>
        </div>
        <div className="w-1/2">
          <button className="flex justify-center py-2 text-white bg-blue-800 w-72 rounded-3xl">
            Crear cuenta
          </button>
        </div>
      </div>
    </>
  );
};

export default InputsRegister;
