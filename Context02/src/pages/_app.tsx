import type { AppProps } from "next/app";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Todo } from "types";
import { Layout } from "./components/Layout";

const TODOS: Todo[] = [
  { id: 1, text: "Foo", isDone: false },
  { id: 2, text: "Bar", isDone: true },
];

export const TodoContext = createContext<{
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}>({
  todos: TODOS,
  setTodos: () => {
    throw Error("No default value");
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <Layout>
        <Component {...pageProps}  />
      </Layout>
    </TodoContext.Provider>
  );
}
