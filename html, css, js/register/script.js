const primerNombre = document.getElementById("firstName");
const segundoNombre = document.getElementById("secondName");
const primerApellido = document.getElementById("surname");
const segundoApellido = document.getElementById("secondSurname");
const correoElectronico = document.getElementById("username");
const contraseña = document.getElementById("password");
const identificador = document.getElementById("idPhone");
const numeroTelefono = document.getElementById("phoneNumber");
const tipoId = document.getElementById("idType");
const numeroIdentificacion = document.getElementById("idNumber");

const button = document.getElementById("button");
var usuarios = [];

function register(){
  let usuario = {
    firstName: primerNombre,
    secondName: segundoNombre,
    surname: primerApellido,
    secondSurname: segundoApellido,
    email: correoElectronico,
    password: contraseña,
    numberPhone: identificador,
    phoneNumber: numeroTelefono,
    identificationType: tipoId,
    identificationNumber: numeroIdentificacion,
  };

  usuarios.push(usuario);
}

console.log(usuarios);