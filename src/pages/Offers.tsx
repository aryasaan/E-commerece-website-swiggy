import { Header } from "@/components/Header";
import { OfferCard } from "@/components/OfferCard";
import { OfferFilters } from "@/components/OfferFilters";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const offers = [
  {
    title: "Welcome Offer",
    code: "WELCOME50",
    description: "Get 50% off on your first order with Swiggy",
    discount: "50%",
    validUntil: "31 Dec 2024",
    gradient: "from-[#FF6B6B] to-[#FFE66D]"
  },
  {
    title: "Weekend Special",
    code: "WEEKEND25",
    description: "Enjoy 25% off on all orders during weekends",
    discount: "25%",
    validUntil: "31 Dec 2024",
    gradient: "from-[#4E65FF] to-[#92EFFD]"
  },
  {
    title: "Free Delivery",
    code: "FREEDEL",
    description: "Free delivery on orders above $30",
    discount: "100%",
    validUntil: "31 Dec 2024",
    gradient: "from-[#6B4EFF] to-[#FF92E2]"
  }
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Offers & Promotions</h1>
          <p className="text-gray-600 mb-8">
            Discover the best deals and save big on your favorite meals
          </p>
          
          <OfferFilters />
          
          <div className="space-y-6">
            {offers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>
          
          <div className="mt-16">
            <Newsletter />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;