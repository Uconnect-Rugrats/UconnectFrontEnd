import React from "react";
import LatestNews from "../../images/news.png";
import Friends from "../../images/friends.png";
import Group from "../../images/group.png";
import Watch from "../../images/watch.png";
import Shortcut1 from "../../images/shortcut-1.png";
import Shortcut3 from "../../images/shortcut-3.png";
import Shortcut4 from "../../images/shortcut-4.png";

const LeftSidebar = () => {
  return (
    <div className=" p-2 left-sidebar flex flex-col justify-between h-full w-2/4">
      <div className>
        <a href="#">
          <img src={LatestNews} /> Latest News
        </a>
        <a href="#">
          <img src={Friends} /> Friends
        </a>
        <a href="#">
          <img src={Group} /> Group
        </a>
        <a href="#">
          <img src={Watch} /> Watch
        </a>
        <a href="#">See More</a>
      </div>
      <div className="shortcut-links mt-6">
        <p>Your Shortcuts</p>
        <a href="#">
          <img src={Shortcut1} /> Web Developers
        </a>
        <a href="#">
          <img src={Shortcut3} /> Full Stack Development
        </a>
        <a href="#">
          <img src={Shortcut4} /> Website Experts
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
