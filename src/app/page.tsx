import { HOMECARDSECTION } from "../../share/data";
import { Card } from "./components/card";
import HomeServices from "./components/home/homeServices";

export default function Home() {
  return (
    <div>
      <>
        <Card card={HOMECARDSECTION[0]} index={0} />
        <HomeServices />
        <Card card={HOMECARDSECTION[1]} index={1} />
      </>
    </div>
  );
}
