import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";

export function OffersBanner() {
  return (
    <div className="py-8">
      <Card className="bg-gradient-to-r from-primary/90 to-primary text-white overflow-hidden">
        <CardContent className="flex flex-col md:flex-row items-center justify-between p-6">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Special Offers!</h2>
            <p className="text-white/90">Use code WELCOME50 for 50% off on your first order</p>
            <div className="flex items-center gap-2 mt-2 text-white/90 hover:text-white cursor-pointer">
              <span>View all offers</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-center bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold">50%</div>
              <div className="text-sm text-white/90">OFF</div>
            </div>
            <div className="text-center bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold">₹100</div>
              <div className="text-sm text-white/90">CASHBACK</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}