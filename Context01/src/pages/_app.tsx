import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { Todo } from "src/types";
import { Layout } from "./components/Layout";

//createContextの引数は、何も指定されなかった時用のデフォルト値を指定する
export const ThemeContext = createContext("light");
export const LangContext = createContext("ja");

export default function MyApp({ Component, pageProps }: AppProps) {
  const TODOS: Todo[] = [
    { id: 1, text: "Foo", isDone: false },
    { id: 2, text: "Bar", isDone: true },
  ];

  const [todos, setTodos] = useState<Todo[]>(TODOS);
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ja");

  return (
    <ThemeContext.Provider value={theme}>
      <LangContext.Provider value={lang}>
        <Layout todoCount={todos.length}>
          <button
            onClick={() => {
              setTheme((prev) => (prev === "dark" ? "light" : "dark"));
              setLang((prev) => (prev === "ja" ? "en" : "ja"));
            }}
          >
            切り替え
          </button>
          <Component {...pageProps} todos={todos} setTodos={setTodos} />
        </Layout>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}
