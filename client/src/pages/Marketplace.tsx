import { Navbar } from "@/components/layout/Navbar";
import { SellerCard } from "@/components/ui/SellerCard";
import { ItemCard } from "@/components/ui/ItemCard";
import { HorizontalSlider } from "@/components/ui/HorizontalSlider";
import { MarketplaceHero } from "@/components/ui/MarketplaceHero";
import { mockSellers, categoryItems } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { 
  Search as SearchIcon, 
  Filter, 
  CreditCard, 
  Shirt, 
  CircleDot, 
  Camera,
  Clock,
  TrendingUp,
  Flame
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Marketplace() {
  const allItems = mockSellers.flatMap(s => s.items);
  const trendingItems = allItems.filter(i => (i.priceChange ?? 0) > 5);

  return (
    <div className="min-h-screen bg-[#181A1E] pb-20 md:pb-0">
      <Navbar />
      
      <main className="pt-4 md:pt-16">
        <MarketplaceHero />
        
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
            <div>
              <h2 className="text-xl md:text-3xl font-display font-bold text-white mb-1 md:mb-2">Explore Collections</h2>
              <p className="text-sm md:text-base text-[#CFCFCF]">Browse trending collectibles and rare finds.</p>
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={14} />
                <Input 
                  placeholder="Search collectibles..." 
                  className="pl-9 bg-[#22252b] border-white/10 text-white text-sm focus:ring-[#AC0808] h-9 md:h-10"
                />
              </div>
              <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10 h-9 md:h-10">
                <Filter size={14} className="mr-1 md:mr-2" /> Filter
              </Button>
            </div>
          </div>
        </div>

        <section className="py-8 md:py-12 bg-gradient-to-r from-[#0f1115] via-[#12141a] to-[#181A1E] border-y border-white/5">
          <div className="container mx-auto px-4">
            <HorizontalSlider title="Hot Right Now" icon={<Flame size={28} />}>
              {trendingItems.length > 0 
                ? trendingItems.map((item) => (
                    <ItemCard key={item.id} item={item} compact />
                  ))
                : allItems.slice(0, 8).map((item) => (
                    <ItemCard key={item.id} item={item} compact />
                  ))
              }
            </HorizontalSlider>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <HorizontalSlider title="Trading Cards" icon={<CreditCard size={28} />}>
              {categoryItems['trading-cards'].map((item) => (
                <ItemCard key={item.id} item={item} compact />
              ))}
            </HorizontalSlider>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-[#0f1115]">
          <div className="container mx-auto px-4">
            <HorizontalSlider title="Signed Jerseys" icon={<Shirt size={28} />}>
              {categoryItems['signed-jerseys'].map((item) => (
                <ItemCard key={item.id} item={item} compact />
              ))}
            </HorizontalSlider>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <HorizontalSlider title="Match Balls" icon={<CircleDot size={28} />}>
              {categoryItems['match-balls'].map((item) => (
                <ItemCard key={item.id} item={item} compact />
              ))}
            </HorizontalSlider>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-[#0f1115]">
          <div className="container mx-auto px-4">
            <HorizontalSlider title="Autographed Photos" icon={<Camera size={28} />}>
              {categoryItems['autographed-photos'].map((item) => (
                <ItemCard key={item.id} item={item} compact />
              ))}
            </HorizontalSlider>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <HorizontalSlider title="Vintage Collectibles" icon={<Clock size={28} />}>
              {categoryItems['vintage'].map((item) => (
                <ItemCard key={item.id} item={item} compact />
              ))}
            </HorizontalSlider>
          </div>
        </section>

        <section className="py-10 md:py-14 bg-[#0f1115] border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <TrendingUp size={28} className="text-[#AC0808]" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white">Top Sellers</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {mockSellers.map((seller) => (
                <SellerCard key={seller.id} seller={seller} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
