import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import data, { dataType } from "@/store/data";

type CTABtnType = {
  social: "WhatsApp" | "Instagram",
  color: string
}

const CTABtn = ({ social, color }: CTABtnType) => {
  const { socialLinks }: dataType = data;

  return (
    <Link
      href={social == "WhatsApp" ? socialLinks.whatsapp : socialLinks.instagram}
      rel="external"
      target="_blank"
    >
      <button
        className="text-white w-fit max-h-[41px] px-6 py-2 rounded-2xl flex justify-center items-center gap-2 hover:brightness-75 shadow-md shadow-[#00000070] hover:shadow-none transition-shadow duration-400 cursor-pointer"
        style={{
          backgroundColor: color.startsWith("--") ? `var(${color})` : "black",
        }}
      >
        {social == "WhatsApp" && (
          <>
            <FaWhatsapp />
            Entre em contato!
          </>
        )}
        {social == "Instagram" && (
          <>
            <FaInstagram />
            Acessar Instagram!
          </>
        )}
      </button>
    </Link>
  );
};

export default CTABtn;
