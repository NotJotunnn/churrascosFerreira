import Image from "next/image";
import Link from "next/link";

import data, { dataType } from "@/store/data";
import { BsClockFill } from "react-icons/bs";

const LinkTree = () => {
  const { availableTime, socialLinks }: dataType = data;

  return (
    <div className="w-full h-[100dvh] text-white flex-col justify-center items-center flex relative overflow-hidden">
      <div className="py-20 w-full h-full flex flex-col justify-between items-center z-10 animate-showUp">
        <Link href={"/"}>
          <Image src="/Logo.svg" width={115} height={100} alt="Logo" />
        </Link>
        <div className="flex flex-col justify-center items-center gap-6">
          <Link href={socialLinks.whatsapp} rel="external">
            <button className="bg-accent hover:brightness-75 py-2 px-6 rounded-lg">
              WhatsApp - Contato
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-accent hover:brightness-75 py-2 px-6 rounded-lg">
              Website - Apresentação
            </button>
          </Link>
          <Link href={socialLinks.instagram} rel="external">
            <button className="bg-accent hover:brightness-75 py-2 px-6 rounded-lg">
              Instagram - Informativos
            </button>
          </Link>
          <Link href={socialLinks.facebook} rel="external">
            <button className="bg-accent hover:brightness-75 py-2 px-6 rounded-lg">
              Facebook - Informativos
            </button>
          </Link>
        </div>
        <div className="flex flex-col text-center items-center justify-center gap-2">
          <BsClockFill className="w-[22px] h-[22px]" />
          <p>{availableTime.onWeek}</p>
          <p>{availableTime.onWeekEnd}</p>
        </div>
      </div>

      <video
        src="/backgroundIntro.mp4"
        autoPlay={true}
        loop={true}
        className="absolute bottom-0 left-1/2 translate-x-[-50%] lg:translate-x-0 lg:left-0 pointer-events-none md:w-screen max-w-[unset] h-full shadow-[0_4px_15px_rgba(0,0,0,.5)] brightness-[70%]"
        muted
        playsInline
        disablePictureInPicture
      ></video>

      <div className="absolute top-0 w-full h-full z-[-1] bg-accent3 inset-shadow-[0_4px_15px_rgba(0,0,0,.5)]">
        <div className="bg-[url(/Logo-grid.png)] bg-size-[auto_150px] w-full h-full opacity-20"></div>
      </div>
    </div>
  );
};

export default LinkTree;
