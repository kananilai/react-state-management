import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useTodosDispatch } from "./state/Todo";

const Add: NextPage = () => {
  const { addTodo } = useTodosDispatch();
  console.log("rendered");

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
    addTodo(text);
    event.currentTarget.reset();
  };

  return (
    <div>
      <h2>TODO追加</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" autoComplete="off" required name="text" />
          <button>追加</button>
        </label>
      </form>
    </div>
  );
};

export default Add;
