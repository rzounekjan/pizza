import React from 'react';
import { LanguageCode, UI_TRANSLATIONS } from '../data/menu';
import { Heart, ArrowDown, MapPin } from 'lucide-react';

interface HeroProps {
  currentLang: LanguageCode;
  wishlistCount: number;
  totalCzk: number;
  totalEur: number;
  currency: 'CZK' | 'EUR';
  totalItemsCount?: number;
  onOpenWishlist: () => void;
  onExploreMenu: () => void;
}

// Full translations for the 4 badges across all 13 supported languages
const BADGE_TRANSLATIONS: Record<LanguageCode, {
  itemsLabel: string;
  languagesLabel: string;
  pizzaLabel: string;
  rateValue: string;
  rateLabel: string;
}> = {
  cs: {
    itemsLabel: 'Položek v menu',
    languagesLabel: 'Jazykových mutací',
    pizzaLabel: 'Tradiční pizza',
    rateValue: '1 € = 23 Kč',
    rateLabel: 'Přepočet kurzu',
  },
  en: {
    itemsLabel: 'Menu items',
    languagesLabel: 'Languages supported',
    pizzaLabel: 'Traditional pizza',
    rateValue: '1 € = 23 CZK',
    rateLabel: 'Exchange rate',
  },
  de: {
    itemsLabel: 'Menüpunkte',
    languagesLabel: 'Sprachversionen',
    pizzaLabel: 'Traditionelle Pizza',
    rateValue: '1 € = 23 CZK',
    rateLabel: 'Wechselkurs',
  },
  it: {
    itemsLabel: 'Voci di menu',
    languagesLabel: 'Versioni linguistiche',
    pizzaLabel: 'Pizza tradizionale',
    rateValue: '1 € = 23 CZK',
    rateLabel: 'Tasso di cambio',
  },
  fr: {
    itemsLabel: 'Plats au menu',
    languagesLabel: 'Langues disponibles',
    pizzaLabel: 'Pizza traditionnelle',
    rateValue: '1 € = 23 CZK',
    rateLabel: 'Taux de change',
  },
  es: {
    itemsLabel: 'Platos en el menú',
    languagesLabel: 'Idiomas disponibles',
    pizzaLabel: 'Pizza tradicional',
    rateValue: '1 € = 23 CZK',
    rateLabel: 'Tipo de cambio',
  },
  pl: {
    itemsLabel: 'Pozycji w menu',
    languagesLabel: 'Wersji językowych',
    pizzaLabel: 'Tradycyjna pizza',
    rateValue: '1 € = 23 CZK',
    rateLabel: 'Przelicznik walut',
  },
  kr: {
    itemsLabel: '메뉴 항목',
    languagesLabel: '지원 언어',
    pizzaLabel: '전통 피자',
    rateValue: '1 € = 23 CZK',
    rateLabel: '환율 계산',
  },
  cn: {
    itemsLabel: '菜单菜品',
    languagesLabel: '支持语言版本',
    pizzaLabel: '传统手工披萨',
    rateValue: '1 € = 23 CZK',
    rateLabel: '汇率换算',
  },
  jp: {
    itemsLabel: 'メニュー品目',
    languagesLabel: '対応言語',
    pizzaLabel: '伝統ピッツァ',
    rateValue: '1 € = 23 CZK',
    rateLabel: '為替レート',
  },
  ua: {
    itemsLabel: 'Позицій у меню',
    languagesLabel: 'Мовних версій',
    pizzaLabel: 'Традиційна піца',
    rateValue: '1 € = 23 CZK',
    rateLabel: 'Курс обміну',
  },
  hu: {
    itemsLabel: 'Étlapi tétel',
    languagesLabel: 'Nyelvi változat',
    pizzaLabel: 'Hagyományos pizza',
    rateValue: '1 € = 23 CZK',
    rateLabel: 'Átváltási árfolyam',
  },
  pt: {
    itemsLabel: 'Itens no menu',
    languagesLabel: 'Versões de idiomas',
    pizzaLabel: 'Pizza tradicional',
    rateValue: '1 € = 23 CZK',
    rateLabel: 'Taxa de câmbio',
  },
};

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  wishlistCount,
  totalCzk,
  totalEur,
  currency,
  totalItemsCount = 134,
  onOpenWishlist,
  onExploreMenu,
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.cs;
  const badges = BADGE_TRANSLATIONS[currentLang] || BADGE_TRANSLATIONS.cs;

  return (
    <section className="relative overflow-hidden border-b border-[#2d2721] bg-radial-[at_50%_0%] from-[#26201a] via-[#161311] to-[#100f0d] pt-8 pb-12 sm:pt-14 sm:pb-18 lg:pt-20 lg:pb-24">
      {/* Subtle warm atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#c9a96e]/10 via-[#c9a96e]/2 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Trust tag */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#241f1a] border border-[#3b332b] text-[#c9a96e] text-[11px] sm:text-xs font-medium mb-4 sm:mb-6">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate max-w-[280px] sm:max-w-none">Nerudova 238/37, Praha 1 – Malá Strana</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#fbf7f0] tracking-tight leading-[1.15] mb-3 sm:mb-5 max-w-4xl mx-auto text-balance">
          Pizza Pasta Caffè
        </h1>

        <p className="text-sm sm:text-lg text-[#b8ad9c] max-w-2xl mx-auto mb-6 sm:mb-8 font-normal leading-relaxed text-balance px-2">
          {t.siteSubtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-12 max-w-md sm:max-w-none mx-auto">
          <button
            type="button"
            onClick={onExploreMenu}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c9a96e] text-[#121110] font-semibold text-xs sm:text-sm hover:bg-[#d8b97e] transition-all cursor-pointer shadow-lg shadow-[#c9a96e]/10 active:scale-95"
          >
            <span>{t.exploreMenu}</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenWishlist}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer border ${
              wishlistCount > 0
                ? 'bg-[#26201b] border-[#c9a96e] text-[#f5ebd9] hover:bg-[#322a23]'
                : 'bg-[#1a1714] border-[#383129] text-[#d6cec1] hover:bg-[#25201b] hover:text-white'
            }`}
          >
            <Heart
              className={`w-4 h-4 ${
                wishlistCount > 0 ? 'fill-[#c9a96e] text-[#c9a96e]' : 'text-[#a39480]'
              }`}
            />
            <span>{t.wishlist}</span>
            {wishlistCount > 0 && (
              <span className="bg-[#c9a96e] text-[#121110] text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-full tabular-nums">
                {wishlistCount} · {currency === 'CZK' ? `${totalCzk.toLocaleString()} CZK` : `€ ${totalEur.toFixed(2)}`}
              </span>
            )}
          </button>
        </div>

        {/* Editorial Value Badges (dynamic localization across all 13 languages) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto pt-5 sm:pt-6 border-t border-[#2d2721]/80 text-left">
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#1a1613]/50 sm:bg-transparent border border-[#2b241c]/50 sm:border-0">
            <div className="text-lg sm:text-2xl font-serif font-bold text-[#ede8df] tabular-nums">{totalItemsCount}</div>
            <div className="text-[11px] sm:text-xs text-[#9c9182] mt-0.5 leading-tight">{badges.itemsLabel}</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#1a1613]/50 sm:bg-transparent border border-[#2b241c]/50 sm:border-0">
            <div className="text-lg sm:text-2xl font-serif font-bold text-[#ede8df] tabular-nums">13</div>
            <div className="text-[11px] sm:text-xs text-[#9c9182] mt-0.5 leading-tight">{badges.languagesLabel}</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#1a1613]/50 sm:bg-transparent border border-[#2b241c]/50 sm:border-0">
            <div className="text-lg sm:text-2xl font-serif font-bold text-[#ede8df] tabular-nums">Ø 28 cm</div>
            <div className="text-[11px] sm:text-xs text-[#9c9182] mt-0.5 leading-tight">{badges.pizzaLabel}</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-[#1a1613]/50 sm:bg-transparent border border-[#2b241c]/50 sm:border-0">
            <div className="text-lg sm:text-2xl font-serif font-bold text-[#ede8df] tabular-nums">{badges.rateValue}</div>
            <div className="text-[11px] sm:text-xs text-[#9c9182] mt-0.5 leading-tight">{badges.rateLabel}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
