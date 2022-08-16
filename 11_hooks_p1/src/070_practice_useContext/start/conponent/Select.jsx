import { UseValue, UseValueDispatch } from "../context/CounterContext";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];
export const Select = () => {
  const state = UseValue();
  const dispatch = UseValueDispatch();
  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  return (
    <>
      <select name="type" value={state.type} onChange={calculate}>
        {CALC_OPTIONS.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  )
}
