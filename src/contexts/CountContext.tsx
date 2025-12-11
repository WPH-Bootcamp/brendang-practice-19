import { createContext } from "react";

export type CountContextType = {
  count: number;
  dispatchCount: React.Dispatch<{ type: string; payload?: number }>;
};

export const CountContext = 
createContext<CountContextType | undefined>(undefined);