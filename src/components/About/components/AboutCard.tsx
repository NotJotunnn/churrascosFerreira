import CTABtn from "@/components/CTABtn";
import Image from "next/image";
import React from "react";

type AboutCardType = {
  children: React.ReactNode;
  image: string;
  title: string;
};

const AboutCard = ({ children, image, title }: AboutCardType) => {
  return (
    <div
      className={`lg:flex-row lg:nth-[1]:flex-row-reverse flex flex-col w-full items-center justify-center text-center lg:text-left gap-10 px-4`}
    >
      <Image
        className="mb-3 w-full lg:w-[510px] md:w-[415px]"
        src={image}
        width={630}
        height={400}
        alt="Colagem"
      />
      <div className="max-w-[510px] gap-3 flex flex-col items-center lg:items-start">
        <h2 className="text-4xl font-semibold mb-3">{title}</h2>
        <div className="flex flex-col gap-2 text-[16px] mb-[72px]">{children}</div>
        <CTABtn social="WhatsApp" color="black" />
      </div>
    </div>
  );
};

export default AboutCard;
