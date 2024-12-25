import { Card } from "@/app/components/card";
import { CABINETSCARDSECTION } from "../../../../../share/data";

export default function Cabinets() {
  return (
    <div>
      <Card card={CABINETSCARDSECTION[0]} index={0} />
      <Card card={CABINETSCARDSECTION[1]} index={1} />
    </div>
  );
}
