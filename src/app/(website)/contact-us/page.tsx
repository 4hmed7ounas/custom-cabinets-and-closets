import { Card } from "@/app/components/card";
import { CONTACTCARDSECTION } from "../../../../share/data";

export default function ContactUs() {
  return (
    <div>
      <Card card={CONTACTCARDSECTION[0]} index={0} />
      <Card card={CONTACTCARDSECTION[1]} index={1} />
    </div>
  );
}
