import { FaMicrophoneSlash } from "react-icons/fa";
import { BsSoundwave } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { LuScreenShare } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const videoIcons = [
  <IoVideocamOutline />,
  <FaMicrophone />,
  <LuScreenShare />,
  <IoChatboxEllipsesOutline />,
];

const SubSidebar = () => {
  return (
    <div className="w-1/5 p-6">
      <div className="relative rounded shadow-md">
        <img
          src="https://www.oxfordlearning.com/wp-content/uploads/2016/09/AdobeStock_47186368.jpeg"
          alt="kid"
          className="rounded"
        />
        <div className="absolute top-4 right-4 bg-[#e2dcef] p-2 rounded-full shadow-md">
          <FaMicrophoneSlash />
        </div>
        <p className="absolute bottom-0 font-semibold text-[#7f64ba]  bg-[#e2dcef] px-2 py-1 rounded-sm">
          Ridha
        </p>
      </div>
      <div className="relative mt-6 rounded shadow-md">
        <img
          src="https://as2.ftcdn.net/v2/jpg/03/67/42/13/1000_F_367421357_jVuu12kLzs9tOLtGCkeBMeWgvIvK3l9c.jpg"
          alt="kid"
          className="rounded"
        />
        <div className="absolute top-4 right-4 bg-[#e2dcef] p-2 rounded-full shadow-md">
          <BsSoundwave />
        </div>
        <p className="absolute bottom-0 font-semibold text-[#7f64ba]  bg-[#e2dcef] px-2 py-1 rounded-sm">
          Ms. Kaur
        </p>
      </div>
      <ul className="flex justify-around gap-2 items-center my-4 ">
        {videoIcons?.map((videoIcon, index) => (
          <li key={index} className="p-2 bg-[#e2dcef] rounded shadow-md">
            {videoIcon}
          </li>
        ))}
      </ul>
      <button className="text-center bg-red-400 text-white px-4 py-1 rounded mx-auto w-full shadow-md">
        Leave
      </button>
    </div>
  );
};

export default SubSidebar;
