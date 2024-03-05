import "./styles.css";
import React, { useState, useEffect, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const color = "red";
  const countFun = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };
  useEffect(() => {
    countFun();
  }, [count]);
  const colorchange = useMemo(() => {
    return count % 2 == 0 ? { color: "green" } : { color: "red" };
  }, [count]);

  return (
    <div className="App">
      <h1>count </h1>
      <h1 style={colorchange}> {count}</h1>
    </div>
  );
}
