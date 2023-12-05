import React from "react";
import { useState } from "react";
import CreateTask from "../components/CreateTask";
import TodosList from "../components/TodosList";
import PageTitle from "../components/PageTitle";

const initialTasks = [
  {
    id: 1,
    task: "Buy groceries",
    checked: false,
  },
  {
    id: 2,
    task: "Pay bills",
    checked: true,
  },
  {
    id: 3,
    task: "Exercise for 30 minutes",
    checked: false,
  },
];
function Todos() {
  const [todos, setTodos] = useState(initialTasks);
  const [userInput, setUserInput] = useState("");

  const getNextId = () => {
    const maxId = todos.reduce(
      (max, task) => (task.id > max ? task.id : max),
      -1
    );
    return maxId + 1;
  };

  function addTask(newTask) {
    if (userInput.trim()) {
      setTodos((prevTasks) => [
        ...prevTasks,
        { id: getNextId(), task: newTask, checked: false },
      ]);
    }
  }

  function onChangeInput(e, taskId) {
    setTodos(
      todos.map((todo) =>
        todo.id === taskId
          ? {
              ...todo,
              task: e.target.value,
            }
          : todo
      )
    );
  }

  function checkedClicked(taskId) {
    setTodos(
      todos.map((todo) =>
        todo.id === taskId
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      )
    );
  }

  const deleteTask = (deleteId) => {
    setTodos(() => todos?.filter((todo) => todo.id !== deleteId));
  };

  return (
    <div className="todo-list">
      <PageTitle title="TODOS App" />
      <CreateTask
        addTask={addTask}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <TodosList
        todos={todos}
        checkedClicked={checkedClicked}
        onChangeInput={onChangeInput}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default Todos;
