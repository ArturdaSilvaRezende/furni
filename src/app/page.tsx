import BtnBackToTop from "@/components/features/BtnBackToToP";
import Banner from "@/components/screen/home/banner";
import BestSeller from "@/components/screen/home/bestseller";
import Carousel from "@/components/screen/home/carousel";
import Counter from "@/components/screen/home/counter/intex";
import Featurs from "@/components/screen/home/featurs";
import Hero from "@/components/screen/home/hero";
import ProductsTabs from "@/components/screen/home/productstabs";
import SearchModal from "@/components/screen/home/searchmodal";
import Services from "@/components/screen/home/Services";
import Testimonial from "@/components/screen/home/testimonial/intext";

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
      <SearchModal />
      <BtnBackToTop />
    </main>
  );
}
