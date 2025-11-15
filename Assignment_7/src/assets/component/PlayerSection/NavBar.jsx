import React, { useState } from "react";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);

  return (
    <div className="flex justify-between">
      <div className="font-bold text-2xl">Available Players</div>
      <div className="border border-slate-300/50 p-4 space-x-1">
        <button
          onClick={() => {
            setClicked(true);
            setClicked1(false);
          }}
          className={`p-2 rounded-xl border-2 ${
            clicked ? "bg-[#E7FE29]" : "bg-[#FFFFFF]"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => {
            setClicked1(true);
            setClicked(false);
          }}
          className={`p-2 rounded-xl border-2 ${
            clicked1 ? "bg-[#E7FE29]" : "bg-[#FFFFFF]"
          }`}
        >
          Selected
        </button>
      </div>
    </div>
  );
};

export default NavBar;
