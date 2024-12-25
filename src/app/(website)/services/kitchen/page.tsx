import { Card } from "@/app/components/card";
import { KITCHENCARDSECTION } from "../../../../../share/data";

export default function Kitchen() {
  return (
    <div>
      <Card card={KITCHENCARDSECTION[0]} index={0} />
      <Card card={KITCHENCARDSECTION[1]} index={1} />
    </div>
  );
}
