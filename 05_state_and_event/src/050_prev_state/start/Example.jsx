import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState(0);
  const incliment = () => {
    setVal(val + 1);
  }
  const decliment = () => {
    setVal(val - 1);
  }

  return (
    <>
      <p>カウント{val}</p>
      <button onClick={incliment}>+</button>
      <button onClick={decliment}>-</button>
    </>
  )

};

export default Example;
