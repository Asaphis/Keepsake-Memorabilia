import { Link } from "wouter";
import { Seller } from "@/lib/mockData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Verified, TrendingUp } from "lucide-react";

interface SellerCardProps {
  seller: Seller;
}

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <Link href={`/seller/${seller.id}`} className="block group">
        <Card className="bg-[#22252b] border-white/5 overflow-hidden hover:border-[#AC0808]/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10">
          <div className="h-20 md:h-24 bg-gradient-to-r from-[#000708] via-[#1a0505] to-[#1a1d24] relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#AC0808]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <CardContent className="pt-0 relative px-3 md:px-4 pb-4 md:pb-6">
            <div className="flex justify-between items-end -mt-8 md:-mt-10 mb-3 md:mb-4">
              <div className="relative">
                <Avatar className="h-16 w-16 md:h-20 md:w-20 border-3 md:border-4 border-[#22252b] shadow-xl">
                  <AvatarImage src={seller.avatar} alt={seller.name} />
                  <AvatarFallback>{seller.name[0]}</AvatarFallback>
                </Avatar>
                {seller.verified && (
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 shadow-lg">
                    <Verified size={10} className="text-white" />
                  </div>
                )}
              </div>
              <Badge variant="secondary" className="bg-[#AC0808]/10 text-[#AC0808] hover:bg-[#AC0808]/20 border-none mb-2 text-[10px] md:text-xs">
                <Star size={10} className="mr-1 fill-current" />
                {seller.rating}
              </Badge>
            </div>
            
            <h3 className="text-base md:text-xl font-display font-bold text-white group-hover:text-[#AC0808] transition-colors">
              {seller.name}
            </h3>
            <p className="text-gray-500 text-xs md:text-sm mb-2">{seller.handle}</p>
            <p className="text-gray-400 text-xs md:text-sm line-clamp-2 mb-3">{seller.bio}</p>
            
            {seller.totalSales && (
              <div className="flex items-center gap-1 text-[10px] md:text-xs text-green-400 mb-3">
                <TrendingUp size={10} />
                <span>{seller.totalSales.toLocaleString()} sales</span>
              </div>
            )}
            
            <div className="flex gap-1.5 md:gap-2 overflow-hidden">
              {seller.items.slice(0, 3).map((item) => (
                <div key={item.id} className="h-10 w-10 md:h-12 md:w-12 rounded-md overflow-hidden bg-gray-800 border border-white/5 group-hover:border-[#AC0808]/20 transition-colors">
                  <img src={item.image} alt="" className="h-full w-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
              {seller.items.length > 3 && (
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-md bg-gray-800 border border-white/5 flex items-center justify-center text-[10px] md:text-xs text-gray-500">
                  +{seller.items.length - 3}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
    </Link>
  );
}
