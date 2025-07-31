"use client";

import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

import data, { dataType } from "@/store/data";
import { SidebarType, useSidebarContext } from "@/hooks/sidebar";

import { usePathname } from "next/navigation";

const Header = () => {
  const isMobile = usePathname().includes("linktree");

  const { socialLinks }: dataType = data;
  const { showSidebar, setShowSidebar } = useSidebarContext() as SidebarType;

  const handleClick = () => setShowSidebar((prev) => !prev);

  return (
    <header
      className={`${
        isMobile ? "hidden" : "flex"
      } ${showSidebar ? "show bg-linear-to-b from-[#333] to-[transparent] bg-transparent transition-colors duration-300 delay-300" : "sticky"} w-full top-[-1px] px-4 items-center justify-center py-2 bg-[#333] text-white z-50`}
    >
      <div className="lg:max-w-[1100px] lg:w-[1100px] w-full flex justify-between items-center h-full">
        <Link className={`transition-opacity duration-400`} href={"/"}>
          <Image
            className={`${showSidebar ? "opacity-0" : "opacity-100"} transition duration-300`}
            src="/Logo.svg"
            alt="logo do Churrascos Ferreira"
            width={60}
            height={55}
          />
        </Link>

        <nav className="lg:flex hidden gap-x-[45px] justify-center items-center">
          <ul className="flex gap-x-10">
            <li className="text-[22px] group relative hover:text-accent hover:brightness-125">
              <Link href="/">Início</Link>
              <div className="absolute bottom-0 left-0 group-hover:w-full w-0 h-[2px] transition-all duration-400 bg-accent"></div>
            </li>
            <li className="text-[22px] group relative hover:text-accent hover:brightness-125">
              <Link href={"/sobrenos"}>Sobre</Link>
              <div className="absolute bottom-0 left-0 group-hover:w-full w-0 h-[2px] transition-all duration-400 bg-accent"></div>
            </li>
            <li className="text-[22px] group relative hover:text-accent hover:brightness-125">
              <Link href={"/galeria"}>Galeria</Link>
              <div className="absolute bottom-0 left-0 group-hover:w-full w-0 h-[2px] transition-all duration-400 bg-accent"></div>
            </li>
            <li className="text-[22px] group relative hover:text-accent hover:brightness-125">
              <Link href={"/servicos"}>Serviços</Link>
              <div className="absolute bottom-0 left-0 group-hover:w-full w-0 h-[2px] transition-all duration-400 bg-accent"></div>
            </li>
          </ul>

          <ul className="flex gap-x-[10px]">
            <li className="cursor-pointer">
              <Link href={socialLinks.facebook} rel="external" target="_blank">
                <FaFacebook className="hover:text-[#0866ff] transition-colors duration-400 w-[18px] h-[18px]" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={socialLinks.instagram} rel="external" target="_blank">
                <FaInstagram className="hover:text-[#d54370] transition-colors duration-400 w-[18px] h-[18px]" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={socialLinks.whatsapp} rel="external" target="_blank">
                <FaWhatsapp className="hover:text-[#2ab540] transition-colors duration-400 w-[18px] h-[18px]" />
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={handleClick} className={`block lg:hidden transition duration-300 ${showSidebar ? "rotate-90" : ""}`}>
          <IoMenu
            className={`${showSidebar ? "hidden" : "block"} w-[40px] h-[30px]`}
          />
          <IoClose
            className={`${showSidebar ? "block" : "hidden"} w-[40px] h-[30px]`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
