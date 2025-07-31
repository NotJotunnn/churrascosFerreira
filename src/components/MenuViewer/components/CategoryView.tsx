import { CardapiosType } from "@/store/cardapios";
import { memo } from "react";

type CategoryViewType = {
  category: string;
  plan: CardapiosType[];
};

const CategoryView = ({ category, plan }: CategoryViewType) => {
  return (
    <div className="flex gap-1 p-5 odd:bg-white bg-gray-300">
      <h4 className="text-2xl font-bold min-w-42 w-42 border-r-2 border-black">
        {category}
      </h4>
      <ul>
        {plan
          .filter((data) => data.Categoria === category)
          .map((item, index) => (
            <li key={index} className="border-b-2 border-black">
              {item.Opção}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default memo(CategoryView);
