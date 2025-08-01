"use client";

import data, { dataType } from "@/store/data";
import Link from "next/link";
import { ReactNode, useEffect, useRef } from "react";

type HeroProps = {
  CTA?: boolean;
  text: ReactNode;
};

const Hero = ({ CTA = false, text }: HeroProps) => {
  const ref = useRef<null | HTMLVideoElement>(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      if (!ref || !ref.current) return;

      ref.current.pause();
      ref.current.play();
    });
  }, []);

  const { socialLinks }: dataType = data;
  return (
    <div
      className={`${
        CTA ? "h-[80vh]" : "h-[360px]"
      } max-h-[800px] overflow-hidden flex justify-center items-center text-center relative`}
    >
      <div className="lg:max-w-content lg:w-content flex flex-col justify-center items-center gap-y-12 z-10 px-4">
        <h1 className="text-5xl font-bold text-white">{text}</h1>
        {CTA && (
          <Link href={socialLinks.whatsapp} rel="external" target="_blank">
            <button className="bg-accent rounded-2xl py-2 px-[70px] text-white text-lg hover:bg-accent2 transition duration-400 cursor-pointer">
              Veja mais
            </button>
          </Link>
        )}
      </div>

      <div className="flex justify-center items-center w-full h-full absolute top-0 left-0 z-0">
        <div>
          <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[1100px] h-full bg-black opacity-50 backdrop-blur z-20"></div>
          <video
            src="/backgroundIntro.mp4"
            autoPlay={true}
            loop={true}
            className="pointer-events-none md:w-[1100px] h-screen shadow-[0_4px_15px_rgba(0,0,0,.5)]"
            muted
            playsInline
            disablePictureInPicture
            ref={ref}
          ></video>
        </div>
      </div>

      <div className="absolute top-0 w-full h-full z-[-1] bg-accent3 inset-shadow-[0_4px_15px_rgba(0,0,0,.5)]">
        <div className="bg-[url(/Logo-grid.png)] bg-size-[auto_150px] w-full h-full opacity-20"></div>
      </div>
    </div>
  );
};

export default Hero;
