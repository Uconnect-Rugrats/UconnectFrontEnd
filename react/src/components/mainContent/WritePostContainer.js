import React from "react";
import Icon from "../../images/icon_uconnect.jpg";

const WritePostContainer = () => {
  return (
    <div className="write-post-container flex items-start bg-white p-3 rounded-lg">
      <img src={Icon} alt="Icon"className="w-12 h-12 rounded-full mr-2" />
      <div className="flex flex-col w-full">
        <h2 className="text-gray-700 font-medium mb-1">Uconnect</h2>
        <small className="text-gray-500 text-sm">
          Matematicas Especiales G1{" "}
          <i className="fas fa-caret-down"></i>
        </small>
        <div className="w-full">
          <textarea
            rows="3"
            placeholder="¿Qué hay en tu mente, Uconnect?"
            className="w-full border-b border-gray-300 bg-transparent resize-none mt-2"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default WritePostContainer;
