import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmmount } from "./counterSlice";
import { useState } from "react";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmout] = useState("2");
  return (
    <div className="card">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmout(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmmount(Number(amount)))}>
        Increment by {Number(amount)}
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <span> {count}</span>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Counter;
