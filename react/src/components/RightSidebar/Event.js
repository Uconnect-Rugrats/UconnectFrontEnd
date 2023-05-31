import React from "react";

const Event = ({
  dayEvent,
  monthEvent,
  nameEvent,
  groupEvent,
  placeEvent,
  ...props
}) => {
  return (
    <div className="flex items-center mb-4">
      <div className="flex  bg-blue-800 bg-opacity-90 relative w-18 h-20 rounded-b-full rounded-t-xl border-2 + border-blue-800 mr-4">
        <div className="bg-white bg-opacity-100 text-black flex items-center justify-center rounded w-18 h-16 rounded-b-xl">
          <div className="text-center">
            <p className="text-2xl font-bold pt-1 px-2">{dayEvent}</p>
            <p className="text-sm">{monthEvent}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">{nameEvent}</h2>
        <p className="text-gray-600 text-sm">{groupEvent}</p>
        <p className="text-gray-600 text-sm">{placeEvent}</p>
        <a href="#" className="text-blue-800 text-sm">
          Más Info
        </a>
      </div>
    </div>
  );
};

export default Event;
