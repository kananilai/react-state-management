import type { AppProps } from "next/app";
import { useState } from "react";
import { Todo } from "src/types";
import { Layout } from "./components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  const TODOS: Todo[] = [
    { id: 1, text: "Foo", isDone: false },
    { id: 2, text: "Bar", isDone: true },
  ];
  const [todos, setTodos] = useState<Todo[]>(TODOS);
  return (
    <>
      <Layout todoCount={todos.length}>
        <Component {...pageProps} todos={todos} setTodos={setTodos} />
      </Layout>
    </>
  );
}
