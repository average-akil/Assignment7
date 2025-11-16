import React, { useState } from "react";
import PlayerCards from "./PlayerCards";
const NavBar = ({ view, setView, selectedPlayers = [] }) => {
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);

  return (
    <div className="flex justify-between pt-10">
      <div className="font-bold border border-slate-300/50 rounded-2xl  text-2xl">
        Available Players
      </div>
      <div className="border border-slate-300/50 ">
        <button
          onClick={() => {
            setClicked(true);
            setClicked1(false);
            setView("available");
          }}
          className={`p-2   ${clicked ? "bg-[#E7FE29]" : "bg-[#FFFFFF]"}`}
        >
          Available ()
        </button>
        <button
          onClick={() => {
            setClicked1(true);
            setClicked(false);
            setView("selected");
          }}
          className={`p-2   ${clicked1 ? "bg-[#E7FE29]" : "bg-[#FFFFFF]"}`}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>
    </div>
  );
};

export default NavBar;
