import { Header } from "@/components/Header";
import { OffersBanner } from "@/components/OffersBanner";

const Offers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">All Offers</h1>
        <div className="space-y-6">
          <OffersBanner />
          <OffersBanner />
          <OffersBanner />
        </div>
      </div>
    </div>
  );
};

export default Offers;