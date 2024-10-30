import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { FaTools, FaProjectDiagram, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import './Css/Sidebar.css';

const Sidebar = () => {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "About", link: "/about", icon: AiOutlineUser },
    { name: "Services", link: "/services", icon: FaTools },
    { name: "Portfolio", link: "/portfolio", icon: FaProjectDiagram },
    { name: "Contact", link: "/contact", icon: TbReportAnalytics, margin: true },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    const savedActiveMenu = localStorage.getItem("activeMenu");
    if (savedActiveMenu) {
      setActiveMenu(savedActiveMenu);
    }
  }, []);

  const handleMenuClick = (menuName, path) => {
    setActiveMenu(menuName);
    localStorage.setItem("activeMenu", menuName);
    setBackdropOpen(true);

    setTimeout(() => {
      setBackdropOpen(false);
      navigate(path);
    }, 1000);
  };

  return (
    <div className={`bg-[#050c18] min-h-screen flex flex-col justify-between ${sidebarOpen ? "w-72" : "w-16"} duration-500 text-gray-100 px-4`}>

      <Backdrop sx={{ color: '#fff', zIndex: 1300 }} open={backdropOpen}>
        <CircularProgress
          sx={{
            color: '#00BFFF',
            thickness: 6,
            size: 80,
            animationDuration: '1.5s',
          }}
        />
      </Backdrop>

      <div>
        <div className="py-3 flex justify-end ">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
        </div>

        <div className={`logos flex justify-center items-center mt-1 transition-all duration-500 ${!sidebarOpen && 'opacity-0'}`}>
          <img
            src="logo-sashi.png"
            alt="Logo"
            className={`rounded-full transition-all duration-500 ${sidebarOpen ? "w-24 h-24" : "w-0 h-0"}`}
          />
        </div>

        <div className="icons-sec mt-36 flex flex-col gap-8 relative">
          {menus.map((menu, i) => (
            <button
              key={i}
              className={`${menu.margin && "mt-5"} group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md 
                ${activeMenu === menu.name
                  ? "bg-[#1E90FF] text-white"
                  : "hover:bg-gray-800 text-gray-100"
                }`}
              onClick={() => handleMenuClick(menu.name, menu.link)}
            >
              <div>
                {React.createElement(menu.icon, {
                  className: `sidebar-icon ${activeMenu === menu.name ? 'active-icon' : ''}`,
                })}
              </div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${!sidebarOpen && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${sidebarOpen && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </button>
          ))}
        </div>
      </div>

      {/* Contact Icons Section at Bottom */}
      <div className="contact-icons pb-4 flex flex-col items-center gap-4">
        <a href="https://wa.me/+94714677205" target="_blank" rel="noopener noreferrer" className="text-gray-300 opacity-45 hover:text-green-500 text-left text-sm flex items-center gap-2">
          <AiOutlineWhatsApp size={14} />
          {sidebarOpen && <span className="opacity-80 text-xs ">+94714677205</span>}
        </a>
        <a href="mailto:Shashimalliyanage665@gmail.com" className="text-gray-300 hover:text-red-500  opacity-45 text-left text-sm flex items-center gap-2">
          <AiOutlineMail size={14} />
          {sidebarOpen && <span className=" opacity-80 text-xs  ">Shashimalliyanage665@gmail.com</span>}
        </a>
        <a href="https://www.facebook.com/profile.php?id=100013988086956" target="_blank" rel="noopener noreferrer" className="text-gray-300  opacity-45 hover:text-blue-500 text-left text-sm flex items-center gap-2">
          <FaFacebook size={14} />
          {sidebarOpen && <span className=" opacity-80 text-xs  ">Shashimal Liyanage</span>}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
