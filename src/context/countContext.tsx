import { createContext, useContext, useState, ReactNode } from "react";

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextProps | undefined>(undefined);

export function CountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  const contextValue: CountContextProps = {
    count,
    increment,
    decrement,
  };

  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}
