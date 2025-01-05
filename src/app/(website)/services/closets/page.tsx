import { Card } from "@/app/components/card";
import { CLOSETSCARDSECTION } from "../../../../../share/data";

export default function Closets() {
  return (
    <div>
      <Card card={CLOSETSCARDSECTION[0]} index={0} />
      <Card card={CLOSETSCARDSECTION[1]} index={1} />
      <Card card={CLOSETSCARDSECTION[2]} index={2} />
    </div>
  );
}
