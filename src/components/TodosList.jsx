import React from "react";
import Todo from "../components/Todo";

function TodosList({ todos, checkedClicked, onChangeInput, deleteTask }) {
  return (
    <div className="tasks-container">
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          isChecked={todo.checked}
          checkedClicked={checkedClicked}
          onChangeInput={onChangeInput}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TodosList;
