"use client";

import { SidebarType, useSidebarContext } from "@/hooks/sidebar";
import data, { dataType } from "@/store/data";

import Image from "next/image";
import Link from "next/link";

import { BsClockFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Sidebar = () => {
  const { availableTime, socialLinks }: dataType = data;
  const { showSidebar, setShowSidebar } = useSidebarContext() as SidebarType;

  const handleClick = () => setShowSidebar((prev) => !prev);

  return (
    <div
      className={`flex ${
        showSidebar ? "animate-slideFromRight" : "translate-x-[100vw]"
      } text-white transition-transform duration-400 flex-col items-center fixed top-0 left-0 w-screen min-h-screen gap-[40px] overflow-auto h-[100dvh] py-12 z-40 bg-[#333] lg:hidden`}
    >
      <Link onClick={handleClick} href={"/"}>
        <Image
          className="w-36"
          src="/Logo.svg"
          width={115}
          height={100}
          alt="Logo"
        />
      </Link>

      <nav className="flex flex-col gap-[100px] justify-center items-center">
        <ul className="flex flex-col justify-center items-center gap-4">
          <li className="text-[38px]">
            <Link onClick={handleClick} href={"/"}>
              Início
            </Link>
          </li>
          <li className="text-[38px]">
            <Link onClick={handleClick} href={"/sobrenos"}>
              Sobre
            </Link>
          </li>
          <li className="text-[38px]">
            <Link onClick={handleClick} href={"/galeria"}>
              Galeria
            </Link>
          </li>
          <li className="text-[38px]">
            <Link onClick={handleClick} href={"/servicos"}>
              Serviços
            </Link>
          </li>
        </ul>

        <ul className="flex gap-x-8">
          <li className="cursor-pointer">
            <Link href={socialLinks.facebook} rel="external" target="_blank">
              <FaFacebook className="w-[45px] h-[45px]  hover:text-[#0866ff] transition-colors duration-400" />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={socialLinks.instagram} rel="external" target="_blank">
              <FaInstagram className="w-[45px] h-[45px]  hover:text-[#d54370] transition-colors duration-400" />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={socialLinks.whatsapp} rel="external" target="_blank">
              <FaWhatsapp className="w-[45px] h-[45px] hover:text-[#2ab540] transition-colors duration-400" />
            </Link>
          </li>
        </ul>
      </nav>

      <h2 className="flex flex-col justify-center items-center gap-[10px] text-[14px]">
        <BsClockFill className="w-[22px] h-[22px]" />
        {availableTime.onWeek}
        <br />
        {availableTime.onWeekEnd}
      </h2>
    </div>
  );
};

export default Sidebar;
