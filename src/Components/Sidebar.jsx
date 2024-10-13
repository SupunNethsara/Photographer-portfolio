import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FaTools, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Css/Sidebar.css'
const Sidebar = () => {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "About", link: "/about", icon: AiOutlineUser },
    { name: "Services", link: "/services", icon: FaTools },
    { name: "Portfolio", link: "/portfolio", icon: FaProjectDiagram },
    { name: "Contact", link: "/Contact", icon: TbReportAnalytics, margin: true },
  ];

  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div
      className={`bg-[#141414] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end ">
        <HiMenuAlt3 
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="icons-sec mt-40 flex flex-col gap-6 relative">
        {menus.map((menu, i) => (
          <Link
            to={menu.link}
            key={i}
            className={`${
              menu.margin && "mt-5"
            } group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md 
            ${
              activeMenu === menu.name
                ? "bg-[#1E90FF] text-white"
                : "hover:bg-gray-800 text-gray-100"
            }`}
            onClick={() => setActiveMenu(menu.name)}
          >
            <div>
              {React.createElement(menu.icon, {
                 // Default icon size
                className: `sidebar-icon ${activeMenu === menu.name ? 'active-icon' : ''}`, // Add class for further adjustments
              })}
            </div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
