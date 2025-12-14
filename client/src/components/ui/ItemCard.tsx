import { motion } from "framer-motion";
import { Item } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ShieldCheck, Video, TrendingUp, TrendingDown, Activity, Eye, ArrowRightLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface ItemCardProps {
  item: Item;
  featured?: boolean;
  compact?: boolean;
}

export function ItemCard({ item, featured = false, compact = false }: ItemCardProps) {
  const { toast } = useToast();
  const [bidAmount, setBidAmount] = useState("");
  const [isBidOpen, setIsBidOpen] = useState(false);

  const handleBuy = () => {
    toast({
      title: "Purchase Successful!",
      description: `You have successfully purchased ${item.title} for $${item.price.toLocaleString()}.`,
      duration: 5000,
    });
  };

  const handleTrade = () => {
    toast({
      title: "Trade Request Sent",
      description: `A trade request for ${item.title} has been sent to the seller.`,
      duration: 5000,
    });
  };

  const handleTrackPrice = () => {
    toast({
      title: "Price Tracking Enabled",
      description: `You'll receive alerts when ${item.title}'s value changes.`,
      duration: 5000,
    });
  };

  const handlePlaceBid = () => {
    toast({
      title: "Bid Placed!",
      description: `Your bid of $${Number(bidAmount).toLocaleString()} for ${item.title} has been placed.`,
      duration: 5000,
    });
    setIsBidOpen(false);
    setBidAmount("");
  };

  const isPositive = (item.priceChange ?? 0) >= 0;
  const priceChangeAbs = Math.abs(item.priceChange ?? 0);

  const cardHeight = compact 
    ? 'h-[280px] xs:h-[300px] sm:h-[340px] md:h-[380px]' 
    : featured 
      ? 'h-[380px] xs:h-[420px] sm:h-[460px] md:h-[500px]' 
      : 'h-[320px] xs:h-[360px] sm:h-[400px] md:h-[440px]';
  
  const cardWidth = compact 
    ? 'w-[200px] xs:w-[220px] sm:w-[260px] md:w-[300px]' 
    : 'w-[240px] xs:w-[280px] sm:w-[320px] md:w-[360px]';

  return (
    <motion.div 
      className={`group relative overflow-hidden rounded-2xl flex-shrink-0 snap-start ${cardHeight} ${cardWidth}`}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        rotateY: 4,
        rotateX: -2,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#22252b] via-[#1a1d22] to-[#15171a]" />
      
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none holographic-glow-effect"
        style={{
          boxShadow: '0 0 30px rgba(139,92,246,0.5), 0 0 60px rgba(59,130,246,0.4), 0 0 90px rgba(139,92,246,0.3), inset 0 0 30px rgba(139,92,246,0.1)',
        }}
      />

      <div 
        className="absolute inset-0 rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden"
        style={{
          background: 'linear-gradient(125deg, transparent 0%, rgba(139,92,246,0.2) 20%, rgba(59,130,246,0.2) 40%, transparent 50%, rgba(6,182,212,0.2) 60%, rgba(139,92,246,0.2) 80%, transparent 100%)',
          backgroundSize: '200% 200%',
          animation: 'holographic-rainbow 4s ease-in-out infinite',
        }}
      />

      <div 
        className="absolute inset-[2px] rounded-2xl border border-transparent group-hover:border-purple-500/60 transition-all duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.2) 25%, transparent 50%, rgba(6,182,212,0.2) 75%, rgba(139,92,246,0.3) 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 3s ease infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '2px',
        }}
      />

      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110 saturate-[1.2]"
          style={{
            filter: 'contrast(1.05) saturate(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/70 to-transparent opacity-95" />
        
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.2) 50%, rgba(6,182,212,0.3) 100%)',
          }}
        />
      </div>

      <div className={`absolute inset-0 z-10 ${compact ? 'p-3 sm:p-4' : 'p-4 sm:p-5'} flex flex-col`}>
        <div className="flex justify-between items-start mb-auto">
          <Badge 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none uppercase tracking-wider text-[9px] sm:text-[10px] md:text-[11px] shadow-lg px-2 py-1 font-semibold"
            style={{
              textShadow: '0 0 10px rgba(139,92,246,0.8)',
              boxShadow: '0 0 20px rgba(139,92,246,0.4)',
            }}
          >
            {item.type}
          </Badge>
          
          <div className="flex gap-1.5">
            {item.isBidding && (
              <Badge variant="outline" className="bg-black/70 backdrop-blur-md border-purple-500 text-purple-400 animate-pulse text-[9px] sm:text-[10px] shadow-lg px-2 py-0.5">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-1.5 animate-ping" />
                LIVE
              </Badge>
            )}
          </div>
        </div>

        <div className="mt-auto transform transition-transform duration-300 translate-y-0 group-hover:translate-y-[-4px]">
          <h3 className={`text-white font-display font-bold leading-tight mb-1.5 ${compact ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'} line-clamp-2`}>
            {item.title}
          </h3>
          
          <p className={`text-gray-400 line-clamp-2 mb-3 ${compact ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'}`}>
            {item.description}
          </p>
          
          <div className={`flex items-center flex-wrap gap-2 ${compact ? 'mb-2' : 'mb-3'}`}>
            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] md:text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
              <ShieldCheck size={10} className="sm:w-3 sm:h-3" />
              <span>Authenticated</span>
            </div>
            <div className="flex items-center gap-1 text-[9px] sm:text-[10px] md:text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">
              <Video size={10} className="sm:w-3 sm:h-3" />
              <span>Video Proof</span>
            </div>
          </div>

          <div className={`bg-black/50 backdrop-blur-lg rounded-xl ${compact ? 'p-2.5 sm:p-3' : 'p-3 sm:p-4'} border border-white/10`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1">
                <Activity size={10} className="text-purple-400" />
                <span className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-wider">Price Momentum</span>
              </div>
              <span className={`text-[8px] sm:text-[10px] px-1.5 py-0.5 rounded ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {item.momentum ?? (isPositive ? 'Bullish' : 'Bearish')}
              </span>
            </div>
            
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className={`text-white font-bold font-display ${compact ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl sm:text-2xl md:text-3xl'}`}>
                  ${item.price.toLocaleString()}
                </p>
              </div>
              <div 
                className={`flex items-center gap-1 px-2 py-1 rounded-lg ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
                style={{
                  boxShadow: isPositive ? '0 0 15px rgba(34,197,94,0.2)' : '0 0 15px rgba(239,68,68,0.2)',
                }}
              >
                {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                <span className="text-xs sm:text-sm font-bold">{isPositive ? '+' : '-'}{priceChangeAbs}%</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2 text-[8px] sm:text-[10px] text-gray-500">
              <span>24h: <span className={isPositive ? 'text-green-400' : 'text-red-400'}>{isPositive ? '+' : '-'}{(priceChangeAbs * 0.3).toFixed(1)}%</span></span>
              <span>7d: <span className={isPositive ? 'text-green-400' : 'text-red-400'}>{isPositive ? '+' : '-'}{(priceChangeAbs * 0.7).toFixed(1)}%</span></span>
              <span className="hidden sm:inline">30d: <span className={isPositive ? 'text-green-400' : 'text-red-400'}>{isPositive ? '+' : '-'}{priceChangeAbs.toFixed(1)}%</span></span>
            </div>
          </div>

          <div className="flex gap-1.5 mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/10 hover:bg-purple-500/30 text-white border-none backdrop-blur-sm hover:text-purple-300 transition-all" 
              onClick={() => toast({ title: "Added to Favorites", description: `${item.title} added to your wishlist.` })}
            >
              <Heart size={12} />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white/10 hover:bg-blue-500/30 text-white border-none backdrop-blur-sm hover:text-blue-300 transition-all" 
              onClick={() => toast({ title: "Shared", description: "Link copied to clipboard." })}
            >
              <Share2 size={12} />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-purple-500/20 hover:bg-purple-500/40 text-purple-400 border-none backdrop-blur-sm transition-all" 
              onClick={handleTrackPrice}
            >
              <Eye size={12} />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/98 to-transparent backdrop-blur-xl border-t border-purple-500/30">
          <div className="grid grid-cols-2 gap-2 mb-2">
            {item.isBidding ? (
              <Dialog open={isBidOpen} onOpenChange={setIsBidOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 shadow-lg text-xs sm:text-sm font-semibold"
                    style={{ boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}
                  >
                    Place Bid
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#181A1E] border-white/10 text-white sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Place a Bid</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Enter your bid amount for {item.title}. Current highest: ${item.currentBid?.toLocaleString() ?? item.price.toLocaleString()}.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="amount" className="text-right text-gray-300">
                        Amount ($)
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0.00"
                        className="col-span-3 bg-[#22252b] border-white/10 text-white focus:ring-purple-500"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-500" onClick={handlePlaceBid}>Confirm Bid</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ) : (
              <Button 
                size="sm" 
                className="w-full bg-[#F5F5F5] text-[#181A1E] hover:bg-white font-bold shadow-lg text-xs sm:text-sm" 
                onClick={handleBuy}
              >
                Buy Now
              </Button>
            )}
            
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full border-white/20 text-white hover:bg-white/10 text-xs sm:text-sm" 
              onClick={handleTrade}
            >
              <ArrowRightLeft size={12} className="mr-1" />
              Trade
            </Button>
          </div>
          
          <Button 
            size="sm" 
            variant="outline" 
            className="w-full border-purple-500/30 text-purple-400 hover:bg-purple-500/20 text-xs sm:text-sm"
            onClick={handleTrackPrice}
          >
            <Eye size={12} className="mr-1" />
            Track Price
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes holographic-rainbow {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .holographic-glow-effect {
          animation: holographicGlowPulse 3s ease-in-out infinite;
        }
        @keyframes holographicGlowPulse {
          0%, 100% { 
            box-shadow: 0 0 25px rgba(139,92,246,0.4), 0 0 50px rgba(59,130,246,0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(139,92,246,0.6), 0 0 80px rgba(59,130,246,0.4), 0 0 120px rgba(6,182,212,0.2);
          }
        }
      `}</style>
    </motion.div>
  );
}
