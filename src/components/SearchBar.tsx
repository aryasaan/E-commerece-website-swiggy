import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSearch = (newValue: string) => {
    setValue(newValue);
    onSearch(newValue);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Search for restaurants and food"
        className="pl-10 pr-4 h-12 text-base md:text-lg"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}