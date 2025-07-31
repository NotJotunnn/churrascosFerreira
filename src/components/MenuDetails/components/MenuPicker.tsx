import Image from "next/image";

import Feijoada from "../../../assets/servicos/Feijoada.svg";
import Basico from "../../../assets/servicos/Basico.svg";
import Premium from "../../../assets/servicos/Premium.svg";

type MenuPickerType = {
  selected: number,
  handleClick: (selection: number) => void
}

const MenuPicker = ({ selected, handleClick }: MenuPickerType) => {

  return (
    <div className="absolute flex justify-center bg-[#00000070] z-30 w-full">
      <div className="w-full lg:max-w-[970px] max-w-min h-[70px] flex items-center">
        <button
          onClick={() => handleClick(0)}
          className={`px-3 h-full w-fit lg:w-full lg:gap-4 ${
            selected == 0 &&
            "bg-orange-500 text-black w-full gap-4 grow-1"
          } ${
            selected == 1 &&
            "bg-accent3shade lg:bg-transparent text-black lg:text-white"
          } ${
            selected == 2 &&
            "bg-accent3shade2 lg:bg-transparent text-black lg:text-white"
          } cursor-pointer lg:whitespace-nowrap font-semibold flex items-center`}
        >
          <Image
            className="max-w-[52px] min-h-[52px]"
            src={Feijoada}
            width={152}
            height={152}
            alt="Feijoado"
          />
          <span
            className={`${
              selected == 0 && "w-full max-w-min transition-all duration-400"
            } block text-left w-0 lg:w-full overflow-hidden text-[16px] lg:text-[24px]`}
          >
            Cardápio Feijoada
          </span>
        </button>

        <button
          onClick={() => handleClick(1)}
          className={`px-3 h-full w-fit lg:w-full lg:gap-4 ${
            selected == 1 &&
            "bg-orange-500 text-black w-full gap-4 grow-1"
          } ${
            (selected == 0 || selected == 2) &&
            "bg-accent3shade lg:bg-transparent text-black lg:text-white"
          } cursor-pointer lg:whitespace-nowrap font-semibold flex items-center`}
        >
          <Image
            className="max-w-[52px] min-h-[52px]"
            src={Basico}
            width={152}
            height={152}
            alt="Feijoado"
          />
          <span
            className={`${
              selected == 1 && "w-full max-w-min transition-all duration-400"
            } block text-left w-0 lg:w-full overflow-hidden text-[16px] lg:text-[24px]`}
          >
            Cardápio Básico
          </span>
        </button>

        <button
          onClick={() => handleClick(2)}
          className={`px-3 h-full w-fit lg:w-full lg:gap-4 ${
            selected == 2 &&
            "bg-orange-500 text-black w-full gap-4 grow-1"
          } ${
            selected == 1 &&
            "bg-accent3shade lg:bg-transparent text-black lg:text-white"
          } ${
            selected == 0 &&
            "bg-accent3shade2 lg:bg-transparent text-black lg:text-white"
          } cursor-pointer lg:whitespace-nowrap font-semibold flex items-center`}
        >
          <Image
            className="max-w-[52px] min-h-[52px]"
            src={Premium}
            width={152}
            height={152}            
            alt="Feijoado"
          />
          <span
            className={`${
              selected == 2 && "w-full max-w-min transition-all duration-400"
            } block text-left w-0 lg:w-full overflow-hidden text-[16px] lg:text-[24px]`}
          >
            Cardápio Premium
          </span>
        </button>
      </div>
    </div>
  );
};

export default MenuPicker;
