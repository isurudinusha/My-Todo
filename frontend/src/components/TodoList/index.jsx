import "./styles.css";
import axios from "../../axios";

function TodoList({ todos, fetchData }) {
  const updatedTodos = async (id) => {
    try {
      await axios.put(`/update/${id}`);
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/delete/${id}`);
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ul>
      {todos?.map((todo) => {
        return (
          <li key={todo._id}>
            <div className="todoContainer">
              <div class="checkbox-wrapper-19">
                <input
                  type="checkbox"
                  id="cbtest-19"
                  checked={todo.completed}
                  onChange={() => updatedTodos(todo._id)}
                />
                <label for="cbtest-19" class="check-box"></label>
              </div>
              <p
                className="todoText"
                style={{
                  color: todo.completed ? "red" : null,
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
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
    </ul>
  );
}

export default TodoList;
