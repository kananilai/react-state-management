import { useTodos } from "pages/state/Todo";
import { FC } from "react";

export const TodoCounter: FC = () => {
  const todos = useTodos();
  return <h2>TODO: {todos.length}件</h2>;
};
