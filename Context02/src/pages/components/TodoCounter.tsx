import { FC, useContext } from "react";
import { TodoContext } from "pages/_app";

export const TodoCounter: FC = () => {
  const { todos } = useContext(TodoContext);

  return <h2>TODO: {todos.length}件</h2>;
};
