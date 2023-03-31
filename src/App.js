import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message))
      .catch((error) => console.error(error));
  }, []);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const input = event.target.elements.todoInput;
    const newTodo = input.value.trim();
    if (newTodo !== "") {
      setTodoList([...todoList, newTodo]);
      input.value = "";
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoInput" placeholder="Add a to-do..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <img src={dogImage} alt="A cute dog!" />
    </div>
  );
}
