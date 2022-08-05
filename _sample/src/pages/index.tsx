import type { NextPage } from "next";

const TODOS = [
  { id: 1, text: "Foo", isDone: false },
  { id: 2, text: "Bar", isDone: true },
];

const Home: NextPage = () => {
  return (
    <div>
      <h3>TODO一覧</h3>
      {TODOS.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              style={{ width: "1.5rem", height: "1.5rem" }}
              checked={todo.isDone}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
