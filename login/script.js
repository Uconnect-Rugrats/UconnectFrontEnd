var usuarios = [];

let usuarioEdy = {
  username: "edyquintero882@gmail.com",
  password: "1234",
};
let usuarioJose = {
  username: "jose@gmail.com",
  password: "1234",
};
let usuarioCarlos = {
  username: "carlos@gmail.com",
  password: "1234",
};
let usuarioRugrats = {
  username: "rugratsuco123@gmail.com",
  password: "admin",
};

usuarios.push(usuarioEdy);
usuarios.push(usuarioJose);
usuarios.push(usuarioCarlos);
usuarios.push(usuarioRugrats);

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  for (let i = 0; i < usuarios.length; i++) {
    if (
      username === usuarios[i].username &&
      password === usuarios[i].password
    ) {
      window.location = "../home/home.html";
      alert("Bienvenido");
      return;
    }
  }
  alert("no");
}
