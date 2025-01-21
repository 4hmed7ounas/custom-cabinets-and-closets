import { Card } from "@/app/components/card";
import { BLOGSCARDSECTION } from "../../../../share/data";

export default function Blogs() {
  return (
    <div>
      <Card card={BLOGSCARDSECTION[0]} index={0} />
      <Card card={BLOGSCARDSECTION[1]} index={1} />
      <Card card={BLOGSCARDSECTION[2]} index={2} />
      <Card card={BLOGSCARDSECTION[3]} index={3} />
      <Card card={BLOGSCARDSECTION[4]} index={4} />
    </div>
  );
}
