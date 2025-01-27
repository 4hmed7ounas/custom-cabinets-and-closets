import Hero from "@/app/components/gallery/hero";

export default function Gallery() {
  return (
    <div className="bg-gradient-to-r from-secondary-600 to-secondary-500 text-secondary-50">
      <hr className="border-2 border-secondary-50" />
      <Hero />
      <hr className="border-2 border-secondary-50" />
    </div>
  );
}
