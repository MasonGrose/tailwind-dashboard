import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-gray-800 text-red-500 hover:bg-teal-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer group">
    {icon}

    <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
      {text}
    </span>
  </div>
);

export default SideBar;
