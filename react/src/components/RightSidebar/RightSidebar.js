import React from "react";
import Event from "./Event";

const RightSidebar = () => {
  return (
    <div className="sticky top-0 w-3/4 ">
      <div className="bg-white flex-col justify-between px-5 pt-2 h-80 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Eventos</h1>
        <Event
          dayEvent="10"
          monthEvent="mayo"
          nameEvent="Conferencia Calidad de Software"
          groupEvent="Facultad de ingenieria"
          placeEvent="Auditorio Flabio Calle"
        />
        <Event
          dayEvent="10"
          monthEvent="Junio"
          nameEvent="Examen final Ingenieria de Software"
          groupEvent="Ingeniería de Software G1"
          placeEvent="Edificio M - NES"
        />
        <a href="/Home" className="text-blue-800 text-sm">
          Más Eventos
        </a>
      </div>
      <div className="bg-white flex-col justify-between px-5 mt-2 pt-2 h-72 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Amigos</h1>

      </div>
    </div>
  );
};

export default RightSidebar;
