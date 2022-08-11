import { useState } from "react";

const Example = () => {

  const [inputVal, setInputVal] = useState('');
  const onChangeHandler = (e) => {
    setInputVal(e.target.value)
  }
  return (
    <>
      <input type="text" onChange={onChangeHandler} /> = {inputVal}
    </>
  );
};

export default Example;
