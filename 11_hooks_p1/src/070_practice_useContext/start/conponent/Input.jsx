import { UseValue, UseValueDispatch } from '../context/CounterContext'

export const Input = ({ name }) => {
  const state = UseValue();
  const dispatch = UseValueDispatch();
  const numChangeHandler = (e) => {
    dispatch({ type: 'change', payload: { name: e.target.name, value: parseInt(e.target.value) } });
  };
  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        value={state[name]}
        onChange={numChangeHandler}
      />
    </div>

  )
}
