import React from "react";

const Square = (props) => {
  const { img, text } = props;
  return (
    <div className="flex items-center">
      <a href="/Home" className="flex items-center">
        <img src={img} alt="img" className="w-10 h-8 mr-2 mb-4" />
        <p className="p">{text}</p>
      </a>
    </div>
  );
};

export default Square;
