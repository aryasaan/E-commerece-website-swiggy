import { Star, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface MenuItem {
  id: string;
  name: string;
  price: number;
}

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisines: string[];
  rating: number;
  deliveryTime: string;
  menuItems?: MenuItem[];  // Make menuItems optional
  onAddToCart: (item: MenuItem) => void;
}

export function RestaurantCard({
  id,
  name,
  image,
  cuisines,
  rating,
  deliveryTime,
  menuItems = [],  // Provide default empty array
  onAddToCart,
}: RestaurantCardProps) {
  return (
    <div className="block group">
      <div className="overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="mt-1 text-sm text-gray-600">{cuisines.join(", ")}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-medium">{rating}</span>
            </div>
            <span className="text-sm text-gray-600">{deliveryTime}</span>
          </div>
          <div className="mt-4 border-t pt-4">
            <h4 className="font-medium mb-2">Popular Items</h4>
            <div className="space-y-2">
              {menuItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onAddToCart(item)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}