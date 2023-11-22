import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegBell } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";

const sidebarItems = [
  {
    name: "Hamburger",
    icon: <RxHamburgerMenu />,
  },
  {
    name: "Bell",
    icon: <FaRegBell />,
  },
  {
    name: "Clock",
    icon: <FaRegClock />,
  },
  {
    name: "List",
    icon: <BiNotepad />,
  },
  {
    name: "Eye",
    icon: <FaRegEye />,
  },
  {
    name: "People",
    icon: <IoMdPeople />,
  },
  {
    name: "Graph",
    icon: <VscGraph />,
  },
];

const Sidebar = () => {
  return (
    <div className="w-20 h-screen border text-center  bg-[#e2dcef]">
      <p className="my-5 text-2xl font-semibold text-[#594091]">W</p>
      <ul className="flex flex-col justify-center items-center gap-4">
        {sidebarItems?.map((sidebarItem, index) => (
          <li
            key={index}
            className="sidebar w-12 h-12 flex justify-center items-center "
          >
            {sidebarItem.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
