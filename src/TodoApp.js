import Button from "./Button";
//import styles from "./App.module.css";
import React, { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...toDos]);
    setToDo("");
  };
  console.log(toDos);
  console.log(toDos.map((toDo, index) => (
    <li key={index}>{toDo}</li>
  )))
  return (
    <div>
      <h1>To Do List {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do.."
        />
        <button>Write your to do</button>
      </form>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
