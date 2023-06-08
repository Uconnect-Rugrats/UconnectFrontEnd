import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import meEncanta from "../../images/amor.png";
import como from "../../images/como.png";
import disgusto from "../../images/disgusto.png";
import risa from "../../images/risa.png";
import triste from "../../images/triste.png";
import comments from "../../images/comments.png";
import share from "../../images/share.png";
import likeGray from "../../images/like.png";
import userUconnect from "../../images/icon_uconnect.jpg";
import Comment from "./Comment";
Modal.setAppElement("#root");


const Post = (props) => {
  const {
    identificador,
    user,
    imgUser,
    date,
    group,
    content,
    numReactions,
    numComments,
  } = props;

  const [likesCount, setLikesCount] = useState(numReactions);
  const [reactionsVisible, setReactionsVisible] = useState(false);
  const [reactionSelected, setReactionSelected] = useState(null);
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const reactionImages = [
    { name: "Me Encanta", icon: meEncanta },
    { name: "Me gusta", icon: como },
    { name: "Me disgusta", icon: disgusto },
    { name: "Me divierte", icon: risa },
    { name: "Me entristece", icon: triste },
  ];

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

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const addComment = async () => {
    const requestBody = {
      autor:{identificador:"83286a83-53cf-4636-b2ee-b3405c0acd04"},
      comentarioPadre:{identificador:"24cb84be-fdd8-4fe2-811a-b1d97c59f731"},
      publicacion:{identificador:identificador},
      contenido:comment,
      estado:{identificador:"ffce038d-9dd2-4820-8b48-5fc591c7a146"}
   };

    fetch("http://localhost:8080/uconnect/api/v1/comentario", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCommentList((prevCommentList) => [data, ...prevCommentList]);
        console.log(requestBody)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    addComment();
    setCommentModalOpen(false);
  };

  useEffect(() => {
    const comentario = {
      publicacion: { identificador: identificador },
    };

    const dtoJson = JSON.stringify(comentario);

    fetch(
      `http://localhost:8080/uconnect/api/v1/comentario?dtoJson=${encodeURIComponent(
        dtoJson
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const comentario = data.data || [];
        setCommentList(comentario);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
            <p className="text-xs text-gray-500">{date}</p>
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
            <button className="flex items-center" onClick={openCommentModal}>
              <img src={comments} alt="Comments" className="w-4 h-4 mr-1" />
              {numComments} Comentar
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
            {reactionImages.map((reactionImage) => (
              <button
                key={reactionImage.name}
                className={`reaction-button flex items-center mx-1 ${
                  reactionSelected &&
                  reactionSelected.name === reactionImage.name
                    ? "text-blue-500"
                    : ""
                }`}
                onClick={() => handleReactionClick(reactionImage)}
              >
                <img
                  src={reactionImage.icon}
                  alt={reactionImage.name}
                  className="reaction-icon w-4 h-4 mr-1"
                />
                <span className="text-xs">{reactionImage.name}</span>
              </button>
            ))}
          </div>
        </Modal>
        <Modal
          isOpen={commentModalOpen}
          onRequestClose={closeCommentModal}
          className="w-[400px] h-[250px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-40"
        >
          <h1 className="text-lg mb-4">Agregando comentario...</h1>
          <form onSubmit={handleSubmitComment}>
            <textarea
              className="w-full h-28 p-2 border-b border-gray-300 mb-2 bg-transparent resize-none mt-2"
              placeholder="Cuentanos tu opinión"
              value={comment}
              onChange={handleCommentChange}
            />
            <button className="bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Publicar comentario
            </button>
          </form>
        </Modal>

        <div className="bg-slate-50 p-2 mt-4 rounded-lg">
          {commentList.map((comment) => (
            <Comment
              key={comment.identificador}
              identificador={comment.identificador}
              user={
                comment.autor?.participante?.persona?.primerNombre +
                " " +
                comment.autor?.participante?.persona?.primerApellido
              }
              imgUser={imgUser}
              date={comment.fechaPublicacion}
              content={comment.contenido}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
