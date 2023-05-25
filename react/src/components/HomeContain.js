import React from "react";
import Navbar from "./Navbar";
import Contain from "./Contain";

const HomeContain = () => {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="flex px-10 py-4">
        <Contain />
      </div>
    </div>
  );
};

export default HomeContain;
