import axios from "axios";

const API_URL = "http://localhost:8080/uconnect/api/v1/comentario";

// Obtener comentarios
const getComments = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los comentarios:", error);
    throw error;
  }
};

// Crear un nuevo comentario
const createComment = async (newComment) => {
  try {
    const response = await axios.post(API_URL, newComment);
    return response.data;
  } catch (error) {
    console.error("Error al crear el comentario:", error);
    throw error;
  }
};

export default {
  getComments,
  createComment
};
