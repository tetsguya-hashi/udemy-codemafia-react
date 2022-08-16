import { useReducer } from "react";
import { useState } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, action) => {
    switch (action) {
      case '+': return prev + 1;
      case '-': return prev - 1;
      default: throw new Error('エラーです');
    }
  }, 0);

  const countUpBtn = () => {
    setState(prev => prev + 1);
  }
  const rcountUpBtn = () => {
    dispatch('+');
  }
  const rcountDownBtn = () => {
    dispatch('-');
  }
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUpBtn}>+</button>
        <button onClick={countUpBtn}>-</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUpBtn}>+</button>
        <button onClick={rcountDownBtn}>-</button>
      </div>
    </>
  );
};

export default Example;
