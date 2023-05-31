import React, { useState } from "react";
import Modal from "react-modal";
import meEncanta from "../../images/amor.png";
import como from "../../images/como.png";
import disgusto from "../../images/disgusto.png";
import risa from "../../images/risa.png";
import triste from "../../images/triste.png";
import comments from "../../images/comments.png";
import share from "../../images/share.png";
import likeGray from "../../images/like.png";

const Post = (props) => {
  const { usuario, imgUsuario, fecha, grupo, contenido } = props;

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(120);
  const [reactionsVisible, setReactionsVisible] = useState(false);
  const [reactionSelected, setReactionSelected] = useState(null);

  const handleLikeClick = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const toggleReactions = () => {
    setReactionsVisible(!reactionsVisible);
  };

  const handleReactionClick = (reaction) => {
    if (reaction === reactionSelected) {
      setReactionSelected(null);
      setLikesCount(likesCount - 1);
    } else {
      setReactionSelected(reaction);
      if (!reactionSelected) {
        setLikesCount(likesCount + 1);
      }
    }
    setReactionsVisible(false);
  };

  return (
    <div className="bg-white mt-2 p-3 rounded-lg">
      <div>
        <div className="flex items-center">
          <img src={imgUsuario} alt="imgUser" className="w-8 h-8 rounded-full mr-2" />
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
          <button className="flex items-center mr-2" onClick={toggleReactions}>
            {reactionSelected ? (
              <img
                src={reactionSelected.icon}
                alt={reactionSelected.name}
                className="w-4 h-4 mr-1"
              />
            ) : (
              <img src={likeGray} alt="Reactions" className="w-4 h-4 mr-1" />
            )}
            {likesCount}
          </button>
          <div className="flex items-center mr-2">
            <img src={comments} alt="Comments" className="w-4 h-4 mr-1" />
            15
          </div>
          <div className="flex items-center mr-2">
            <img src={share} alt="Share" className="w-4 h-4 mr-1" />
            20
          </div>
        </div>
        <Modal
          isOpen={reactionsVisible}
          onRequestClose={() => setReactionsVisible(false)}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="reactions-container flex">
            <button
              className={`reaction-button flex items-center mx-1 ${
                reactionSelected && reactionSelected.name === "Me Encanta"
                  ? "text-blue-500"
                  : ""
              }`}
              onClick={() =>
                handleReactionClick({ name: "Me Encanta", icon: meEncanta })
              }
            >
              <img
                src={meEncanta}
                alt="Me Encanta"
                className="reaction-icon w-4 h-4 mr-1"
              />
              <span className="text-xs">Me Encanta</span>
            </button>
            <button
              className={`reaction-button flex items-center mx-1 ${
                reactionSelected && reactionSelected.name === "Me gusta"
                  ? "text-blue-500"
                  : ""
              }`}
              onClick={() =>
                handleReactionClick({ name: "Me gusta", icon: como })
              }
            >
              <img
                src={como}
                alt="Me gusta"
                className="reaction-icon w-4 h-4 mr-1"
              />
              <span className="text-xs">Me gusta</span>
            </button>
            <button
              className={`reaction-button flex items-center mx-1 ${
                reactionSelected && reactionSelected.name === "Me disgusta"
                  ? "text-blue-500"
                  : ""
              }`}
              onClick={() =>
                handleReactionClick({ name: "Me disgusta", icon: disgusto })
              }
            >
              <img
                src={disgusto}
                alt="Me disgusta"
                className="reaction-icon w-4 h-4 mr-1"
              />
              <span className="text-xs">Me disgusta</span>
            </button>
            <button
              className={`reaction-button flex items-center mx-1 ${
                reactionSelected && reactionSelected.name === "Me divierte"
                  ? "text-blue-500"
                  : ""
              }`}
              onClick={() =>
                handleReactionClick({ name: "Me divierte", icon: risa })
              }
            >
              <img
                src={risa}
                alt="Me divierte"
                className="reaction-icon w-4 h-4 mr-1"
              />
              <span className="text-xs">Me divierte</span>
            </button>
            <button
              className={`reaction-button flex items-center mx-1 ${
                reactionSelected && reactionSelected.name === "Me entristece"
                  ? "text-blue-500"
                  : ""
              }`}
              onClick={() =>
                handleReactionClick({ name: "Me entristece", icon: triste })
              }
            >
              <img
                src={triste}
                alt="Me entristece"
                className="reaction-icon w-4 h-4 mr-1"
              />
              <span className="text-xs">Me entristece</span>
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Post;
