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
  const { user, imgUser, data, group, content, numReactions, numComments } =
    props;

  const [likesCount, setLikesCount] = useState(numReactions);
  const [reactionsVisible, setReactionsVisible] = useState(false);
  const [reactionSelected, setReactionSelected] = useState(null);
  const [commentModalOpen, setCommentModalOpen] = useState(false);

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

  const openCommentModal = () => {
    setCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setCommentModalOpen(false);
  };

  return (
    <div className="bg-white mt-2 p-3 rounded-lg">
      <div>
        <div className="flex items-center">
          <img
            src={imgUser}
            alt="imgUser"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <h1>{user}</h1>
            <p className="text-xs text-gray-500">{group}</p>
            <p className="text-xs text-gray-500">{data}</p>
          </div>
        </div>
      </div>
      <p className="py-2">{content}</p>
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
              <img src={likeGray} alt="likeGray" className="w-4 h-4 mr-1" />
            )}
            {likesCount}
          </button>
          <div className="flex items-center mr-2">
            <button
              className="comment-button flex items-center"
              onClick={openCommentModal}
            >
              <img src={comments} alt="Comments" className="w-4 h-4 mr-1" />
              {numComments}
            </button>
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
          overlayClassName="fixed inset-0 bg-black bg-opacity-40"
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
        <Modal
          isOpen={commentModalOpen}
          onRequestClose={closeCommentModal}
          className="w-[400px] h-[250px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-40"
        >
          <h1 className="text-lg mb-4">Agregando comentario...</h1>
          <form>
            <textarea
              className="w-full h-28 p-2 border-b border-gray-300 mb-4"
              placeholder="Cuentanos tu opinión"
            />
            <button className="bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Publicar comentario
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Post;
