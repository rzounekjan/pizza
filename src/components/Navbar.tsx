import React from 'react';
import { LanguageSelector } from './LanguageSelector';
import { LanguageCode, UI_TRANSLATIONS } from '../data/menu';
import { Heart, Coins } from 'lucide-react';

interface NavbarProps {
  currentLang: LanguageCode;
  onSelectLanguage: (code: LanguageCode) => void;
  currency: 'CZK' | 'EUR';
  onToggleCurrency: () => void;
  wishlistCount: number;
  totalCzk: number;
  totalEur: number;
  onOpenWishlist: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLanguage,
  currency,
  onToggleCurrency,
  wishlistCount,
  totalCzk,
  totalEur,
  onOpenWishlist,
  onSelectCategory,
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.cs;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#141210]/95 backdrop-blur-md border-b border-[#2e2822] transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base xs:text-lg sm:text-2xl font-serif font-bold tracking-tight text-[#f2ece2] hover:text-[#c9a96e] transition-colors whitespace-nowrap shrink-0"
        >
          Pizza Pasta Caffè
        </a>

        {/* Zone 2: Clean text navigation links for tablet/desktop */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#b5aa99]">
          <button
            onClick={() => onSelectCategory('all')}
            className="hover:text-[#f2ece2] transition-colors cursor-pointer"
          >
            {t.allCategories}
          </button>
          <button
            onClick={() => onSelectCategory('pizza')}
            className="hover:text-[#f2ece2] transition-colors cursor-pointer"
          >
            Pizza & Pasta
          </button>
          <button
            onClick={() => onSelectCategory('wine')}
            className="hover:text-[#f2ece2] transition-colors cursor-pointer"
          >
            Vino & Birra
          </button>
          <a
            href="#restaurant-info"
            className="hover:text-[#f2ece2] transition-colors"
          >
            Kontakt
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Currency, Language, Wishlist trigger) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Currency Switcher */}
          <button
            type="button"
            onClick={onToggleCurrency}
            className="flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-[#3a342c] bg-[#1a1714] text-[#ede8df] hover:border-[#c9a96e] hover:bg-[#25201b] transition-all text-xs font-semibold cursor-pointer tabular-nums"
            title={`Přepnout měnu (aktuálně ${currency})`}
            aria-label="Toggle currency"
          >
            <Coins className="w-3.5 h-3.5 text-[#c9a96e]" />
            <span className="text-[11px] sm:text-xs">{currency}</span>
          </button>

          {/* Language Selector */}
          <LanguageSelector
            currentLang={currentLang}
            onSelectLanguage={onSelectLanguage}
          />

          {/* Wishlist CTA Button with Live Sum */}
          <button
            type="button"
            onClick={onOpenWishlist}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg font-medium text-xs transition-all cursor-pointer whitespace-nowrap shadow-sm ${
              wishlistCount > 0
                ? 'bg-[#c9a96e] text-[#121110] hover:bg-[#d8b97e] font-semibold ring-2 ring-[#c9a96e]/30'
                : 'bg-[#221e1a] text-[#ede8df] hover:bg-[#2c2621] border border-[#3d362e]'
            }`}
            aria-label={t.wishlist}
          >
            <Heart
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${
                wishlistCount > 0 ? 'fill-[#121110] text-[#121110] scale-110' : 'text-[#c9a96e]'
              }`}
            />
            <span className="hidden sm:inline">{t.wishlist}</span>
            <span
              className={`px-1.5 py-0.2 sm:py-0.5 text-[10px] sm:text-[11px] font-bold rounded-md tabular-nums ${
                wishlistCount > 0
                  ? 'bg-[#121110] text-[#c9a96e]'
                  : 'bg-[#2d2721] text-[#b5aa99]'
              }`}
            >
              {wishlistCount}
            </span>
            {wishlistCount > 0 && (
              <span className="hidden md:inline text-xs font-bold tabular-nums pl-1 border-l border-[#121110]/20">
                {currency === 'CZK' ? `${totalCzk.toLocaleString()} CZK` : `€ ${totalEur.toFixed(2)}`}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
