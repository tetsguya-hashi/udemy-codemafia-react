import { useRef, forwardRef } from "react";


const Input = ({ refVal }) => {
  return <input type="text" ref={refVal} />
}
const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input refVal={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
