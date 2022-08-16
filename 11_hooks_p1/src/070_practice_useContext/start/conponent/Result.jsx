import { UseValue } from '../context/CounterContext'

export const Result = () => {
  const state = UseValue();
  return (
    <h3>結果：{state.result}</h3>
  )
}
