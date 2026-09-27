import React, { useRef, useEffect, useState, useCallback } from 'react';
import { CATEGORIES, LanguageCode, UI_TRANSLATIONS, MenuItem } from '../data/menu';
import {
  Search,
  X,
  Utensils,
  Soup,
  UtensilsCrossed,
  Pizza,
  Salad,
  Cake,
  Wine,
  Beer,
  Coffee,
  GlassWater,
  Flame,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface CategoryFilterProps {
  currentLang: LanguageCode;
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  items: MenuItem[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-3.5 h-3.5" />,
  Soup: <Soup className="w-3.5 h-3.5" />,
  UtensilsCrossed: <UtensilsCrossed className="w-3.5 h-3.5" />,
  Pizza: <Pizza className="w-3.5 h-3.5" />,
  Salad: <Salad className="w-3.5 h-3.5" />,
  Cake: <Cake className="w-3.5 h-3.5" />,
  Wine: <Wine className="w-3.5 h-3.5" />,
  Beer: <Beer className="w-3.5 h-3.5" />,
  Coffee: <Coffee className="w-3.5 h-3.5" />,
  GlassWater: <GlassWater className="w-3.5 h-3.5" />,
  Flame: <Flame className="w-3.5 h-3.5" />,
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  currentLang,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  items,
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.cs;
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isNudging, setIsNudging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const hasTriggeredRef = useRef(false);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasMovedRef = useRef(false);

  // Check scroll boundary to update arrow buttons
  const checkScrollBounds = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollBounds();
    el.addEventListener('scroll', checkScrollBounds, { passive: true });
    window.addEventListener('resize', checkScrollBounds, { passive: true });

    return () => {
      el.removeEventListener('scroll', checkScrollBounds);
      window.removeEventListener('resize', checkScrollBounds);
    };
  }, [checkScrollBounds]);

  // Support Mouse Wheel horizontal scrolling on PC / Desktop
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // If content overflows horizontally, convert vertical wheel to horizontal scroll
      if (el.scrollWidth > el.clientWidth) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          const maxScroll = el.scrollWidth - el.clientWidth;
          const isAtStart = el.scrollLeft <= 0 && e.deltaY < 0;
          const isAtEnd = el.scrollLeft >= maxScroll - 1 && e.deltaY > 0;

          if (!isAtStart && !isAtEnd) {
            e.preventDefault();
            el.scrollLeft += e.deltaY * 1.2;
            checkScrollBounds();
          }
        }
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [checkScrollBounds]);

  // Mouse Drag-to-Scroll handlers (for desktop click and drag)
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    isMouseDownRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftStartRef.current = el.scrollLeft;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;

    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true;
    }
    el.scrollLeft = scrollLeftStartRef.current - walk;
    checkScrollBounds();
  };

  const handleMouseUpOrLeave = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
  };

  // Scroll buttons (Left / Right)
  const handleScrollByButton = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const offset = direction === 'left' ? -300 : 300;
    el.scrollBy({ left: offset, behavior: 'smooth' });
    setTimeout(checkScrollBounds, 350);
  };

  // Auto-scroll active category into view when selected
  const handleCategoryClick = (catId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    if (hasMovedRef.current) {
      // User was dragging with mouse, do not treat as button click
      return;
    }
    onSelectCategory(catId);
    event.currentTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  // Trigger 3x left-right slide animation ONLY when the category slider reaches the middle of the screen
  useEffect(() => {
    const checkMiddleScreen = () => {
      if (hasTriggeredRef.current) return;
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const screenMid = window.innerHeight * 0.5;

      if (rect.top <= screenMid && rect.bottom >= 0) {
        hasTriggeredRef.current = true;
        triggerTripleNudge();
      }
    };

    const triggerTripleNudge = () => {
      setIsNudging(true);
      const container = scrollContainerRef.current;

      if (container) {
        container.scrollTo({ left: 100, behavior: 'smooth' });
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setTimeout(() => {
            container.scrollTo({ left: 100, behavior: 'smooth' });
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: 'smooth' });
              setTimeout(() => {
                container.scrollTo({ left: 100, behavior: 'smooth' });
                setTimeout(() => {
                  container.scrollTo({ left: 0, behavior: 'smooth' });
                }, 380);
              }, 380);
            }, 380);
          }, 380);
        }, 380);
      }

      setTimeout(() => {
        setIsNudging(false);
      }, 2500);
    };

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined' && sectionRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTriggeredRef.current) {
              hasTriggeredRef.current = true;
              triggerTripleNudge();
            }
          });
        },
        {
          rootMargin: '0px 0px -50% 0px',
          threshold: 0,
        }
      );
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', checkMiddleScreen, { passive: true });
    window.addEventListener('resize', checkMiddleScreen, { passive: true });
    checkMiddleScreen();

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', checkMiddleScreen);
      window.removeEventListener('resize', checkMiddleScreen);
    };
  }, []);

  // Calculate item counts per category
  const counts: Record<string, number> = {
    all: items.length,
  };
  items.forEach((item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });

  return (
    <div ref={sectionRef} className="space-y-3 sm:space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto px-1 sm:px-0">
        <div className="absolute inset-y-0 left-1 sm:left-0 pl-3.5 flex items-center pointer-events-none text-[#8e8374]">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full pl-10 pr-10 py-2 sm:py-2.5 bg-[#1a1714] border border-[#383129] rounded-xl text-base sm:text-sm text-[#ede8df] placeholder-[#7d7264] focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e] transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-1 sm:right-0 pr-3 flex items-center text-[#8e8374] hover:text-[#ede8df] cursor-pointer"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Tabs Section with Desktop Arrow Controls and Drag-to-Scroll */}
      <div className="relative flex items-center gap-1.5 sm:gap-2">
        {/* Left Scroll Arrow Button for Desktop / PC */}
        <button
          type="button"
          onClick={() => handleScrollByButton('left')}
          disabled={!canScrollLeft}
          className={`hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#1b1714] border border-[#383026] text-[#c9a96e] transition-all shadow-md shrink-0 cursor-pointer ${
            canScrollLeft
              ? 'opacity-100 hover:bg-[#2b241d] hover:border-[#c9a96e] hover:scale-105 active:scale-95'
              : 'opacity-25 cursor-not-allowed pointer-events-none'
          }`}
          aria-label="Posunout kategorie doleva"
          title="Posunout doleva"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex-1 flex items-center gap-1.5 overflow-x-auto pb-2.5 pt-1 px-1 select-none touch-pan-x category-scrollbar ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab md:cursor-auto'
          }`}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div
            className={`flex items-center gap-1.5 shrink-0 ${
              isNudging ? 'animate-nudge-slider-3x' : ''
            }`}
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = counts[cat.id] || 0;
              const label = cat.names[currentLang] || cat.names.cs;

              return (
                <button
                  key={cat.id}
                  onClick={(e) => handleCategoryClick(cat.id, e)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#c9a96e] text-[#121110] font-semibold shadow-sm scale-102 ring-1 ring-[#c9a96e]/50'
                      : 'bg-[#181512] text-[#b8ad9c] hover:bg-[#25201b] hover:text-[#f2ece2] border border-[#2d2721]'
                  }`}
                >
                  <span className={isActive ? 'text-[#121110]' : 'text-[#c9a96e]'}>
                    {ICON_MAP[cat.icons] || <Utensils className="w-3.5 h-3.5" />}
                  </span>
                  <span>{label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full tabular-nums ${
                      isActive ? 'bg-[#121110]/20 text-[#121110]' : 'bg-[#29231d] text-[#8e8374]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Scroll Arrow Button for Desktop / PC */}
        <button
          type="button"
          onClick={() => handleScrollByButton('right')}
          disabled={!canScrollRight}
          className={`hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#1b1714] border border-[#383026] text-[#c9a96e] transition-all shadow-md shrink-0 cursor-pointer ${
            canScrollRight
              ? 'opacity-100 hover:bg-[#2b241d] hover:border-[#c9a96e] hover:scale-105 active:scale-95'
              : 'opacity-25 cursor-not-allowed pointer-events-none'
          }`}
          aria-label="Posunout kategorie doprava"
          title="Posunout doprava"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
