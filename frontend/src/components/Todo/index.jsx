import { useState, useEffect } from "react";
import TodoList from "../TodoList";
import "./styles.css";
import axios from "../../axios";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/todos");
      setTodos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return null;
    }
    await axios.post("/save", { text: input, completed: false });
    fetchData();
    setInput("");
    console.log("Add todo");
  };

  return (
    <div className="container">
      <h2>List of Todos</h2>
      <form action="post">
        <input
          className="todoInput"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          name="todo"
          id="todo"
        />
        <button
          className="addButton"
          type="submit"
          onClick={(e) => addTodo(e)}
          id="submit"
        >
          Add
        </button>
      </form>
      <TodoList todos={todos} fetchData={fetchData} />
    </div>
  );
}

export default Todo;
