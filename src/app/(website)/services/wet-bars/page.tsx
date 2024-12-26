import { Card } from "@/app/components/card";
import { WETBARSCARDSECTION } from "../../../../../share/data";

export default function WetBars() {
  return (
    <div>
      <Card card={WETBARSCARDSECTION[0]} index={0} />
      <Card card={WETBARSCARDSECTION[1]} index={1} />
    </div>
  );
}
