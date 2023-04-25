import React, { useState, useRef, useEffect } from "react";
import "./Todos.css";
import TodoItems from "./TodoItems";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  let [value, setValues] = useState("");
  const [show, setShow] = useState(false);
  const prevRef = useRef();

  const onDelete = (id) => {
    let newTodos = todos.filter((e) => {
      return e.id !== id;
    });
    setTodos(newTodos);
  };

  const handleTasks = () => {
    console.log("todos->", todos);
    if (show === false) {
      prevRef.current = todos;
      let newTodos = todos.filter((e) => {
        return e.check === false;
      });
      setTodos(newTodos);
    } else {
      setTodos(prevRef.current);
    }
    setShow((prev) => !prev);
  };

  return (
    <div>
      <div className="title">
        {/* <h1>TODO LIST</h1> */}
        <h1>दैनिक कार्यक्रम सूची</h1>
      </div>
      <input
        value={value}
        // placeholder="Enter Todo Items/Work"
        placeholder="दैनिक वस्तुओं का प्रवेश करें 🔍"
        onChange={(e) => {
          setValues(e.target.value);
        }}
        onKeyDownCapture={(e) => {
          // console.log(e);
          if (e.key === "Enter" && value !== "") {
            setTodos([
              ...todos,
              { id: Date.now(), title: value, check: false },
            ]);
            setValues("");
          }
        }}
      />
      {todos.map((ele) => (
        <TodoItems key={ele.id} ele={ele} onDelete={onDelete} />
      ))}
      <div>
        <button onClick={handleTasks} className="tasks">
          {show === false ? "केवल अधूरी वस्तुएं दिखाएं" : "सभी वस्तुएं दिखाएं"}
        </button>
      </div>
    </div>
  );
};

export default Todos;
