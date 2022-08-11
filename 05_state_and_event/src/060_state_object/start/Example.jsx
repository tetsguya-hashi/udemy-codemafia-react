import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const setName = (e) => {
    console.log({ ...person })
    setPerson({ ...person, name: e.target.value });
  }
  const setAge = (e) => {
    setPerson({ name: person.name, age: e.target.value });
  }
  const resetBtn = () => {
    setPerson({ name: '', age: '' });
  }
  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input type="text" onChange={setName} value={person.name} />
      <input type="text" onChange={setAge} value={person.age} /><br />
      <button onClick={resetBtn}>リセット</button>
    </>
  )
};

export default Example;
