import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { Addtodo } from "./MyComponents/Addtodo";
import { About } from "./MyComponents/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import useEffect

// import useState
import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("This is onDelete of ", todo);
    // This doesnt work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    // This works in react
    setTodos(todos.filter((t) => t.sno !== todo.sno));
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addToDo = (title, desc) => {
    let newTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
  };

  let [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <BrowserRouter>
        <Header title="Todos list app" searchBar={false} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Addtodo addToDo={addToDo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
