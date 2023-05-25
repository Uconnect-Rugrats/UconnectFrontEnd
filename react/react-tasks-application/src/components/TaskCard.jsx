import TaskContext from "../context/TaskContext.jsx";

function TaskCard({ task, deleteTask }) {
  return (
    <TaskContext>
      <div>
        <h1>{task.title}</h1>
        <p>{task.descripcion}</p>
        <button onClick={() => deleteTask(task.id)}>Elinimar Tarea</button>
      </div>
    </TaskContext>
  );
}

export default TaskCard;
