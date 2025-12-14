import { Navbar } from "@/components/layout/Navbar";
import { mockSellers, mockCollectors, mockDiscussions } from "@/lib/mockData";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Trophy, 
  Package, 
  Puzzle, 
  Globe, 
  BarChart3,
  Users,
  MessageSquare,
  Star,
  Verified,
  Sparkles,
  TrendingUp,
  Zap,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function FloatingHologram({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className={`absolute pointer-events-none ${className}`}
    >
      <div className="relative">
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 animate-float-slow">
          <div className="absolute inset-0 rounded-2xl holographic-border opacity-50" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 animate-pulse-ring" />
        </div>
      </div>
    </motion.div>
  );
}

function FloatingCard({ className, delay = 0, image }: { className?: string; delay?: number; image?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute pointer-events-none ${className}`}
    >
      <div className="relative animate-float-delayed">
        <div className="w-24 h-32 md:w-32 md:h-44 rounded-xl bg-gradient-to-br from-[#22252b] to-[#15171a] border border-white/10 overflow-hidden shadow-2xl">
          {image && (
            <img src={image} alt="" className="w-full h-full object-cover opacity-60" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute inset-0 rounded-xl animate-holographic-glow opacity-40" style={{
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.2)'
          }} />
        </div>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b0d] via-[#0f1115] to-[#181A1E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(139,92,246,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(172,8,8,0.1)_0%,_transparent_60%)]" />
        
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
          }}
        />
        
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-pulse-ring" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-ring" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[130px] animate-pulse-ring" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-[#AC0808]/20 rounded-full blur-[100px]" />
      </div>

      <FloatingHologram className="top-20 left-[5%] hidden lg:block" delay={0.5} />
      <FloatingHologram className="top-40 right-[8%] hidden lg:block" delay={0.8} />
      <FloatingCard className="bottom-32 left-[10%] hidden lg:block" delay={1} image="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=200&h=300&fit=crop" />
      <FloatingCard className="top-1/3 right-[12%] hidden lg:block" delay={1.2} image="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=300&fit=crop" />

      <div className="relative z-10 container mx-auto px-4 text-center py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-white/10 rounded-full"
          >
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm md:text-base text-gray-300 font-medium">The Future of Sports Collectibles</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.1]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              Track, Analyze & Trade
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
            >
              Sports Memorabilia
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="block text-gray-300"
            >
              Like Digital Assets
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 md:mb-14 font-light px-4 leading-relaxed"
          >
            Real-time price tracking, verified collectors, and a global marketplace for premium sports collectibles.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center px-4"
          >
            <Link href="/marketplace">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 font-bold px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl rounded-full shadow-2xl transition-all hover:scale-105 holographic-glow-hover"
                style={{
                  boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.2)'
                }}
              >
                Explore Market <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
            <Link href="/search">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white font-medium px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl rounded-full backdrop-blur-md bg-white/5 holographic-glow-hover"
              >
                View Collections
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mt-14 md:mt-20 text-gray-400"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm md:text-base">Live Trading</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Verified size={16} className="text-blue-400" />
              <span className="text-sm md:text-base">Verified Sellers</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Star size={16} className="text-yellow-400" />
              <span className="text-sm md:text-base">10K+ Collectors</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-500/50 flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-purple-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ConceptSection() {
  const concepts = [
    {
      icon: <BarChart3 size={32} />,
      title: "Price Movement Algorithm",
      description: "Track real-time market trends with our proprietary price analysis. See exactly how your assets perform over time.",
      gradient: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/20"
    },
    {
      icon: <Trophy size={32} />,
      title: "Player Stats Integration",
      description: "Athlete performance data directly affects collectible values. Stay ahead with live sports analytics.",
      gradient: "from-yellow-500 to-orange-500",
      bgGlow: "bg-yellow-500/20"
    },
    {
      icon: <Package size={32} />,
      title: "Buy / Sell / Trade / Hold",
      description: "Manage your collection like a portfolio. Make strategic decisions based on market momentum.",
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20"
    },
    {
      icon: <Puzzle size={32} />,
      title: "Multi-Category Collections",
      description: "From trading cards to signed jerseys, match balls to vintage photos. All asset classes in one place.",
      gradient: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20"
    },
    {
      icon: <Globe size={32} />,
      title: "Community & Network",
      description: "Connect with collectors, businesses, and sellers worldwide. Build your reputation in the market.",
      gradient: "from-[#AC0808] to-red-500",
      bgGlow: "bg-[#AC0808]/20"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0d] via-[#0f1115] to-[#181A1E]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.08)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <Zap size={14} className="text-purple-400" />
            <span className="text-sm text-purple-300">Platform Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6">How It Works</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A revolutionary platform that treats collectibles as tradeable assets with real market dynamics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className={`absolute inset-0 ${concept.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#1a1d22] to-[#15171a] border border-white/5 group-hover:border-white/10 transition-all duration-500 h-full holographic-glow-hover">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${concept.gradient} mb-6 text-white shadow-lg`}>
                  {concept.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{concept.title}</h3>
                <p className="text-gray-400 leading-relaxed">{concept.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "$2.5B+", label: "Total Volume", icon: <TrendingUp size={24} /> },
    { value: "10K+", label: "Active Collectors", icon: <Users size={24} /> },
    { value: "50K+", label: "Items Listed", icon: <Package size={24} /> },
    { value: "99.9%", label: "Secure Trades", icon: <Shield size={24} /> },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 holographic-glow-hover"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopCollectorsSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#181A1E] to-[#0f1115]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <Users size={28} className="text-purple-400" />
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white">Top Collectors</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {mockCollectors.map((collector, index) => (
            <motion.div
              key={collector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-4 md:p-5 rounded-2xl bg-gradient-to-br from-[#22252b] to-[#1a1d22] border border-white/5 hover:border-purple-500/30 transition-all duration-300 holographic-glow-hover"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-3">
                  <img
                    src={collector.avatar}
                    alt={collector.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-purple-500/50"
                  />
                  {collector.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5">
                      <Verified size={10} className="text-white" />
                    </div>
                  )}
                </div>
                <h4 className="text-white font-bold text-sm truncate w-full">{collector.name}</h4>
                <p className="text-gray-500 text-xs truncate w-full mb-2">{collector.handle}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{collector.collections} items</span>
                  <span>{(collector.followers / 1000).toFixed(1)}K</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscussionsSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0f1115]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <MessageSquare size={28} className="text-blue-400" />
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white">Community Discussions</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {mockDiscussions.map((discussion, index) => (
            <motion.div
              key={discussion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-5 md:p-6 rounded-2xl bg-gradient-to-br from-[#22252b] to-[#1a1d22] border border-white/5 hover:border-blue-500/30 transition-all duration-300 cursor-pointer holographic-glow-hover"
            >
              <div className="flex items-start gap-4">
                <img
                  src={discussion.avatar}
                  alt={discussion.author}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-white/10"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-base md:text-lg group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                    {discussion.title}
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.replies} replies</span>
                    <span>•</span>
                    <span>{discussion.timestamp}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.2)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 md:mb-6">
            Ready to Start Your Portfolio?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-12 max-w-2xl mx-auto">
            Join thousands of collectors trading securely on the world's premier sports memorabilia marketplace.
          </p>
          <Link href="/marketplace">
            <Button 
              size="lg"
              className="bg-white text-[#181A1E] hover:bg-gray-100 font-bold px-10 md:px-14 py-6 md:py-8 text-lg md:text-xl rounded-full shadow-2xl transition-all hover:scale-105"
              style={{
                boxShadow: '0 0 60px rgba(255, 255, 255, 0.3)'
              }}
            >
              Get Started <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0b0d] pb-20 md:pb-0">
      <Navbar />
      
      <main>
        <HeroSection />
        <ConceptSection />
        <StatsSection />
        <TopCollectorsSection />
        <DiscussionsSection />
        <CTASection />
      </main>
    </div>
  );
}
