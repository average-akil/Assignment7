import React, { useState } from "react";
import Header from "../Header/Header";
const Hero = ({ setBalance }) => {
  const [click3, setClick3] = useState(0);
  return (
    <div className="   bg-[url(../../../../assets/bg-shadow.png)] max-h-fullmax-w-full flex items-center justify-center flex-col gap-4 rounded-xl pt-5">
      <img src="../../../../assets/banner-main.png" alt="" />

      <h1 className="text-4xl text-slate-800">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      <h2 className="text-2xl text-slate-300">
        {" "}
        Beyond Boundaries Beyond Limits
      </h2>

      <button
        className="text-black bg-yellow-300 text-center p-2 border-4 border-black rounded-xl "
        onClick={() => {
          setBalance(5000);
          setClick3(1);
        }}
        disabled = {click3}
      >
        Claim Free Credit
      </button>
    </div>
  );
};

export default Hero;
