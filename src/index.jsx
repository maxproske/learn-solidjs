/* @refresh reload */
import { render } from 'solid-js/web';
import { createSignal, createEffect } from "solid-js";

const Counter = () => {
    const [count, setCount] = createSignal(0);

    // The effect automatically subscribes to any signal that 
    // is read during the function's execution and reruns when 
    // any of them change.
    createEffect(() => {
        console.log("The count is now", count());
    });

    return (
        <div>
            <div>Count: {count()}</div>
            <button onClick={() => setCount(count() + 1)}>Click Me</button>
        </div>
    )
}

const MyComponent = () => {
  return <div>
      <h1>Learn Solid.js</h1>
      <Counter />
    </div>
}

render(() => <MyComponent />, document.getElementById('root'))
