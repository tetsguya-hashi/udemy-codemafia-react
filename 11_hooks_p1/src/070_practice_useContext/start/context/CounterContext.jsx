import React from 'react'
import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';

const ValueContext = createContext();
const ValueDispatchContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: state.a + state.b };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};
export const CalcProvider = ({ children }) => {

  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ValueContext.Provider value={state}>
      <ValueDispatchContext.Provider value={dispatch}>
        {children}
      </ValueDispatchContext.Provider>
    </ValueContext.Provider>
  )
}

export const UseValue = () => {
  return useContext(ValueContext);
}
export const UseValueDispatch = () => {
  return useContext(ValueDispatchContext);
}
