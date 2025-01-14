import { GridLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-96">
      <GridLoader />
    </div>
  );
}
