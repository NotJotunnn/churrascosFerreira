"use client"

import Image from "next/image";
import Link from "next/link";

import data, { dataType } from "@/store/data";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsClockFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";

const Footer = () => {
  const { availableTime, contactEmail, phoneNumber, socialLinks }: dataType =
    data;

  const isMobile = usePathname().includes("linktree")

  return (
    <footer
      className={`${
        isMobile ? "hidden" : "lg:flex hidden"
      } bg-[#333] text-background py-6 justify-center items-center px-4`}
    >
      <div className="flex lg:w-[1100px] md:w-full justify-between">
        <Link href="/">
          <Image src="/Logo.svg" alt="Logo" width={115} height={100} />
        </Link>

        <div>
          <h3 className="text-lg font-bold mb-[10px]">Navegação</h3>
          <ul className="flex flex-col gap-y-[10px]">
            <li className="text-[14px] cursor-pointer">
              <Link href={"/"}>Início</Link>
            </li>
            <li className="text-[14px] cursor-pointer">
              <Link href={"/sobrenos"}>Sobre</Link>
            </li>
            <li className="text-[14px] cursor-pointer">
              <Link href={"/galeria"}>Galeria</Link>
            </li>
            <li className="text-[14px] cursor-pointer">
              <Link href={"/servicos"}>Serviços</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-[10px]">Contato</h3>
          <ul className="flex flex-col gap-y-[10px]">
            <li className="flex justify-left gap-x-[5px] items-center text-[14px]">
              <BsFillTelephoneFill />
              {phoneNumber}
            </li>
            <li className="flex justify-left gap-x-[5px] items-center text-[14px]">
              <MdEmail />
              {contactEmail}
            </li>
            <li className="flex justify-left gap-x-[5px] items-center text-[14px]">
              <BsClockFill />
              {availableTime.onWeek}
            </li>
            <li className="flex justify-left gap-x-[5px] items-center text-[14px]">
              <BsClockFill />
              {availableTime.onWeekEnd}
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-[10px]">
          <h3 className="text-lg font-bold">Sobre nós</h3>
          <p className="text-[12px] w-[235px] text-opacity-50 text-[#ececec] opacity-50">
            Nossa empresa familiar é dedicada a oferecer o melhor do churrasco.
            Com uma paixão que atravessa gerações, combinamos tradição, sabor e
            qualidade em cada detalhe do nosso serviço.
          </p>

          <ul className="flex gap-x-[10px]">
            <li className="cursor-pointer">
              <Link href={socialLinks.facebook} rel="external" target="_blank">
                <FaFacebook className="hover:text-[#0866ff] transition-colors duration-400" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={socialLinks.instagram} rel="external" target="_blank">
                <FaInstagram className="hover:text-[#d54370] transition-colors duration-400" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href={socialLinks.whatsapp} rel="external" target="_blank">
                <FaWhatsapp className="hover:text-[#2ab540] transition-colors duration-400" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
