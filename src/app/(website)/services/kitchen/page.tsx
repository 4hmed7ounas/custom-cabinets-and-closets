import { Card } from "@/app/components/card";
import { KITCHENCARDSECTION } from "../../../../../share/data";

export default function Kitchen() {
  return (
    <div>
      <Card card={KITCHENCARDSECTION[0]} index={0} />
      <Card card={KITCHENCARDSECTION[1]} index={1} />
      <Card card={KITCHENCARDSECTION[2]} index={2} />
      <Card card={KITCHENCARDSECTION[3]} index={3} />
      <Card card={KITCHENCARDSECTION[4]} index={4} />
    </div>
  );
}
