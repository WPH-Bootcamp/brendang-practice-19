import Child from "./Child";
import { CountContext } from "../contexts/CountContext";
import { useContext, useEffect, useRef } from "react";
import useDarkTheme from "../store/useDarkTheme";

const Parent = () => {
  const { count, dispatchCount } = useContext(CountContext)!;
  const inputRef = useRef<HTMLInputElement>(null);
  const darkTheme = useDarkTheme((state) => state.darkTheme);
  const updateDarkTheme = useDarkTheme((state) => state.updateDarkTheme);

  // Mounting
  useEffect(() => {}, []);

  // Updating
  useEffect(() => {}, [count]);

  // Unmounting
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div style={{ backgroundColor: "red", width: "700px", height: "700px" }}>
      <h2>Parent Component</h2>
      <button onClick={() => dispatchCount({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatchCount({ type: "decrement" })}>
        Decrement
      </button>
      <br />
      <input type="text" ref={inputRef} />
      <button
        onClick={() =>
          dispatchCount({
            type: "set",
            payload: Number(inputRef.current?.value),
          })
        }
      >
        Set
      </button>
      <br />
      <button
        onClick={() => updateDarkTheme(!darkTheme)}
        style={{
          backgroundColor: darkTheme ? "black" : "white",
          color: darkTheme ? "white" : "black",
        }}
      >
        Dark Mode
      </button>
      <Child />
    </div>
  );
};

export default Parent;
