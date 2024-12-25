import { Card } from "@/app/components/card";
import { BATHROOMCARDSECTION } from "../../../../../share/data";

export default function BathroomStorage() {
  return (
    <div>
      <Card card={BATHROOMCARDSECTION[0]} index={0} />
      <Card card={BATHROOMCARDSECTION[1]} index={1} />
    </div>
  );
}
