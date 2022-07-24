import { FC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Counter from "./components/Counter";
import { reset, decrement, increment } from "./store/actions/counterActions";

type TApp = {
  count: number;
  reset: () => void;
  decrement: () => void;
  increment: () => void;
};

const App: FC<TApp> = ({ count, reset, decrement, increment }) => (
  <Counter
    count={count}
    reset={reset}
    decrement={decrement}
    increment={increment}
  />
);

const mapStateToProps = (state: { counter: { count: number } }) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      reset: () => reset(),
      decrement: () => decrement(),
      increment: () => increment(),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);

//* Para evitar usar dispatch en cada método podemos usar bindActionCreators
// const mapDispatchToProps = (dispatch: any) => ({
//   reset: () => dispatch(reset()),
//   decrement: () => dispatch(decrement()),
//   increment: () => dispatch(increment()),
//   dispatch,
// });

/*
 * Modo 1
 * Se puede enviar un objeto de acciones, pero cambiara la forma de ejecutar la función en el componente Counter
 */
// export default connect(mapStateToProps, { reset, decrement, increment })(App);
