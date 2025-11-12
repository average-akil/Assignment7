import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[url(../../../../../assets/bg-shadow.png)] flex justify-center items-center flex-col gap-4 border-24 border-transparent rounded-2xl">
      <h1 className="text-2xl text-black font-bold"> Subscribe to our Newsletter</h1>
      <h2 className="text-slate-300">
        Get the latest updates and news right in your inbox!
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto bg-white rounded-2xl text-slate-400 ">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 border-1"
        />
        <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-2xl hover:opacity-90 space-x-2">
          Subscribe 
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
