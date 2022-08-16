import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </div>
  );
};

const Case2 = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
  return (
    <div>
      <h2>ユースケース２</h2>
      <video ref={videoRef} style={{ maxWidth: '100%' }}>
        <source src="./sample.mp4"></source>
      </video>
      <button onClick={() => {
        setPlaying((prev) => !prev);
        playing ? videoRef.current.pause() : videoRef.current.play();
      }}>
        {playing ? 'Stop' : 'Play'}
      </button>
    </div>
  )
}

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
