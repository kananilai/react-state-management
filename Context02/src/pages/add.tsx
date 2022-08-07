import type { NextPage } from "next";
import { ComponentProps, useContext } from "react";
import { TodoContext } from "./_app";

const Home: NextPage = () => {
  const { setTodos } = useContext(TodoContext);

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
    setTodos((prevTodos) => {
      const newTodo = { id: prevTodos.length + 1, text: text, isDone: false };
      //配列の末尾に追加
      return [...prevTodos, newTodo];
    });
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

export default Home;
