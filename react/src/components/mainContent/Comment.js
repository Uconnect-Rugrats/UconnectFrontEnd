import React, { useState } from "react";
import Modal from "react-modal";

const Comment = (props) => {
  const { identificador, user, imgUser, date, content } = props;
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [reply, setReply] = useState("");

  const openReplyModal = () => {
    setReplyModalOpen(true);
  };

  const closeReplyModal = () => {
    setReplyModalOpen(false);
  };

  const handleReplyChange = (event) => {
    setReply(event.target.value);
  };

  const handleSubmitReply = (event) => {
    event.preventDefault();

    setReply("");
    setReplyModalOpen(false);
  };

  return (
    <div className="bg-white m-1 p-1 rounded-lg">
      <div>
        <div className="flex items-center">
          <img
            src={imgUser}
            alt="imgUser"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <h1>{user}</h1>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>
      </div>
      <p className="py-2">{content}</p>
      <div className="flex justify-end mt-auto">
        <button
          className="text-blue-800 bg-transparent hover:bg-blue-100 px-4 py-2 rounded"
          onClick={openReplyModal}
        >
          Responder
        </button>
      </div>
      <Modal
        isOpen={replyModalOpen}
        onRequestClose={closeReplyModal}
        className="w-[400px] h-[250px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-4 z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40"
      >
        <h1 className="text-lg mb-4">Responder comentario</h1>
        <form onSubmit={handleSubmitReply}>
          <textarea
            className="w-full h-28 p-2 border-b border-gray-300 mb-2 bg-transparent resize-none mt-2"
            placeholder="Escribe tu respuesta aquí"
            value={reply}
            onChange={handleReplyChange}
          />
          <button className="bg-blue-700 hover:bg-blue-700 text-white px-1 py-2 rounded">
            Enviar respuesta
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Comment;
