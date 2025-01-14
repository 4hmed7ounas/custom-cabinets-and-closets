import { Card } from "@/app/components/card";
import { BUILTINCARDSECTION } from "../../../../../share/data";

export default function BuiltIn() {
  return (
    <div>
      <Card card={BUILTINCARDSECTION[0]} index={0} />
      <Card card={BUILTINCARDSECTION[1]} index={1} />
      <Card card={BUILTINCARDSECTION[2]} index={2} />
      <Card card={BUILTINCARDSECTION[3]} index={3} />
      <Card card={BUILTINCARDSECTION[4]} index={4} />
    </div>
  );
}
