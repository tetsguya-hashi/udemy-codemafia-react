import { useState } from "react";

const Example = () => {
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(10);
  const [valC, setValC] = useState(100);

  const clickHnadlerA = () => {
    setValA(valA + 1);
  }
  const clickHnadlerB = () => {
    setValB(valB + 1);
  }
  const clickHnadlerC = () => {
    setValC(valC + 1);
  }
  return (
    <>
      <p>ボンタンを{valA}回おしました。</p>
      <button onClick={clickHnadlerA}>ボタンA</button>
      <p>ボンタンを{valB}回おしました。</p>
      <button onClick={clickHnadlerB}>ボタンB</button>
      <p>ボンタンを{valC}回おしました。</p>
      <button onClick={clickHnadlerC}>ボタンC</button>
    </>
  )

};

export default Example;
