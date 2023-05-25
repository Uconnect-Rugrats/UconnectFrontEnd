import React from "react";
import Logo from "../images/Logo nombreWhite.png";
import Notification from "../images/notification.png";
import Inbox from "../images/inbox.png";
import Video from "../images/video.png";
import UserIcon from "../images/icon_uconnect.jpg";
import Search from "../images/search.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-800 px-5 py-1.5 sticky top-0 z-10">
      <div className="nav-left flex items-center">
        <img src={Logo} className="w-32 ml-20" alt="Logo" />
        <ul className="flex items-center space-x-8">
          <li className="ml-4">
            <img src={Notification} className="w-7" alt="Notification" />
          </li>
          <li>
            <img src={Inbox} className="w-7" alt="Inbox" />
          </li>
          <li>
            <img src={Video} className="w-7" alt="Video" />
          </li>
        </ul>
      </div>
      <div className="nav-right flex items-center">
      <div className="search-box bg-slate-100 rounded-full w-96 flex items-center px-4 py-0">
          <img src={Search} className="w-4" alt="Search" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent py-2 px-2 outline-none border-0"
          />
        </div>
        <div className="nav-user-icon ml-8 mr-12">
          <img src={UserIcon} className="w-10 rounded-full" alt="User" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
