import { Button } from "./ui/button";

const categories = ["All", "Food", "Delivery", "First Order", "Special"];

export function OfferFilters() {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={category === "All" ? "default" : "outline"}
          className="rounded-full"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}