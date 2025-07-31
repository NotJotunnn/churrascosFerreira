"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import menus from "@/store/menu";

import CTABtn from "../CTABtn";
import MenuPicker from "./components/MenuPicker";

import { PlansViewerType, usePlansViewerContext } from "@/hooks/plansviewer";

const MenuDetails = () => {
  const { setShowPlansViewer, setCurrentPlan } =
    usePlansViewerContext() as PlansViewerType;
  const [bgImage, setBgImage] = useState<StaticImageData>(
    menus[0].backgroundImage
  );
  const [isLeaving, setIsLeaving] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  const [rotationInterval, setRotationInterval] = useState<ReturnType<
    typeof setInterval
  > | null>(null);

  const rotateThroughSelections = useCallback(() => {
    if (selected === 2) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateThroughSelections();
    }, 20000);

    setRotationInterval(interval);

    return () => clearInterval(interval);
  }, [rotateThroughSelections]);

  useEffect(() => {
    setIsLeaving(true);

    const timeout = setTimeout(() => {
      setBgImage(menus[selected].backgroundImage);

      setIsLeaving(false);
    }, 400);

    return () => clearTimeout(timeout);
  }, [selected]);

  const handleClick = () => {
    if (rotationInterval) clearInterval(rotationInterval);

    setCurrentPlan(menus[selected].name.toLowerCase());
    setShowPlansViewer(true);
  };

  const handleClickPicker = (newSelection: number) => {
    if (rotationInterval) clearInterval(rotationInterval);
    setSelected(newSelection);
  };

  return (
    <div className="relative flex justify-center overflow-hidden min-h-[80vh] bg-[#333]">
      <MenuPicker selected={selected} handleClick={handleClickPicker} />

      <div className="w-full min-h-[80vh] bg-[#00000070] text-white flex flex-col justify-center items-center overflow-hidden text-justify gap-5 z-20 px-4 pt-[118px] py-12 backdrop-blur-sm">
        <h2 className="font-semibold text-4xl text-center">
          Cardápio {menus[selected]?.name}
        </h2>

        <p className="text-xl text-center max-w-[470px]">{menus[selected]?.description}</p>

        <CTABtn color="--accent" social="WhatsApp" />

        <button
          onClick={handleClick}
          className="text-white w-fit max-h-[41px] px-6 py-2 rounded-2xl flex justify-center items-center gap-2 hover:brightness-75 shadow-md shadow-[#00000070] hover:shadow-none transition-shadow duration-400 bg-black cursor-pointer"
        >
          Ver Cardápio
        </button>
      </div>

      <div className="absolute bottom-0 w-full h-[240px] lg:bg-gradient-to-t from-[#222] to-transparent z-30 pointer-events-none"></div>

      <Image
        className={`absolute w-full h-full z-10 object-cover ${
          isLeaving
            ? "animate-[vanish_400ms_ease-out_1_forwards]"
            : "animate-[showUp2_400ms_ease-out_1_forwards]"
        }`}
        src={bgImage}
        alt="Fundo"
        width={1100}
        height={800}
      />

      <div className="bg-[#00000070] absolute w-full h-full opacity-0">
        {menus.map((menu, index) => (
          <Image
            key={index}
            className="w-full h-full z-0 object-cover absolute"
            src={menu.backgroundImage}
            alt="Cache BG IMAGE"
            width={1100}
            height={800}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuDetails;
