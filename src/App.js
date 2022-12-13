import './App.css';
import Header from "./Mycomponents/Header";
import Todos from "./Mycomponents/Todos";
import Footer from "./Mycomponents/Footer";
import React, { useState } from 'react';


function App() {
  const onDelete=(todo)=>{
    console.log("I am ondelete of todo", todo);
    // Deleting this way doesnt work in react
    // let index=todos.indexOf(todo);
    // todos.slice(index,1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }
    ))
  }
  
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to market to buy panneer"
    },
    {
      sno: 2,
      title: "Go to garden",
      desc: "You need to go to garden to take aloevera"
    },
    {
      sno: 3,
      title: "Go to Mall",
      desc: "You need to go to mall to buy clothes"
    }
      
    
  ]
  );
  return (
    <>
      <Header title="My TODOS list" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />

    </>
  );
}

export default App;
