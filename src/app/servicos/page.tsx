import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import MenuDetails from "@/components/MenuDetails";
import FAQ from "../../components/FAQ";
import MenuViewer from "@/components/MenuViewer";
import { PlansViewerProvider } from "@/hooks/plansviewer";

const Servicos = async () => {
  return (
    <div>
      <PlansViewerProvider>
        <Hero text="Serviços" />

        <div className="lg:block hidden">
          <CTA background="--accent2" social="WhatsApp">
            Está gostando do que vê?
          </CTA>
        </div>

        <MenuDetails />

        <div className="lg:hidden block">
          <CTA background="--accent3" social="WhatsApp">
            Gostou do que viu?
          </CTA>
        </div>

        <FAQ />

        <CTA background="--accent" social="WhatsApp">
          Tem mais alguma <br className="lg:hidden" /> dúvida?
        </CTA>
        <MenuViewer />
      </PlansViewerProvider>
    </div>
  );
};

export default Servicos;
