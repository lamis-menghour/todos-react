import React from "react";

function CreateTask({ addTask, userInput, setUserInput }) {
  return (
    <div className="create-task">
      <input
        type="text"
        placeholder="Enter your task"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className=""
      />
      <button
        className="add-task"
        onClick={() => {
          addTask(userInput);
          setUserInput("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default CreateTask;
