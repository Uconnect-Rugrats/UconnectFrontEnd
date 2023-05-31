// Comment.js
import React from "react";

const Comment = (props) => {
  const { user, date, content } = props;

  return (
    <div className="bg-white m-1 p-1 rounded-lg">
      <div>
        <div className="flex items-center">
          <img
            src={user.img}
            alt="imgUser"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <h1>{user.name}</h1>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
      </div>
      <p className="py-2">{content}</p>
    </div>
  );
};

export default Comment;
