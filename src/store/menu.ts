import FeijoadaBackground from "../assets/servicos/feijoada-wide.webp";
import BasicoBackground from "../assets/servicos/basico-wide.webp";
import PremiumBackground from "../assets/servicos/premium-wide.webp";

import FeijoadaBackgroundTall from "../assets/servicos/feijoada.webp";
import BasicoBackgroundTall from "../assets/servicos/basico.webp";
import PremiumBackgroundTall from "../assets/servicos/premium.webp";

import { StaticImageData } from "next/image";

export type MenusType = {
  name: string;
  text: string;
  backgroundImage: StaticImageData;
  backgroundImageThumb: StaticImageData;
  description: string;
};

const menus: MenusType[] = [
  {
    name: "Feijoada",
    text: "",
    backgroundImage: FeijoadaBackground,
    backgroundImageThumb: FeijoadaBackgroundTall,
    description:
      "Ideal para eventos mais informais e acessíveis, sem abrir mão do sabor!",
  },
  {
    name: "Básico",
    text: "",
    backgroundImage: BasicoBackground,
    backgroundImageThumb: BasicoBackgroundTall,
    description:
      "Perfeita para quem deseja um evento mais completo, com carnes nobres e experiência diferenciada.",
  },
  {
    name: "Premium",
    text: "",
    backgroundImage: PremiumBackground,
    backgroundImageThumb: PremiumBackgroundTall,
    description:
      "Uma opção deliciosa e aconchegante para almoços de família, aniversários ou encontros temáticos.",
  },
];

export default menus;
