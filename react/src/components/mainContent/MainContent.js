import React from "react";
import WritePostContainer from "./WritePostContainer";
import Post from "./Post";
import ucoLogo from "../../images/uco_logo.png";
import userLogo from "../../images/user-uconnect.webp";


const MainContent = () => {
  return (
    <div className="px-6">
      <WritePostContainer />
      <Post
        usuario="Universidad Catolica de Oriente"
        imgUsuario={ucoLogo}
        grupo="Universidad Catolica de Oriente"
        fecha="Mayo 01 2023, 00:00 am"
        contenido="Inscripciones abiertas semestre 2-2023! Te invitamos a hacer la inscripción a través de nuestra página web #Uco/ServiciosEnLinea"
      />
      <Post
        usuario="Wider Farid Sanchez Garzon"
        imgUsuario={userLogo}
        grupo="Diseño Orientado A Objetos G1"
        fecha="Mayo 30 2023, 9:40 pm"
        contenido="Lo siento muchachos, solo el equipo llamado 'Rugrats' cumplió con el objetivo propuesto para la materia, gracias al esfuerzo puesto por parte del estudiante Edy Alexander Quintero, los otros nos vemos para las habilitaciones dentro de 8 días"
      />
      {/* Agrega más publicaciones aquí */}
    </div>
  );
};

export default MainContent;
