import Banner from "@/components/home/banner";
import BestSeller from "@/components/home/bestseller";
import Carousel from "@/components/home/carousel";
import Counter from "@/components/home/counter/intex";
import Featurs from "@/components/home/featurs";
import Hero from "@/components/home/hero";
import ProductsTabs from "@/components/home/productstabs";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/testimonial/intext";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featurs />
      <ProductsTabs />
      <Services />
      <Carousel />
      <Banner />
      <BestSeller />
      <Counter />
      <Testimonial />
    </main>
  );
}
