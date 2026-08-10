import About from "@/components/About";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main>
      <Hero />
      <Counter />
      <About />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}