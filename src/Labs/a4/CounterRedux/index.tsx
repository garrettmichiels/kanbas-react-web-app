import { useSelector } from "react-redux";
import {increment, decrement, reset} from "./counterReducer";
import { useDispatch } from "react-redux";

function CounterRedux() {
    const count = useSelector((store: any) => store.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>CounterRedux</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment(10))}>Increment</button>
            <button onClick={() => dispatch(decrement(20))}>Decrement</button>
            <button onClick={() => dispatch(reset(200))}>Reset</button>
        </div>
    );

}
export default CounterRedux;