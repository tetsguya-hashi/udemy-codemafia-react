import { useState } from "react";

const Child = ({ state, setState }) => {
  const increment = () => {
    // setState((prev) => ({ value: prev.value + 1 }))
    setState((prev) => {
      // const newCount = { value: prev.value += 1 };
      const newCount = { ...prev };
      newCount.value += 1;
      return newCount;
    })
  }
  return (
    <>
      <span>{state.value}</span>
      <button onClick={increment}>+</button>
    </>
  );
};

const Example = () => {
  const [state, setState] = useState({ value: 0 });
  return (
    <>
      <div>
        <Child state={state} setState={setState} />
      </div>
    </>
  );
};

export default Example;
