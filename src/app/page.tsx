import { HOMECARDSECTION } from "../../share/data";
import { Card } from "./components/card";
import ServiceSection from "./components/servicesSection";

export default function Home() {
  return (
    <div>
      <>
        <Card card={HOMECARDSECTION[0]} index={0} />
        <ServiceSection />
        <Card card={HOMECARDSECTION[1]} index={1} />
      </>
    </div>
  );
}
