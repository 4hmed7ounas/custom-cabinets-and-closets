import { Card } from "@/app/components/card";
import { HOMEORGCARDSECTION } from "../../../../../share/data";

export default function HomeOrganization() {
  return (
    <div>
      <Card card={HOMEORGCARDSECTION[0]} index={0} />
      <Card card={HOMEORGCARDSECTION[1]} index={1} />
      <Card card={HOMEORGCARDSECTION[2]} index={2} />
    </div>
  );
}
