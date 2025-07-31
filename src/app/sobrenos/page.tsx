import AboutCard from "@/components/About/components/AboutCard";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonials";

const SobreNos = () => {
  return (
    <div>
      <Hero text="Sobre Nós" />
      <div className="flex flex-col gap-[70px] mt-[70px]">
        <AboutCard image="/sobrenos/Colagem.png" title="Nossa História">
          <p>
            Desde 2002, nossa empresa familiar é dedicada a oferecer o melhor do
            churrasco. Com uma paixão que atravessa gerações, combinamos
            tradição, sabor e qualidade em cada detalhe do nosso serviço.
            Trabalhamos com carnes selecionadas e preparamos tudo com o cuidado
            e a expertise que só uma família apaixonada pelo que faz pode
            oferecer.
          </p>
          <p>
            Nosso compromisso é proporcionar uma experiência autêntica de
            churrasco, seja em pequenos encontros ou grandes eventos, sempre com
            atendimento acolhedor e sabor inconfundível. Ao longo de mais de
            duas décadas, conquistamos a confiança dos nossos clientes, mantendo
            viva a tradição de um bom churrasco, feito com dedicação e respeito
            às origens.
          </p>
          <p>
            Venha conhecer nosso trabalho e saborear o que há de melhor em
            churrasco, preparado com amor e entrega.
          </p>
        </AboutCard>
        <CTA background="--accent3" social="WhatsApp">
          Gostou do que viu?
        </CTA>
        <AboutCard image="/sobrenos/Colagem2.png" title="Nossos Serviços">
          <p>
            Procurando um churrasco descontraído com aquele sabor tradicional de
            família? Oferecemos opções acessíveis e deliciosas, perfeitas para
            reunir amigos e familiares em um clima acolhedor. Se preferir algo
            mais sofisticado, também temos cortes especiais e um serviço
            diferenciado, mantendo sempre a essência do bom churrasco.
          </p>

          <p>
            Para almoços especiais ou comemorações, levamos até você a tradição
            do churrasco feito com cuidado e carinho. Tudo preparado para que
            você possa curtir cada momento sem preocupações, criando memórias
            inesquecíveis ao redor da mesa. Seja qual for a ocasião, garantimos
            uma experiência saborosa e cheia de aconchego!
          </p>
        </AboutCard>
        <Testimonial />
      </div>
    </div>
  );
};

export default SobreNos;
