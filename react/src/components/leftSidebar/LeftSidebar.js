import React from "react";
import LatestNews from "../../images/news.png";
import Friends from "../../images/friends.png";
import Group from "../../images/group.png";
import Square from "./Square";
import Message from "./Message";

const LeftSidebar = () => {
  return (
    <div className=" p-2 left-sidebar flex flex-col justify-between h-full w-2/4 ">
      <div className>
        <Square img={LatestNews} text="Ultimas noticias" />
        <Square img={Friends} text="Amigos" />
        <Square img={Group} text="Grupos" />
        <a href="#">See More</a>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">Mensajes recientes</h1>

        <Message
          img={Group}
          group="Diseño Orientado a Objetos"
          message="No hay final :C"
        />
        <Message
          img={Group}
          group="Matematicas Especiales"
          message="En terminos de proyecto, no tenemos proyecto"
        />
      </div>
    </div>
  );
};

export default LeftSidebar;
