"use client";

import { usePathname } from "next/navigation";

const SubFooter = () => {
  const isMobile = usePathname().includes("linktree");
  return (
    <div
      className={`${
        isMobile ? "hidden" : "flex"
      } flex justify-center lg:py-[10px] py-[20px] bg-[#222]`}
    >
      <div className="lg:w-[1100px] text-background w-full md:px-4 flex flex-col gap-y-2 lg:flex-row justify-between items-center">
        <p className="text-sm">
          © 2024 Churrascos Ferreira. Todos direitos reservados.
        </p>
        <p className="text-sm">
          Site feito com amor por um{" "}
          <a
            className="underline text-accent brightness-200"
            href={"https://leandrodev.xyz/"}
            rel="external"
            target="_blank"
          >
            dev talentoso
          </a>
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
