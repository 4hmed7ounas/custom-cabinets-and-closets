import { Card } from "@/app/components/card";
import { NEWSCARDSECTION } from "../../../../share/data";

export default function News() {
  return (
    <div>
      <Card card={NEWSCARDSECTION[0]} index={0} />
      <Card card={NEWSCARDSECTION[1]} index={1} />
    </div>
  );
}
