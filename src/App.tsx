import { FC, useState } from "react";
import Counter from "./components/Counter";

const App: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Counter
      count={count}
      reset={reset}
      decrement={decrement}
      increment={increment}
    />
  );
};

export default App;
