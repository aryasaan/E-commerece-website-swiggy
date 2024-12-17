import { Star, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useToast } from "./ui/use-toast";

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
  menuItems?: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export function RestaurantCard({
  id,
  name,
  image,
  cuisines,
  rating,
  deliveryTime,
  menuItems = [],
  onAddToCart,
}: RestaurantCardProps) {
  const { toast } = useToast();

  const handleAddToCart = (item: MenuItem) => {
    onAddToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm text-white/90">{cuisines.join(", ")}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span>{rating}</span>
          </Badge>
          <span className="text-sm text-muted-foreground">{deliveryTime}</span>
        </div>
        {menuItems.length > 0 && (
          <div className="mt-4 space-y-3">
            <h4 className="font-medium text-card-foreground">Popular Items</h4>
            <div className="space-y-2">
              {menuItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border p-2"
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
                    className="h-8 w-8 text-primary hover:text-primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}