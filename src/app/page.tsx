import { HOMECARDSECTION } from "../../share/data";
import { Card } from "./components/card";
import Hero from "./components/home/hero";
import { Review } from "./components/home/review";
import ServiceSection from "./components/servicesSection";
import { ServicesHome } from "./components/servicesHome";

export default function Home() {
  return (
    <div>
      <hr className="border-t-4 border-secondary-500" />
      <Hero />
      <hr className="border-t-4 border-secondary-500" />
      <ServicesHome />
      <Card card={HOMECARDSECTION[0]} index={1} />
      <ServiceSection />
      <Card card={HOMECARDSECTION[1]} index={0} />
      <Review />
      <Card card={HOMECARDSECTION[2]} index={1} />
    </div>
  );
}
