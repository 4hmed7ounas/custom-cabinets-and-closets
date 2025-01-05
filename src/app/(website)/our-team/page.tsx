import { Card } from "@/app/components/card";
import { TEAMCARDSECTION } from "../../../../share/data";

export default function Team() {
  return (
    <div>
      <Card card={TEAMCARDSECTION[0]} index={0} />
      <Card card={TEAMCARDSECTION[1]} index={1} />
      <Card card={TEAMCARDSECTION[2]} index={2} />
      <Card card={TEAMCARDSECTION[3]} index={3} />
    </div>
  );
}
