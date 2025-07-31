import About from "@/components/About";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testimonial from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero
        text={
          <>
            Churrasco <br /> para toda família!
          </>
        }
        CTA={true}
      />
      <Menu />
      <CTA background="--accent3" social="WhatsApp">
        Gostou do que viu?
      </CTA>
      <About />
      <Testimonial />
      <CTA background="--accent2" social="WhatsApp">
        Gostou do que viu? <br />
        Venha fazer parte da família!
      </CTA>
    </div>
  );
}
