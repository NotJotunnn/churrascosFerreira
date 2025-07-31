"use client"

import { ReactNode, useState } from "react";

import { FaCaretDown } from "react-icons/fa";

type FAQCardType = { title: string; children: ReactNode };

const FAQCard = ({ title = "Carregando", children }: FAQCardType) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((prev) => !prev);

  return (
    <label className="max-w-[800px] w-[90vw] flex flex-col relative bg-[#333] rounded-lg overflow-hidden text-black">
      <h3 className="font-semibold px-4 py-5 flex gap-2 justify-between items-center cursor-pointer bg-background rounded-lg">
        {title}
        <FaCaretDown className={`${isActive ? "" : "rotate-180"} transition duration-300`}/>
      </h3>

      <input
        className="peer w-0 h-0"
        type="checkbox"
        onClick={handleClick}
        onChange={() => setIsActive(!isActive)}
      />

      <div
        className={`text-sm px-4 overflow-hidden transition-max-height duration-700 ${
          isActive ? "max-h-screen py-2" : "max-h-0 py-0"
        } text-white`}
      >
        {children}
      </div>
    </label>
  );
};

export default FAQCard;
