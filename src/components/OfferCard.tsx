import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface OfferCardProps {
  title: string;
  code: string;
  description: string;
  discount: string;
  validUntil: string;
  gradient?: string;
}

export function OfferCard({ title, code, description, discount, validUntil, gradient = "from-primary/90 to-primary" }: OfferCardProps) {
  return (
    <Card className={`bg-gradient-to-r ${gradient} text-white overflow-hidden hover:shadow-lg transition-all duration-300`}>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/90 mb-2">{description}</p>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full w-fit">
              <span className="font-mono font-bold">{code}</span>
            </div>
            <p className="text-sm text-white/80 mt-2">Valid until {validUntil}</p>
          </div>
          <div className="text-center bg-white/10 p-4 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold">{discount}</div>
            <div className="text-sm text-white/90">OFF</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}