import { IoIosArrowBack } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { FaChalkboard } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { RiSlideshowLine } from "react-icons/ri";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";

const navItems = [
  {
    name: "Classroom",
    icon: <SiGoogleclassroom />,
  },
  {
    name: "Whiteboard",
    icon: <FaChalkboard />,
  },
  {
    name: "Videos",
    icon: <MdOndemandVideo />,
  },
  {
    name: "Slideshow",
    icon: <RiSlideshowLine />,
  },
  {
    name: "Documents",
    icon: <IoDocumentsSharp />,
  },
  {
    name: "Doc.cam",
    icon: <FaCameraRetro />,
  },
];

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="w-full flex justify-between items-center p-6 font-medium shadow-md">
        <div className="flex justify-center items-center gap-5 text-2xl">
          <div className=" bg-[#e2dcef] p-1 rounded-full">
            <IoIosArrowBack className="p-1" />
          </div>
          <p className="text-slate-600">Basic Mathematics 101</p>
        </div>
        <div className="flex justify-center items-center gap-5 text-slate-600">
          <div className=" bg-[#e2dcef] p-2 rounded-full">
            <TbPhoneCall className="" />
          </div>
          <p>Call Teacher</p>
          <div className=" bg-[#e2dcef] p-2 rounded-full">
            <MdOutlineSupportAgent className="" />
          </div>
          <p>Support</p>
        </div>
      </div>
      <div className="w-full border-b-2 shadow-sm">
        <ul className="flex justify-around items-center">
          {navItems?.map((navItem) => (
            <li
              className={
                "flex justify-center gap-2 items-center p-5 font-semibold cursor-pointer " +
                (navItem.name === "Videos"
                  ? " font-semibold text-[#7f64ba] border-b-[3px] border-b-[#7f64ba] "
                  : " font-semibold text-slate-600 ")
              }
            >
              {navItem.icon} {navItem.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
