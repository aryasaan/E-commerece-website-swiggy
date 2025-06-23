import { ShoppingCart, Search, Bell } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "./ui/dialog";
import { SearchBar } from "./SearchBar";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // You can implement additional search logic here
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">Swiggy</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/search" className="text-sm font-medium hover:text-primary">
            Search
          </Link>
          <Link to="/offers" className="text-sm font-medium hover:text-primary">
            Offers
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <SearchBar onSearch={handleSearch} />
        </DialogContent>
      </Dialog>
    </header>
  );
}