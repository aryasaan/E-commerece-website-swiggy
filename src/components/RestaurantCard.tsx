import { Star, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useToast } from "./ui/use-toast";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
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
  const fallbackImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop";

  const handleAddToCart = (item: MenuItem) => {
    onAddToCart(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || fallbackImage}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="mt-1 text-sm text-white/90">{cuisines.join(", ")}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span>{rating}</span>
          </Badge>
          <span className="text-sm text-muted-foreground">{deliveryTime}</span>
        </div>
        {menuItems.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-medium text-card-foreground">Popular Items</h4>
            <div className="space-y-3">
              {menuItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-lg border p-2"
                >
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                    <img
                      src={item.image || fallbackImage}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                      {item.description && (
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {item.description}
                        </p>
                      )}
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
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}