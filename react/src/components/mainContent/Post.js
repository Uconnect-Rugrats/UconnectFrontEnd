import React from "react";
import likeBlue from "../../images/like-blue.png";
import comments from "../../images/comments.png";
import share from "../../images/share.png";

const Post = (props) => {
    const { usuario, imgUsuario, fecha, grupo, contenido } = props;
  
    return (
      <div className="bg-white mt-2 p-3 rounded-lg">
        <div>
          <div className="flex items-center">
            <img src={imgUsuario} className="w-8 h-8 rounded-full mr-2 border-black	" />
            <div>
              <h1>{usuario}</h1>
              <p className="text-xs text-gray-500">{grupo}</p>
              <p className="text-xs text-gray-500">{fecha}</p>
            </div>
          </div>
        </div>
        <p className="py-2">{contenido}</p>
        <div>
          <div className="activity-icons flex">
            <div className="flex items-center mr-2">
              <img src={likeBlue} alt="Like" className="w-4 h-4 mr-1" />
              120
            </div>
            <div className="flex items-center mr-2">
              <img src={comments} alt="Comments" className="w-4 h-4 mr-1" />
              15
            </div>
            <div className="flex items-center mr-2">
              <img src={share} alt="Share" className="w-4 h-4  mr-1" />
              20
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Post;
