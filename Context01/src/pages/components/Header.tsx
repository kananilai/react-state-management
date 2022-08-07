import Link from "next/link";
import { FC, useContext } from "react";
import { LangContext, ThemeContext } from "../_app";
import { TodoCounter } from "./TodoCounter";

type Props = {
  todoCount: number;
};

export const Header: FC<Props> = ({ todoCount }) => {
  //useCOntextはどこでも使うことができる
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);
  
  return (
    <div>
      <nav>
        <p>
          <Link href="/">
            <a style={{ fontWeight: "bold" }}>React状態管理</a>
          </Link>
        </p>
        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a>TODO追加</a>
        </Link>
      </nav>
      <TodoCounter todoCount={todoCount} />
    </div>
  );
};
