import { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TCount } from "./types";
import Counter from "./components/Counter";
import { selectCurrentCount } from "./store/selectors/counterSelectors";
import { reset, decrement, increment } from "./store/actions/counterActions";

const AppHook: FC = () => {
  const count: any = useSelector<TCount>((state) => selectCurrentCount(state));

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

export default AppHook;
