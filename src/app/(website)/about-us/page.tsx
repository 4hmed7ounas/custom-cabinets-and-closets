import { Card } from "@/app/components/card";
import { ABOUTCARDSECTION } from "../../../../share/data";

export default function ContactUs() {
  return (
    <div>
      <Card card={ABOUTCARDSECTION[0]} index={0} />
      <Card card={ABOUTCARDSECTION[1]} index={1} />
      <Card card={ABOUTCARDSECTION[2]} index={0} />
      <Card card={ABOUTCARDSECTION[3]} index={1} />
    </div>
  );
}
