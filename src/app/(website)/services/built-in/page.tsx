import { Card } from "@/app/components/card";
import { BUILTINCARDSECTION } from "../../../../../share/data";

export default function BuiltIn() {
  return (
    <div>
      <Card card={BUILTINCARDSECTION[0]} index={0} />
      <Card card={BUILTINCARDSECTION[1]} index={1} />
    </div>
  );
}
