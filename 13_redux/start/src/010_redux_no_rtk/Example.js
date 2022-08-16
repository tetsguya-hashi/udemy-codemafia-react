import { Provider } from 'react-redux';

import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";
import store from './store';


const Example = () => {
  return (
    <Provider>
      <Counter />
    </Provider>
  );
};

export default Example;
