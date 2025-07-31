import MenuCard from "./components/MenuCard";

const Menu = () => {
  return (
    <div className="bg-background text-black flex justify-center items-center text-center py-12 px-4">
      <div className="lg:max-w-content lg:w-content">
        <h2 className="text-4xl font-semibold mb-2">Nossos Cardápios</h2>
        <p className="opacity-50">
          Veja abaixo alguns dos cardápios que servimos.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 py-8">
          <MenuCard text="Feijoada" link="/servicos" image="/menu/Feijoada.png" />
          <MenuCard text="Básico" link="/servicos" image="/menu/Básico.png" />
          <MenuCard text="Premium" link="/servicos" image="/menu/Premium.png" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
