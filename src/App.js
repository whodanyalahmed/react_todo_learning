import logo from "./logo.svg";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
// import useState
import React, { useState } from "react";

import "./App.css";


function App() {

  const onDelete = (todo) => {
    console.log("This is onDelete of ", todo);
    // This doesnt work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
  
    // This works in react
    setTodos(todos.filter((t) => t.sno !== todo.sno));
  };
  let [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Todo 1",
      desc: "This is Todo 1",
    },
    {
      sno: 2,
      title: "Todo 2",
      desc: "This is Todo 2",
    },
    {
      sno: 3,
      title: "Todo 3",
      desc: "This is Todo 3",
    },
  ]);

  return (
    <>
      <Header title="Todos list app" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
