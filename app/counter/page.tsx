import React from "react";

const Counter = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-2xl text-amber-600">Licznik</h1>
      <h2 className="text-[3rem]">67</h2>
      <div className="flex gap-2">
        <button className="border border-amber-600 rounded-md px-4 py-2 hover:bg-amber-500 hover:cursor-pointer">
          + 1
        </button>
        <button className="border border-amber-600 rounded-md px-4 py-2 hover:bg-amber-500 hover:cursor-pointer">
          - 1
        </button>
      </div>
    </div>
  );
};

export default Counter;
