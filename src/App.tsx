/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  MENU_ITEMS,
  CATEGORIES,
  UI_TRANSLATIONS,
  LanguageCode,
  MenuItem,
} from './data/menu';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { DishCard } from './components/DishCard';
import { WishlistDrawer } from './components/WishlistDrawer';
import { FloatingWishlistBar } from './components/FloatingWishlistBar';
import { Footer } from './components/Footer';
import { Heart, Search, Sparkles, FilterX } from 'lucide-react';

const WISHLIST_STORAGE_KEY = 'ppc_wishlist_items_v1';
const LANG_STORAGE_KEY = 'ppc_language_v1';
const CURRENCY_STORAGE_KEY = 'ppc_currency_v1';

export default function App() {
  // Language State
  const [currentLang, setCurrentLang] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved && ['cs', 'en', 'de', 'it', 'fr', 'es', 'pl', 'kr', 'cn', 'jp', 'ua', 'hu', 'pt'].includes(saved)) {
        return saved as LanguageCode;
      }
    } catch {
      // fallback
    }
    return 'cs';
  });

  // Currency State
  const [currency, setCurrency] = useState<'CZK' | 'EUR'>(() => {
    try {
      const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (saved === 'CZK' || saved === 'EUR') return saved;
    } catch {
      // fallback
    }
    return 'CZK';
  });

  // Wishlist State: itemId -> quantity
  const [wishlist, setWishlist] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return {};
  });

  // Category and Search Filter State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);

  const menuSectionRef = useRef<HTMLDivElement>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, currentLang);
    } catch (e) {
      console.error(e);
    }
  }, [currentLang]);

  useEffect(() => {
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    } catch (e) {
      console.error(e);
    }
  }, [currency]);

  // Wishlist actions
  const handleAddToCart = (id: string) => {
    setWishlist((prev) => {
      const current = prev[id] || 0;
      return {
        ...prev,
        [id]: current + 1,
      };
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setWishlist((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return {
        ...prev,
        [id]: current - 1,
      };
    });
  };

  const handleClearWishlist = () => {
    setWishlist({});
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'CZK' ? 'EUR' : 'CZK'));
  };

  // Grand total calculations
  const { wishlistCount, totalCzk, totalEur } = useMemo(() => {
    let count = 0;
    let czk = 0;

    Object.entries(wishlist).forEach(([id, qty]) => {
      if (qty > 0) {
        const prod = MENU_ITEMS.find(
          (m) => m.id.toLowerCase() === id.toLowerCase() || m.key === id
        );
        if (prod) {
          count += qty;
          czk += prod.prices.czk * qty;
        }
      }
    });

    const eur = czk / 23;
    return { wishlistCount: count, totalCzk: czk, totalEur: eur };
  }, [wishlist]);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const translation = item.translations[currentLang] || item.translations.cs;
        const nameMatch = translation.name.toLowerCase().includes(q);
        const descMatch = translation.description.toLowerCase().includes(q);
        const idMatch = item.id.toLowerCase().includes(q);
        const csNameMatch = item.translations.cs.name.toLowerCase().includes(q);
        const enNameMatch = item.translations.en.name.toLowerCase().includes(q);

        if (!nameMatch && !descMatch && !idMatch && !csNameMatch && !enNameMatch) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery, currentLang]);

  // Group items by category for structured display
  const groupedCategories = useMemo(() => {
    const groups: { categoryId: string; title: string; items: MenuItem[] }[] = [];

    CATEGORIES.filter((c) => c.id !== 'all').forEach((cat) => {
      const catItems = filteredItems.filter((item) => item.category === cat.id);
      if (catItems.length > 0) {
        groups.push({
          categoryId: cat.id,
          title: cat.names[currentLang] || cat.names.cs,
          items: catItems,
        });
      }
    });

    return groups;
  }, [filteredItems, currentLang]);

  const scrollToMenu = () => {
    if (menuSectionRef.current) {
      menuSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryWithScroll = (catId: string) => {
    setSelectedCategory(catId);
    scrollToMenu();
  };

  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.cs;

  return (
    <div className="min-h-screen bg-[#11100e] text-[#ede8df] flex flex-col selection:bg-[#c9a96e]/30 selection:text-[#f8ecd9]">
      {/* Top Navigation */}
      <Navbar
        currentLang={currentLang}
        onSelectLanguage={setCurrentLang}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        wishlistCount={wishlistCount}
        totalCzk={totalCzk}
        totalEur={totalEur}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSelectCategory={handleSelectCategoryWithScroll}
      />

      {/* Hero Showcase */}
      <Hero
        currentLang={currentLang}
        wishlistCount={wishlistCount}
        totalCzk={totalCzk}
        totalEur={totalEur}
        currency={currency}
        totalItemsCount={MENU_ITEMS.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onExploreMenu={scrollToMenu}
      />

      {/* Main Interactive Menu Section */}
      <main ref={menuSectionRef} className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Sticky Filters & Search */}
        <div className="sticky top-16 sm:top-18 z-30 bg-[#11100e]/95 backdrop-blur-md py-3 sm:py-4 mb-6 sm:mb-8 border-b border-[#29221b]">
          <CategoryFilter
            currentLang={currentLang}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            items={MENU_ITEMS}
          />

          {/* Results count & Quick Summary */}
          <div className="flex items-center justify-between mt-2.5 sm:mt-3 text-xs text-[#8a7e70] px-1">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono font-semibold text-[#ede8df] tabular-nums">
                {filteredItems.length}
              </span>
              <span>{t.dishesFound}</span>
            </div>

            {wishlistCount > 0 && (
              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                className="flex items-center gap-1.5 text-[#c9a96e] hover:text-[#d8b97e] font-semibold cursor-pointer"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>
                  {t.wishlist}: {wishlistCount} (
                  {currency === 'CZK'
                    ? `${totalCzk.toLocaleString()} CZK`
                    : `€ ${totalEur.toFixed(2)}`}
                  )
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Empty Search Result State */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#1e1915] flex items-center justify-center text-[#736656]">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-serif font-bold text-[#ede8df]">
              {t.noDishesFound}
            </h3>
            <p className="text-xs text-[#8e8172] max-w-md mx-auto">
              Zkuste změnit hledaný výraz nebo vybrat jinou kategorii v jídelním lístku.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#26201b] hover:bg-[#322a23] text-[#ede8df] text-xs font-semibold border border-[#3d3328] transition-colors cursor-pointer"
            >
              <FilterX className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>{t.resetFilters}</span>
            </button>
          </div>
        ) : selectedCategory === 'all' && !searchQuery ? (
          /* Grouped by Section (Trattoria Experience) */
          <div className="space-y-12 sm:space-y-16">
            {groupedCategories.map((group) => (
              <section key={group.categoryId} className="scroll-mt-36">
                <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-[#2b241d]">
                  <div>
                    <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#fbf7f0] tracking-tight">
                      {group.title}
                    </h2>
                    <p className="text-xs text-[#8f8272] mt-0.5 sm:mt-1">
                      {group.items.length} {t.itemsCount}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                  {group.items.map((item) => (
                    <DishCard
                      key={item.id}
                      item={item}
                      currentLang={currentLang}
                      currency={currency}
                      quantityInWishlist={wishlist[item.id] || 0}
                      onAddToWishlist={handleAddToCart}
                      onRemoveFromWishlist={handleRemoveFromCart}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Filtered Flat Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredItems.map((item) => (
              <DishCard
                key={item.id}
                item={item}
                currentLang={currentLang}
                currency={currency}
                quantityInWishlist={wishlist[item.id] || 0}
                onAddToWishlist={handleAddToCart}
                onRemoveFromWishlist={handleRemoveFromCart}
              />
            ))}
          </div>
        )}
      </main>

      {/* Floating Sticky Wishlist Bar */}
      <FloatingWishlistBar
        wishlistCount={wishlistCount}
        totalCzk={totalCzk}
        totalEur={totalEur}
        currency={currency}
        currentLang={currentLang}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Wishlist Drawer & Summary Calculation */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        items={MENU_ITEMS}
        currentLang={currentLang}
        currency={currency}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearWishlist={handleClearWishlist}
      />

      {/* Footer with Contact and 13 Language Links */}
      <Footer
        currentLang={currentLang}
        onSelectLanguage={setCurrentLang}
      />
    </div>
  );
}
