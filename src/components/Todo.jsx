import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo({
  id,
  task,
  isChecked,
  checkedClicked,
  onChangeInput,
  deleteTask,
}) {
  // console.log({ task: task, checked: isChecked });
  return (
    <div className="todo">
      <input
        type="checkbox"
        className="checkbox"
        checked={isChecked ? true : false}
        onChange={() => checkedClicked(id)}
      />
      <input
        className={isChecked ? "input-field task-done" : "input-field"}
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => onChangeInput(e, id)}
        disabled={isChecked ? true : false}
      />
      <FontAwesomeIcon
        icon={faTrash}
        className="delete"
        onClick={() => deleteTask(id)}
      />
    </div>
  );
}

export default Todo;
