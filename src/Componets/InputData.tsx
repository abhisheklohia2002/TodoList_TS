import React from "react";
import "./form.css";
interface props {
  todo: string | number;
  settodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input_Data: React.FC = ({ todo, settodo, handleAdd }: props) => {
  return (
    <>
      <form className="input_Data_info" onSubmit={handleAdd}>
        <input
          className="Data_info"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
          placeholder="Enter The Task"
          type="input"
        />
        <button className="btn" type="Submit">Add</button>
      </form>
    </>
  );
};

export default Input_Data;
