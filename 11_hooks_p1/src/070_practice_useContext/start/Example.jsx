import { Input } from "./conponent/Input";
import { Result } from "./conponent/Result";
import { Select } from "./conponent/Select";
import { CalcProvider, UseValueDispatch } from "./context/CounterContext";

const Example = () => {

  return (
    /* 完成系のJSX */
    // <CalcProvider>
    //   <Input name="a"/>      
    //   <Input name="b" />      
    //   <Select />
    //   <Result />      
    // </CalcProvider>
    <>
      <CalcProvider>
        <Input name='a' />
        <Input name='b' />
        <Select />
        <Result />
      </CalcProvider>
    </>
  );
};

export default Example;
