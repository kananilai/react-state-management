import type { NextPage } from "next";
import { ComponentProps } from "react";

const Home: NextPage = () => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
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
