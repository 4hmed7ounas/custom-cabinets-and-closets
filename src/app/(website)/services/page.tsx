import { Card } from "@/app/components/card";
import { SERVICESCARDSECTION } from "../../../../share/data";
import ServiceSection from "@/app/components/servicesSection";

export default function Service() {
  return (
    <div>
      <Card card={SERVICESCARDSECTION[0]} index={0} />
      <Card card={SERVICESCARDSECTION[1]} index={1} />
      <ServiceSection />
      <Card card={SERVICESCARDSECTION[2]} index={2} />
      <Card card={SERVICESCARDSECTION[3]} index={3} />
      <Card card={SERVICESCARDSECTION[4]} index={4} />
    </div>
  );
}
