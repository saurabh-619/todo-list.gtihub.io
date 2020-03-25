import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, addTodo] = useState([]);

  const handleChange = e => {
    const newTodo = e.target.value;
    setInputText(newTodo);
  };

  const handleClick = e => {
    addTodo(prevTodos => {
      return [...prevTodos, inputText];
    });
    setInputText("");
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="nTask"
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map(todo => {
            return <li>{todo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
