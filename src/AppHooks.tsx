import { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Counter from "./components/Counter";
import { reset, decrement, increment } from "./store/actions/counterActions";

const App: FC = () => {
  const {
    counter: { count },
  }: any = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  return (
    <Counter
      count={count}
      reset={handleReset}
      decrement={handleDecrement}
      increment={handleIncrement}
    />
  );
};

export default App;
