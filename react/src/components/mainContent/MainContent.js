import React, { useState, useEffect } from "react";
import WritePostContainer from "./WritePostContainer";
import Post from "./Post";
import ucoLogo from "../../images/uco_logo.png";
import userLogo from "../../images/user-uconnect.webp";

const MainContent = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPublicacion = () => {
      fetch("http://localhost:8080/uconnect/api/v1/publicacion")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const publicaciones = data.data || [];
          setPostList(publicaciones);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchPublicacion();
  }, []);

  return (
    <div className="px-6 w-full">
      <WritePostContainer />

      {postList.map((post) => (
        <Post
          key={post.identificador}
          identificador={post.identificador}
          user={
            post.autor.participante.persona.primerNombre +
            " " +
            post.autor.participante.persona.primerApellido
          }
          imgUser={userLogo}
          date={post.fechaPublicacion}
          group={post.autor.grupo.nombre}
          content={post.contenido}
          numReactions={5}
          numComments={10 }
          commentsList={[]}
          setCommentsList={() => {}}
        />
      ))}
      <Post
        user="Universidad Catolica de Oriente"
        imgUser={ucoLogo}
        group="Universidad Catolica de Oriente"
        date="Mayo 01 2023, 00:00 am"
        content="Inscripciones abiertas semestre 2-2023! Te invitamos a hacer la inscripción a través de nuestra página web #Uco/ServiciosEnLinea"
        numReactions={10}
        numComents={10}
      />
    </div>
  );
};

export default MainContent;
