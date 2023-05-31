import React from "react";

const Message = (props) => {
  const { img, group, message } = props;

  return (
    <div className="bg-white mt-2 p-3 rounded-lg">
      <div className="flex items-center pb-2 border-b-2 border-solid border-blue-800">
        <img src={img} alt="Group" className="w-7 h-7" />
        <p className="whitespace-nowrap ml-2">{group}</p>
      </div>
      <div className="mt-2">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
