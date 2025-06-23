import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface SearchFilter {
  cuisine?: string;
  rating?: number;
  maxDeliveryTime?: number;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilter>({});

  const suggestions = [
    "Pizza",
    "Burger",
    "Sushi",
    "Indian",
    "Thai",
    "Mexican",
  ];

  const cuisines = [
    "Italian",
    "American",
    "Japanese",
    "Indian",
    "Thai",
    "Mexican",
  ];

  const ratings = [3, 4, 4.5];
  const deliveryTimes = [30, 45, 60];

  const handleSearch = (newValue: string) => {
    setValue(newValue);
    onSearch(newValue);
  };

  const handleFilterChange = (key: keyof SearchFilter, value: any) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [key]: value };
      if (value === prev[key]) {
        delete newFilters[key];
      }
      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <div className="relative max-w-2xl mx-auto space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search for restaurants and food"
          className="pl-10 pr-4 h-12 text-base md:text-lg"
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setOpen(true)}
        />
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type to search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {suggestions.map((suggestion) => (
                <CommandItem
                  key={suggestion}
                  onSelect={() => {
                    handleSearch(suggestion);
                    setOpen(false);
                  }}
                >
                  {suggestion}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Cuisines">
              {cuisines.map((cuisine) => (
                <CommandItem
                  key={cuisine}
                  onSelect={() => handleFilterChange("cuisine", cuisine)}
                >
                  {cuisine}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Minimum Rating">
              {ratings.map((rating) => (
                <CommandItem
                  key={rating}
                  onSelect={() => handleFilterChange("rating", rating)}
                >
                  {rating}+ Stars
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Max Delivery Time">
              {deliveryTimes.map((time) => (
                <CommandItem
                  key={time}
                  onSelect={() => handleFilterChange("maxDeliveryTime", time)}
                >
                  Under {time} mins
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>

      {Object.keys(filters).length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          {Object.entries(filters).map(([key, value]) => (
            <Badge
              key={key}
              variant="secondary"
              className="px-3 py-1"
            >
              {key === "cuisine" && `${value}`}
              {key === "rating" && `${value}+ Stars`}
              {key === "maxDeliveryTime" && `Under ${value} mins`}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-2"
                onClick={() => handleFilterChange(key as keyof SearchFilter, value)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-sm text-muted-foreground"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}