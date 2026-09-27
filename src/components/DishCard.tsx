import React, { useState } from 'react';
import { MenuItem, LanguageCode, UI_TRANSLATIONS } from '../data/menu';
import { Heart, Plus, Minus, Pizza, UtensilsCrossed, Wine, Coffee, Beer, Sparkles } from 'lucide-react';

interface DishCardProps {
  item: MenuItem;
  currentLang: LanguageCode;
  currency: 'CZK' | 'EUR';
  quantityInWishlist: number;
  onAddToWishlist: (itemId: string) => void;
  onRemoveFromWishlist: (itemId: string) => void;
}

export const DishCard: React.FC<DishCardProps> = ({
  item,
  currentLang,
  currency,
  quantityInWishlist,
  onAddToWishlist,
  onRemoveFromWishlist,
}) => {
  const [imageError, setImageError] = useState(false);
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.cs;

  const translation = item.translations[currentLang] || item.translations.cs;
  const name = translation?.name || item.id;
  const description = translation?.description || '';

  const pricePrimary = currency === 'CZK' ? `${item.prices.czk.toLocaleString()} CZK` : `€ ${item.prices.eur.toFixed(2)}`;
  const priceSecondary = currency === 'CZK' ? `€ ${item.prices.eur.toFixed(2)}` : `${item.prices.czk.toLocaleString()} CZK`;

  const isInWishlist = quantityInWishlist > 0;
  const hasPhoto = Boolean(item.image && !imageError);

  // Fallback category icon
  const getCategoryIcon = () => {
    switch (item.category) {
      case 'pizza':
        return <Pizza className="w-4 h-4 text-[#c9a96e]" />;
      case 'pasta':
        return <UtensilsCrossed className="w-4 h-4 text-[#c9a96e]" />;
      case 'wine':
        return <Wine className="w-4 h-4 text-[#c9a96e]" />;
      case 'beer':
        return <Beer className="w-4 h-4 text-[#c9a96e]" />;
      case 'hot-drinks':
        return <Coffee className="w-4 h-4 text-[#c9a96e]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#c9a96e]" />;
    }
  };

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#181512] border transition-all duration-200 overflow-hidden ${
        isInWishlist
          ? 'border-[#c9a96e]/60 shadow-lg shadow-[#c9a96e]/5 ring-1 ring-[#c9a96e]/30'
          : 'border-[#2d2721] hover:border-[#423930] hover:shadow-md sm:hover:-translate-y-0.5'
      }`}
    >
      {hasPhoto ? (
        /* Dish Card with Photo */
        <div className="relative w-full h-40 sm:h-48 bg-[#201b17] overflow-hidden flex items-center justify-center">
          <img
            src={item.image}
            alt={name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Quick Heart Bookmark Toggle on Image */}
          <button
            type="button"
            onClick={() => {
              if (isInWishlist) {
                onRemoveFromWishlist(item.id);
              } else {
                onAddToWishlist(item.id);
              }
            }}
            className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all cursor-pointer shadow-sm min-h-[36px] min-w-[36px] flex items-center justify-center ${
              isInWishlist
                ? 'bg-[#c9a96e] text-[#121110] scale-105 sm:scale-110 shadow-md'
                : 'bg-[#121110]/75 text-[#ede8df] hover:bg-[#121110] hover:text-[#c9a96e]'
            }`}
            aria-label={isInWishlist ? t.removeFromWishlist : t.addToWishlist}
            title={isInWishlist ? t.removeFromWishlist : t.addToWishlist}
          >
            <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
          </button>

          {/* In-Wishlist Indicator Ribbon */}
          {isInWishlist && (
            <div className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded-md bg-[#121110]/85 backdrop-blur-sm border border-[#c9a96e]/40 text-[#c9a96e] text-[11px] font-semibold flex items-center gap-1">
              <span>{t.inWishlist}</span>
              <span className="font-mono tabular-nums">×{quantityInWishlist}</span>
            </div>
          )}
        </div>
      ) : (
        /* Beverage / No-Photo Card with clean icon badge and bookmark header */
        <div className="p-3.5 sm:p-4 pb-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#221c17] border border-[#342b22] text-[#c9a96e]">
              {getCategoryIcon()}
            </div>
            {isInWishlist && (
              <span className="px-2 py-0.5 rounded-md bg-[#251e18] border border-[#c9a96e]/40 text-[#c9a96e] text-[11px] font-semibold flex items-center gap-1">
                <span>{t.inWishlist}</span>
                <span className="font-mono tabular-nums">×{quantityInWishlist}</span>
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              if (isInWishlist) {
                onRemoveFromWishlist(item.id);
              } else {
                onAddToWishlist(item.id);
              }
            }}
            className={`p-2 rounded-full transition-all cursor-pointer shadow-sm min-h-[36px] min-w-[36px] flex items-center justify-center ${
              isInWishlist
                ? 'bg-[#c9a96e] text-[#121110] scale-105 shadow-md'
                : 'bg-[#221c17] text-[#ede8df] hover:bg-[#2c241e] hover:text-[#c9a96e] border border-[#342b22]'
            }`}
            aria-label={isInWishlist ? t.removeFromWishlist : t.addToWishlist}
            title={isInWishlist ? t.removeFromWishlist : t.addToWishlist}
          >
            <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
          </button>
        </div>
      )}

      {/* Card Content */}
      <div className={`p-3.5 sm:p-5 flex-1 flex flex-col justify-between ${!hasPhoto ? 'pt-2.5 sm:pt-3' : ''}`}>
        <div>
          {/* Header & Dish Name */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#ede8df] leading-snug group-hover:text-[#f8edd9] transition-colors">
              {name}
            </h3>
          </div>

          {/* Description or Meta */}
          {description ? (
            <p className="text-xs text-[#9e9282] line-clamp-2 leading-relaxed mb-3">
              {description}
            </p>
          ) : (
            <div className="h-3 sm:h-4 mb-3" />
          )}
        </div>

        {/* Bottom Module: Pricing and Wishlist Interactive Button */}
        <div className="pt-2.5 sm:pt-3 border-t border-[#26211c]">
          <div className="flex items-baseline justify-between mb-2.5 sm:mb-3">
            <div>
              <div className="text-base font-bold font-mono text-[#f3ece0] tabular-nums">
                {pricePrimary}
              </div>
              <div className="text-[11px] font-mono text-[#8a7e70] tabular-nums">
                {priceSecondary}
              </div>
            </div>

            {isInWishlist && (
              <div className="text-right">
                <div className="text-xs text-[#c9a96e] font-semibold font-mono tabular-nums">
                  = {currency === 'CZK' ? `${(item.prices.czk * quantityInWishlist).toLocaleString()} CZK` : `€ ${(item.prices.eur * quantityInWishlist).toFixed(2)}`}
                </div>
                <div className="text-[10px] text-[#8a7e70]">{t.totalSum}</div>
              </div>
            )}
          </div>

          {/* Action Row */}
          {isInWishlist ? (
            <div className="flex items-center justify-between bg-[#221d18] border border-[#3d3328] rounded-xl p-1">
              <button
                type="button"
                onClick={() => onRemoveFromWishlist(item.id)}
                className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-[#2d2620] hover:bg-[#382f27] text-[#ede8df] transition-colors cursor-pointer active:scale-95"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>

              <span className="font-mono text-xs font-bold text-[#f5ebd9] tabular-nums px-2">
                {quantityInWishlist}
              </span>

              <button
                type="button"
                onClick={() => onAddToWishlist(item.id)}
                className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-[#c9a96e] hover:bg-[#d8b97e] text-[#121110] transition-colors cursor-pointer font-bold active:scale-95"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onAddToWishlist(item.id)}
              className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-2 px-3 rounded-xl bg-[#221e19] hover:bg-[#c9a96e] text-[#d6cec1] hover:text-[#121110] border border-[#383027] hover:border-[#c9a96e] font-medium text-xs transition-all duration-200 cursor-pointer shadow-sm group-hover:bg-[#28231e] active:scale-98"
            >
              <Heart className="w-3.5 h-3.5 text-[#c9a96e] group-hover:text-[#121110] group-hover:fill-current transition-colors" />
              <span>{t.addToWishlist}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
