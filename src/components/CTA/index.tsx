import { ReactNode } from "react";
import CTABtn from "../CTABtn";

type CTAType = {
  background: string;
  social: "Instagram" | "WhatsApp";
  children: ReactNode;
};

const CTA = ({
  background = "--accent3",
  social = "WhatsApp",
  children,
}: CTAType) => {
  return (
    <div
      className={`py-10 flex justify-center items-center text-center px-4`}
      style={{
        backgroundColor: background.startsWith("--")
          ? `var(${background})`
          : "var(--accent3)",
        color:
          background == "--accent2" || background == "--accent"
            ? "white"
            : "black",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 lg:max-w-[1100px] lg:w-[1100px]">
        <div className="lg:text-left">
          <h2 className="text-4xl font-semibold max-w-[500px]">{children}</h2>
        </div>
        <CTABtn
          social={social}
          color={`${
            background == "--accent" || background == "--accent2"
              ? "black"
              : "--accent"
          }`}
        />
      </div>
    </div>
  );
};

export default CTA;
