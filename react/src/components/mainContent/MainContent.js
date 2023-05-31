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
        user="Universidad Catolica de Oriente"
        imgUser={ucoLogo}
        group="Universidad Catolica de Oriente"
        data="Mayo 01 2023, 00:00 am"
        content="Inscripciones abiertas semestre 2-2023! Te invitamos a hacer la inscripción a través de nuestra página web #Uco/ServiciosEnLinea"
        numReactions={10}
        numComents="10"
      />
      <Post
        user="Wider Farid Sanchez Garzon"
        imgUser={userLogo}
        group="Diseño Orientado A Objetos G1"
        data="Mayo 30 2023, 9:40 pm"
        content="Lo siento muchachos, solo el equipo llamado 'Rugrats' cumplió con el objetivo propuesto para la materia, gracias al esfuerzo puesto por parte del estudiante Edy Alexander Quintero, los otros nos vemos para las habilitaciones dentro de 8 días"
        numReactions={4}
        numComents="8"
      />
    </div>
  );
};

export default MainContent;
