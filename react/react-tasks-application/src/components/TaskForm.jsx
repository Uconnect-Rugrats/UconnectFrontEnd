import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      descripcion,
    });
    setTitle("");
    setDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
