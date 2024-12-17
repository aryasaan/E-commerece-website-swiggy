import { Button } from "./ui/button";

interface CuisineFilterProps {
  cuisines: string[];
  selectedCuisine: string | null;
  onSelect: (cuisine: string | null) => void;
}

export function CuisineFilter({ cuisines, selectedCuisine, onSelect }: CuisineFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCuisine === null ? "default" : "outline"}
        onClick={() => onSelect(null)}
      >
        All
      </Button>
      {cuisines.map((cuisine) => (
        <Button
          key={cuisine}
          variant={selectedCuisine === cuisine ? "default" : "outline"}
          onClick={() => onSelect(cuisine)}
        >
          {cuisine}
        </Button>
      ))}
    </div>
  );
}