import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador";

function App() {
   const state = useSelector((state) => state.contador)
   const dispatch = useDispatch()
   console.log(state)
  return (
    <div>
      <h1>Total: {state}</h1>
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Incrementar</button>
    </div>
  );
}

export default App;
