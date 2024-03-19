import { useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset} from "./counterReducer";
import { LabState } from "../../store";

function CounterRedux() {
    const { count } = useSelector((state: LabState) => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>CounterRedux</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment(10))}>Increment</button>
            <button onClick={() => dispatch(decrement(20))}>Decrement</button>
            <button onClick={() => dispatch(reset(0))}>Reset</button>
        </div>
    );

}
export default CounterRedux;