// Importing necessary styles and modules
import "./styles.css";
import axios from "../../axios";

// TodoList component
function TodoList({ todos, fetchData }) {
  // Function to update a todo
  const updatedTodos = async (id) => {
    try {
      // Sending a PUT request to '/update/:id'
      await axios.put(`/update/${id}`);
      // Fetching the updated list of todos
      fetchData();
    } catch (error) {
      // Logging any errors to the console
      console.log(error.message);
    }
  };

  // Function to delete a todo
  const deleteTodo = async (id) => {
    try {
      // Sending a DELETE request to '/delete/:id'
      await axios.delete(`/delete/${id}`);
      // Fetching the updated list of todos
      fetchData();
    } catch (error) {
      // Logging any errors to the console
      console.log(error.message);
    }
  };

  // Rendering the component
  return (
    <ul>
      {/* Mapping over the todos and rendering a list item for each one */}
      {todos?.map((todo) => {
        return (
          <li key={todo._id}>
            <div className="todoContainer">
              <div class="checkbox-wrapper-19">
                <input
                  type="checkbox"
                  id={`cbtest-${todo._id}`}
                  checked={todo.completed}
                  // Updating the todo when the checkbox is clicked
                  onChange={() => updatedTodos(todo._id)}
                />
                <label for={`cbtest-${todo._id}`} class="check-box"></label>
              </div>
              <p
                className="todoText"
                style={{
                  color: todo.completed ? "red" : null,
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                // Updating the todo when the text is clicked
                onClick={() => updatedTodos(todo._id)}
              >
                {todo.text}
              </p>
            </div>

            <p className="deleteIcon" onClick={() => deleteTodo(todo._id)}>
              X
            </p>
          </li>
        );
      })}
      <h3 className="loading">Loading...</h3>
    </ul>
  );
}

// Exporting the TodoList component
export default TodoList;
