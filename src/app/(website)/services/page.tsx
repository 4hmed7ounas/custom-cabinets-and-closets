import { Card } from "@/app/components/card";
import { SERVICESCARDSECTION } from "../../../../share/data";
import ServiceSection from "@/app/components/servicesSection";

export default function Service() {
  return (
    <div>
      <Card card={SERVICESCARDSECTION[0]} index={0} />
      <ServiceSection />
      <Card card={SERVICESCARDSECTION[1]} index={1} />
    </div>
  );
}
