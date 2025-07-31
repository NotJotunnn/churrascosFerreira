import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

const Galeria = () => {
  return (
    <div>
      <Hero text="Galeria" />
      <div className="flex flex-col gap-[36px] justify-center items-center my-[70px]">
        <h2 className="text-4xl text-center">
          Veja aqui algumas de nossas experiências!
        </h2>

        <Gallery />
        
      </div>
      <CTA background="--accent2" social="Instagram">
        Essas fotos vêm diretamente do nosso Instagram!
      </CTA>
      <CTA background="--accent3" social="WhatsApp">
        Gostou do que viu?
      </CTA>
    </div>
  );
};

export default Galeria;
