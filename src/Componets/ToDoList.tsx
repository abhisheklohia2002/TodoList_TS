import "./Todostyle.css";
import { useState } from "react";
import { Todo } from "./Controller";

interface props {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC = ({ Todos, setTodos }: props) => {
  const [edit, setedit] = useState<boolean>(false);
  const [editTodo, seteditTdos] = useState<string>("");
  console.log(Todos, "true");
  const HandleDone = (id: number) => {
    setTodos(Todos.map((e) => (e.id === id ? { ...e, isDone: !e.isDone } : e)));
  };

  const HandleDelete = (id: number) => {
    setTodos(
      Todos.filter((e) => {
        return e.id !== id;
      })
    );
  };

  return (
    <>
      <div className="todoList">
        {Todos.map((e, i) => (
          <div className="div_col" key={e.id}>
            {e.isDone ? (
              <del>
                {" "}
                <p className="List_data">{e.todo} </p>{" "}
              </del>
            ) : (
              <li type="none" className="List_data">
                {e.todo}
              </li>
            )}
            <button className="btn_delete" onClick={() => HandleDelete(e.id)}>
              Delete
            </button>
            <button
              style={{ background: e.isDone ? "green" : "#ab9f9d" }}
              className="btn_done"
              onClick={() => HandleDone(e.id)}
            >
              {" "}
              IsDone
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
