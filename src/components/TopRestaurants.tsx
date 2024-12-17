import { Star } from "lucide-react";

export function TopRestaurants() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top Rated Restaurants</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={`https://images.unsplash.com/photo-${1550000000000 + i}?w=500&auto=format`}
                  alt="Restaurant"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">4.{5 + i}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Top Restaurant {i}</h3>
                <p className="text-sm text-gray-600">Italian • Chinese • Thai</p>
                <p className="text-sm text-gray-500 mt-1">20-30 min</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}