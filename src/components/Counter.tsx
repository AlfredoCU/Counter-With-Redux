import { FC } from "react";
import "../css/counter.css";

type TCounter = {
  count: number;
  reset: () => void;
  decrement: () => void;
  increment: () => void;
};

const Counter: FC<TCounter> = ({ count, reset, decrement, increment }) => (
  <div>
    <h1>
      Counter <span className="span-title">with</span> Redux
    </h1>

    <h2>{count}</h2>

    <div className="content">
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  </div>
);

export default Counter;
