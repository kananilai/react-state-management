import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <div>
      <nav>
        <p>
          <Link href="/">
            <a style={{ fontWeight:"bold" }}>React状態管理</a>
          </Link>
        </p>
        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a>TODO追加</a>
        </Link>
      </nav>
      <h2>TODO: 2件</h2>
    </div>
  );
};
