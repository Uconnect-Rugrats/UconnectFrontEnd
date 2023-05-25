import React from "react";
import LeftSidebar from "./leftSidebar/LeftSidebar";
import MainContent from "./mainContent/MainContent";
import RightSidebar from "./RightSidebar/RightSidebar";

const Contain = () => {
  return (
    <div className="flex">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
};

export default Contain;
