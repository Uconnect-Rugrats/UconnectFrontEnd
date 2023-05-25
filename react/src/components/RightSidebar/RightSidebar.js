import React from 'react';
import Event from './Event';

const RightSidebar = () => {
  return (
    <div className="right-sidebar bg-white flex-col justify-between h-full w-3/4 px-5 pt-2">
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
    </div>
  );
};

export default RightSidebar;
