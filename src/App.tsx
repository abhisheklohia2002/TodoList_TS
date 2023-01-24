import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import { Todo } from "./Componets/Controller";
import InputData from "./Componets/InputData";
import ToDoList from "./Componets/ToDoList";

const App: React.FC = () => {
  const [todo, settodo] = useState<string | number>("");
  const [Todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...Todos, { id: Date.now(), todo: todo, isDone: false }]);
      settodo("");
    }
  };

  console.log(Todos);
  return (
    <div className="app">
      <p className="span_header">
        {" "}
        <span className="Todo_header">Todo</span>
        <span className="Todo_type"> TypeScript</span>
      </p>
      <InputData todo={todo} settodo={settodo} handleAdd={handleAdd} />

      <ToDoList Todos={Todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
