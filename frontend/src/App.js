// Importing the CSS file
import './App.css';

// Importing the Todo component
import Todo from './components/Todo';

// Function component App
function App() {
  return (
    // JSX syntax for HTML-like structure
    <div className="App">
      <h1>Welcome to My Todos</h1>
      {/* Rendering the Todo Component */}
      <Todo />
    </div>
  );
}

// Exporting the App component to be used in other parts of the application
export default App;