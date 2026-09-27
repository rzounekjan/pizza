import React from 'react';
import { LanguageCode, UI_TRANSLATIONS } from '../data/menu';
import { Heart, ChevronRight } from 'lucide-react';

interface FloatingWishlistBarProps {
  wishlistCount: number;
  totalCzk: number;
  totalEur: number;
  currency: 'CZK' | 'EUR';
  currentLang: LanguageCode;
  onOpenWishlist: () => void;
}

export const FloatingWishlistBar: React.FC<FloatingWishlistBarProps> = ({
  wishlistCount,
  totalCzk,
  totalEur,
  currency,
  currentLang,
  onOpenWishlist,
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.cs;

  if (wishlistCount === 0) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-30 sm:max-w-xs">
      <button
        type="button"
        onClick={onOpenWishlist}
        className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 px-4 py-3 bg-[#c9a96e] hover:bg-[#d8b97e] text-[#121110] font-bold text-xs rounded-2xl shadow-2xl shadow-black/80 ring-2 ring-black/40 transition-all transform hover:scale-102 active:scale-98 cursor-pointer"
        aria-label={t.viewWishlist}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <Heart className="w-5 h-5 fill-current" />
            <span className="absolute -top-1.5 -right-2 bg-[#121110] text-[#c9a96e] text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
              {wishlistCount}
            </span>
          </div>

          <div className="text-left pl-2 border-l border-[#121110]/25">
            <div className="text-[10px] uppercase font-semibold text-[#121110]/80 leading-tight">
              {t.totalSum}
            </div>
            <div className="font-mono text-xs sm:text-sm font-extrabold tabular-nums">
              {currency === 'CZK' ? `${totalCzk.toLocaleString()} CZK` : `€ ${totalEur.toFixed(2)}`}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider pl-2">
          <span>{t.wishlist}</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
};
