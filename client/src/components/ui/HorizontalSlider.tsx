import { useRef, useState, useEffect, ReactNode, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalSliderProps {
  children: ReactNode;
  title: string;
  icon?: ReactNode;
  showArrows?: boolean;
}

export function HorizontalSlider({ 
  children, 
  title, 
  icon,
  showArrows = true 
}: HorizontalSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        ref.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [children, checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
      }
    }
  };

  return (
    <div className="relative group/slider">
      <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          {icon && (
            <span className="text-[#AC0808] [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7">
              {icon}
            </span>
          )}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white">
            {title}
          </h2>
        </div>
        
        {showArrows && (
          <div className="flex gap-2">
            <motion.button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
                canScrollLeft 
                  ? 'bg-white/10 hover:bg-[#AC0808] text-white border-white/20 hover:border-[#AC0808]' 
                  : 'bg-white/5 text-gray-600 border-white/10 cursor-not-allowed'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
                canScrollRight 
                  ? 'bg-white/10 hover:bg-[#AC0808] text-white border-white/20 hover:border-[#AC0808]' 
                  : 'bg-white/5 text-gray-600 border-white/10 cursor-not-allowed'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        )}
      </div>

      <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-auto scrollbar-hide pb-4 sm:pb-6 scroll-smooth snap-x snap-mandatory touch-pan-x select-none"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab',
          }}
        >
          {children}
        </div>

        <div className="hidden sm:block absolute right-0 top-0 bottom-6 w-16 sm:w-24 bg-gradient-to-l from-[#181A1E] to-transparent pointer-events-none z-10" />
        <div className="hidden sm:block absolute left-0 top-0 bottom-6 w-16 sm:w-24 bg-gradient-to-r from-[#181A1E] to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
