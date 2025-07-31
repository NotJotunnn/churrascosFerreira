import { CardapiosType } from "@/store/cardapios";
import { memo, useMemo } from "react";
import CategoryView from "./CategoryView";

type TypesViewType = {
  type: string;
  plan: CardapiosType[];
};

const TypesView = ({ type, plan }: TypesViewType) => {
  const categories = useMemo(
    () => [
      ...new Set(
        plan.filter((data) => data.Tipo === type).map((data) => data.Categoria)
      ),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="flex flex-col relative mt-5 capitalize border-2 border-black opacity-95">
      <h3 className="text-2xl w-full font-bold text-center py-5 bg-accent3">
        {type === "adicionais" && "*"}{type}
        {type === "adicionais" && (
          <p className="absolute top-0 left-0 text-sm text-right pt-1 pl-1">*Sujeito à acrécimo de valor</p>
        )}
      </h3>
      <div className="flex flex-col">
        {categories.map((category, index) => (
          <CategoryView
            key={index}
            category={category}
            plan={plan.filter((data) => data.Tipo === type)}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(TypesView);
