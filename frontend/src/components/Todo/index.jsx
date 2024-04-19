// Importing necessary hooks and components
import { useState, useEffect } from "react";
import TodoList from "../TodoList";
import "./styles.css";
import axios from "../../axios";

// Todo component
function Todo() {
  // State for the input field
  const [input, setInput] = useState("");
  // State for the list of todos
  const [todos, setTodos] = useState([]);

  // Function to fetch todos from the server
  const fetchData = async () => {
    try {
      // Sending a GET request to '/todos'
      const response = await axios.get("/todos");
      // Updating the todos state with the fetched todos
      setTodos(response.data);
    } catch (error) {
      // Logging any errors to the console
      console.log(error.message);
    }
  };

  // useEffect hook to fetch todos when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect will only run once, when the component mounts

  // Function to add a new todo
  const addTodo = async (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();

    // If the input is empty, return null and do nothing
    if (input.length === 0) {
      return null;
    }

    // Sending a POST request to '/save' with the new todo data
    await axios.post("/save", { text: input, completed: false });

    // Fetching the updated list of todos
    fetchData();

    // Clearing the input field
    setInput("");

    // Logging a message to the console
    console.log("Add todo");
  };

  // Rendering the component
  return (
    <div className="container">
      <h2>List of Todos</h2>
      <form action="post">
        <input
          className="todoInput"
          type="text"
          value={input}
          // Updating the input state whenever the input field changes
          onChange={(e) => setInput(e.target.value)}
          name="todo"
          id="todo"
        />
        <button
          className="addButton"
          type="submit"
          // Calling the addTodo function when the button is clicked
          onClick={(e) => addTodo(e)}
          id="submit"
        >
          Add
        </button>
      </form>
      {/* Passing the todos and fetchData function as props to the TodoList component */}
      <TodoList todos={todos} fetchData={fetchData} />
    </div>
  );
}
// Exporting the Todo component
export default Todo;
