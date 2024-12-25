import { Card } from "@/app/components/card";
import { LAUNDRYCARDSECTION } from "../../../../../share/data";

export default function LaundryStorage() {
  return (
    <div>
      <Card card={LAUNDRYCARDSECTION[0]} index={0} />
      <Card card={LAUNDRYCARDSECTION[1]} index={1} />
    </div>
  );
}
