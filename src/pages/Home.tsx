import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { RestaurantCard } from "@/components/RestaurantCard";
import { CuisineFilter } from "@/components/CuisineFilter";
import { Header } from "@/components/Header";
import { FoodCategories } from "@/components/FoodCategories";
import { OffersBanner } from "@/components/OffersBanner";
import { Cart } from "@/components/Cart";
import { Newsletter } from "@/components/Newsletter";
import { TopRestaurants } from "@/components/TopRestaurants";
import { Footer } from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const RESTAURANTS = [
  {
    id: "1",
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
    cuisines: ["American", "Fast Food"],
    rating: 4.2,
    deliveryTime: "30-35 min",
    menuItems: [
      { 
        id: "1-1", 
        name: "Whopper", 
        price: 6.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        description: "Flame-grilled beef patty topped with tomatoes, lettuce, mayo"
      },
      { 
        id: "1-2", 
        name: "Chicken Royale", 
        price: 5.99,
        image: "https://images.unsplash.com/photo-1598679253544-2c97992403ea?w=500",
        description: "Crispy chicken fillet topped with lettuce and mayo"
      },
      { 
        id: "1-3", 
        name: "Fries", 
        price: 2.99,
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500",
        description: "Golden crispy french fries"
      },
    ],
  },
  {
    id: "2",
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    cuisines: ["Italian", "Fast Food"],
    rating: 4.1,
    deliveryTime: "40-45 min",
    menuItems: [
      { 
        id: "2-1", 
        name: "Pepperoni Pizza", 
        price: 12.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
        description: "Classic pepperoni pizza with mozzarella cheese"
      },
      { 
        id: "2-2", 
        name: "Margherita Pizza", 
        price: 10.99,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
        description: "Fresh tomatoes, mozzarella, and basil"
      },
      { 
        id: "2-3", 
        name: "Garlic Bread", 
        price: 4.99,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
        description: "Freshly baked bread with garlic butter"
      },
    ],
  },
  {
    id: "3",
    name: "Taj Indian Kitchen",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
    cuisines: ["Indian", "Curry"],
    rating: 4.4,
    deliveryTime: "35-40 min",
    menuItems: [
      { id: "3-1", name: "Butter Chicken", price: 14.99 },
      { id: "3-2", name: "Naan Bread", price: 2.99 },
      { id: "3-3", name: "Biryani", price: 13.99 },
    ],
  },
  {
    id: "4",
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
    cuisines: ["Japanese", "Sushi"],
    rating: 4.5,
    deliveryTime: "45-50 min",
    menuItems: [
      { id: "4-1", name: "California Roll", price: 8.99 },
      { id: "4-2", name: "Salmon Nigiri", price: 6.99 },
      { id: "4-3", name: "Miso Soup", price: 3.99 },
    ],
  },
  {
    id: "5",
    name: "Thai Spice",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500",
    cuisines: ["Thai", "Asian"],
    rating: 4.3,
    deliveryTime: "40-45 min",
    menuItems: [
      { id: "5-1", name: "Pad Thai", price: 11.99 },
      { id: "5-2", name: "Green Curry", price: 12.99 },
      { id: "5-3", name: "Spring Rolls", price: 5.99 },
    ],
  },
];

const CUISINES = [
  "American",
  "Italian",
  "Indian",
  "Japanese",
  "Thai",
  "Fast Food",
  "Sushi",
  "Curry",
  "Asian",
];

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const filteredRestaurants = RESTAURANTS.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine
      ? restaurant.cuisines.includes(selectedCuisine)
      : true;
    return matchesSearch && matchesCuisine;
  });

  const handleAddToCart = (item: { id: string; name: string; price: number }) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      quantity === 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <OffersBanner />
        <FoodCategories />
        
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        
        <div className="mb-8">
          <CuisineFilter
            cuisines={CUISINES}
            selectedCuisine={selectedCuisine}
            onSelect={setSelectedCuisine}
          />
        </div>

        <TopRestaurants />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <Newsletter />

        <Cart
          items={cartItems}
          onRemoveItem={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;