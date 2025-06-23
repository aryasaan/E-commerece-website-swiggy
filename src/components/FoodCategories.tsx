import { Card, CardContent } from "./ui/card";

const categories = [
  {
    id: 1,
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
  },
  {
    id: 2,
    name: "Burger",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500",
  },
  {
    id: 3,
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
  },
  {
    id: 4,
    name: "Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
  },
];

export function FoodCategories() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6">Food Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="aspect-square overflow-hidden rounded-lg mb-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center font-medium">{category.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}