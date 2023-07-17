import "./App.css";
import { Course } from "./Course";

function App() {
  return (
    <div className="App">
      <Course
        title="Angular"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio distinctio a
    facilis ea non dolores velit ipsum eligendi quas autem quos repudiandae
    laboriosam et, voluptate, esse vero nemo sunt fuga."
      />
      <Course
        title="React"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio distinctio a
    facilis ea non dolores velit ipsum eligendi quas autem quos repudiandae
    laboriosam et, voluptate, esse vero nemo sunt fuga."
      />
    </div>
  );
}

export default App;
