"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function addNumber() {
    setCount(count + 1);
  }

  function subtractNumber() {
    setCount(count - 1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-2xl text-amber-600">Licznik</h1>
      <h2 className="text-[3rem]">{count}</h2>
      <div className="flex gap-2">
        <button
          className="border border-amber-600 rounded-md px-4 py-2 hover:bg-amber-500 hover:cursor-pointer"
          onClick={addNumber}
        >
          + 1
        </button>
        <button
          className="border border-amber-600 rounded-md px-4 py-2 hover:bg-amber-500 hover:cursor-pointer"
          onClick={subtractNumber}
        >
          - 1
        </button>
      </div>
    </div>
  );
};

export default Counter;
