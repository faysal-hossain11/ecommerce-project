import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CommonButton = ({ icon, text }) => {
  return (
    <button className=" py-[10px] text-xl px-16 bg-green-500 font-semibold text-white rounded-sm flex items-center gap-2 hover:bg-yellow-400 transition duration-200  ">
      {text} {icon}
    </button>
  );
};

export default CommonButton;
