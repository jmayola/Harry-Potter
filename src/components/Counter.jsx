import { useContext } from "react";
import {ExampleContextProvider, ExampleContext} from "../contexts/Example";

function Counter() {
  const { AddCounter, Counter } = useContext(ExampleContext);
  return (
    <ExampleContextProvider>
      <h1>clicks {Counter}</h1>
      <button onClick={() => AddCounter()}>hola</button>
    </ExampleContextProvider>
  );
}
export default Counter;
