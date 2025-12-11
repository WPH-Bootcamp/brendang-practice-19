import { CountContext } from "../contexts/CountContext";
import { useReducer } from "react";

interface CountProviderProps {
  children: React.ReactNode;
}

const CountReducer = (state: number, action: { type: string; payload?: number }) => {
  switch (action.type) {
    case "increment":
      return state + 1000;
    case "decrement":
      return state - 1000;
    case "set":
      return action.payload!;
    default:
      return state;
  }
};

const CountProvider: React.FC<CountProviderProps> = 
({ children }) => {
  const [state, dispatch] = useReducer(CountReducer, 0);
  return (
    <CountContext.Provider value={{ count: state, dispatchCount: dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
