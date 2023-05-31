import React from "react";
import Navbar from "./Navbar";
import Contain from "./Contain";
import UserIcon from "../images/icon_uconnect.jpg";

const HomeContain = () => {
  return (
    <div className="bg-slate-100">
      <Navbar userIcon={UserIcon} />
      <div className="flex px-10 py-4">
        <Contain />
      </div>
    </div>
  );
};

export default HomeContain;
