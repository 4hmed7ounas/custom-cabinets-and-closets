import { HOMECARDSECTION } from "../../share/data";
import { Card } from "./components/card";
import { Review } from "./components/home/review";
import ServiceSection from "./components/servicesSection";

export default function Home() {
  return (
    <div>
      <>
        <Card card={HOMECARDSECTION[0]} index={1} />
        <ServiceSection />
        <Card card={HOMECARDSECTION[1]} index={0} />
        <Review />
        <Card card={HOMECARDSECTION[2]} index={1} />
      </>
    </div>
  );
}
