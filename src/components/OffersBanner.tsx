import { Card, CardContent } from "./ui/card";

export function OffersBanner() {
  return (
    <div className="py-8">
      <Card className="bg-gradient-to-r from-primary/90 to-primary text-white">
        <CardContent className="flex flex-col md:flex-row items-center justify-between p-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Special Offers!</h2>
            <p className="text-white/90">Use code WELCOME50 for 50% off on your first order</p>
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold">50%</div>
              <div className="text-sm text-white/90">OFF</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">₹100</div>
              <div className="text-sm text-white/90">CASHBACK</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}