"use client"

import { BsClockFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import data, { dataType } from "@/store/data";
import { usePathname } from "next/navigation";

const SuperHeader = () => {
  const { availableTime, phoneNumber, contactEmail }: dataType = data;

  const isMobile = usePathname().includes("linktree")

  return (
    <div
      className={`${
        isMobile ? "hidden" : "lg:flex hidden"
      } bg-[#222] text-white justify-center items-center w-screen`}
    >
      <ul className="flex gap-10 lg:max-w-[var(--content)] lg:w-[var(--content)] py-2">
        <li className="flex justify-center items-center gap-1 text-[14px]">
          <BsFillTelephoneFill />
          {phoneNumber}
        </li>
        <li className="flex justify-center items-center gap-1 text-[14px]">
          <BsClockFill />
          {availableTime.onWeek} / {availableTime.onWeekEnd}
        </li>
        <li className="ms-auto flex justify-center items-center gap-1 text-[14px]">
          <MdEmail />
          {contactEmail}
        </li>
      </ul>
    </div>
  );
};

export default SuperHeader;
