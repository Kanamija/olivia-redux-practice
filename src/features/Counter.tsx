import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./slice";

function Counter() {
  const count = useSelector((state: any) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br></br>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br></br>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
       <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br></br>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br></br>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Counter;
