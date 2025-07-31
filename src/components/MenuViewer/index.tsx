"use client";

import { useEffect, useMemo, useState } from "react";

import TypesView from "./components/TypesView";

import { cardapios } from "@/store/cardapios";
import { PlansViewerType, usePlansViewerContext } from "@/hooks/plansviewer";

import Image from "next/image";
import menus from "@/store/menu";

const MenuViewer = () => {
  const { setShowPlansViewer, showPlansViewer, currentPlan } =
    usePlansViewerContext() as PlansViewerType;
  const [visibility, setVisibility] = useState(false);

  // Staggered animation
  useEffect(() => {
    if (showPlansViewer) setVisibility(true);
    else {
      setTimeout(() => {
        setVisibility(false);
      }, 400);
    }
  }, [showPlansViewer]);

  const types = useMemo(
    () => [
      ...new Set(
        cardapios
          .filter((data) => data.Cardápio.includes(currentPlan))
          .map((cardapio) => cardapio.Tipo)
      ),
    ],
    [currentPlan]
  );

  return (
    <div
      className={`${
        visibility ? "flex show" : "hidden"
      } fixed inset-0 w-full h-full z-50 justify-center items-end lg:items-center`}
    >
      <div
        onClick={() => setShowPlansViewer(false)}
        className={`absolute top-0 left-0 bg-black/20 w-full h-full backdrop-blur-sm cursor-pointer ${
          showPlansViewer
            ? "animate-[showbackground_400ms_ease-out_1_forwards]"
            : "animate-[vanishbackground_400ms_ease-out_1_forwards]"
        }`}
      ></div>

      <div
        className={`bg-[#d9d9d9] max-w-[1000px] w-full lg:max-h-[650px] h-[70dvh] z-10 rounded-t-4xl lg:rounded-4xl flex flex-col lg:flex-row overflow-x-hidden overflow-y-scroll bg-[url(/Logo-black.png)] [background-repeat:no-repeat] lg:bg-position-[right_-375px_bottom_5px] bg-position-[right_-375px_top_120px] bg-size-[650px_auto] ${
          showPlansViewer
            ? "animate-[slideUp_400ms_ease-out_1_forwards]"
            : "animate-[slideDown_400ms_ease-out_1_forwards]"
        }`}
      >
        {/* Image */}
        <div className="lg:sticky lg:top-0 w-full lg:w-[40%] lg:h-full h-[150px] min-h-[150px] rounded-t-4xl lg:rounded-l-4xl lg:rounded-t-none">
          <Image className="h-full w-auto object-cover" src={menus.find(menu => menu.name.toLowerCase() == currentPlan)?.backgroundImageThumb || menus[0].backgroundImageThumb} alt={`Thumb do cardápio ${currentPlan}`}/>
          <div className="absolute top-0 left-0 w-full h-[150px] bg-linear-to-t from-[#d9d9d9] to-transparent to-30% lg:hidden"></div>
        </div>
        {/* Image */}

        <div className="flex lg:w-[60%] h-fit">
          <div className="w-full min-h-fit px-8 pb-8 flex-col gap-2 relative">
            <div className="flex relative italic lg:pt-14">
              <h2 className="absolute bottom-4 text-6xl font-black text-[#FE3A00DD]/50 lg:text-[#FE3A00DD]">
                Cardápio
              </h2>
              <h2 className="text-4xl text-[#333] font-black pl-4 z-10 capitalize">
                {currentPlan}
              </h2>
            </div>

            {types.map((type, index) => (
              <TypesView
                key={index}
                type={type}
                plan={cardapios.filter((data) =>
                  data.Cardápio.includes(currentPlan)
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuViewer;
