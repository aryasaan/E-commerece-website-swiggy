import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisines: string[];
  rating: number;
  deliveryTime: string;
}

export function RestaurantCard({ id, name, image, cuisines, rating, deliveryTime }: RestaurantCardProps) {
  return (
    <Link to={`/restaurant/${id}`} className="block group">
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
        </div>
      </div>
    </Link>
  );
}