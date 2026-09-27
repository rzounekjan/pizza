import React, { useState } from 'react';
import { MenuItem, LanguageCode, UI_TRANSLATIONS } from '../data/menu';
import { X, Trash2, Plus, Minus, Heart, ReceiptText } from 'lucide-react';
import { OrderModal } from './OrderModal';

const SHOW_ORDER_LABELS: Record<LanguageCode, string> = {
  cs: 'Ukázat objednávku',
  en: 'Show order',
  de: 'Bestellung anzeigen',
  it: 'Mostra ordine',
  fr: 'Afficher la commande',
  es: 'Mostrar pedido',
  pl: 'Pokaż zamówienie',
  kr: '주문 내역 보기',
  cn: '查看订单清单',
  jp: '注文を表示する',
  ua: 'Показати замовлення',
  hu: 'Rendelés megjelenítése',
  pt: 'Mostrar pedido',
};

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Record<string, number>;
  items: MenuItem[];
  currentLang: LanguageCode;
  currency: 'CZK' | 'EUR';
  onAddToCart: (id: string) => void;
  onRemoveFromCart: (id: string) => void;
  onClearWishlist: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  items,
  currentLang,
  currency,
  onAddToCart,
  onRemoveFromCart,
  onClearWishlist,
}) => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.cs;
  const showOrderLabel = SHOW_ORDER_LABELS[currentLang] || SHOW_ORDER_LABELS.cs;

  if (!isOpen) return null;

  // Build list of active items
  const wishlistItems = Object.entries(wishlist)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const product = items.find((item) => item.id.toLowerCase() === id.toLowerCase() || item.key === id);
      return {
        id,
        qty,
        product,
      };
    })
    .filter((entry): entry is { id: string; qty: number; product: MenuItem } => !!entry.product);

  const totalItemsCount = wishlistItems.reduce((acc, curr) => acc + curr.qty, 0);
  const totalCzk = wishlistItems.reduce((acc, curr) => acc + curr.product.prices.czk * curr.qty, 0);
  const totalEur = totalCzk / 23;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-[#161311] border-l border-[#2e2720] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#29231c] flex items-center justify-between bg-[#191613]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#2b241d] text-[#c9a96e]">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#ede8df]">
                  {t.wishlist}
                </h2>
                <p className="text-xs text-[#9c9182]">
                  {totalItemsCount}{' '}
                  {totalItemsCount === 1 ? t.itemCountSingle : t.itemsCount}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#9c9182] hover:text-[#ede8df] hover:bg-[#25201b] transition-colors cursor-pointer"
              aria-label={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Wishlist Items */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3 sm:space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#221c17] flex items-center justify-center text-[#7d7061]">
                  <ReceiptText className="w-7 h-7" />
                </div>
                <h3 className="text-base font-serif font-semibold text-[#d4cbbe]">
                  {t.wishlistEmpty}
                </h3>
                <p className="text-xs text-[#8a7f72] max-w-xs mx-auto leading-relaxed">
                  {t.wishlistEmptyHint}
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 sm:space-y-3">
                {wishlistItems.map((entry) => {
                  const trans = entry.product.translations[currentLang] || entry.product.translations.cs;
                  const name = trans.name;
                  const itemTotalCzk = entry.product.prices.czk * entry.qty;
                  const itemTotalEur = entry.product.prices.eur * entry.qty;

                  return (
                    <div
                      key={entry.id}
                      className="p-3 sm:p-3.5 rounded-xl bg-[#1c1815] border border-[#2f2720] flex items-center justify-between gap-2.5 group hover:border-[#42382e] transition-colors"
                    >
                      <div className="flex-1 min-w-0 pr-1">
                        <h4 className="text-xs sm:text-sm font-semibold text-[#ede8df] truncate">
                          {name}
                        </h4>
                        <div className="text-[11px] sm:text-xs font-mono text-[#a39786] tabular-nums mt-0.5">
                          {currency === 'CZK'
                            ? `${entry.product.prices.czk.toLocaleString()} CZK`
                            : `€ ${entry.product.prices.eur.toFixed(2)}`}{' '}
                          <span className="text-[#695f53]">/ ks</span>
                        </div>
                        <div className="text-xs font-bold font-mono text-[#c9a96e] tabular-nums mt-1">
                          {currency === 'CZK'
                            ? `${itemTotalCzk.toLocaleString()} CZK`
                            : `€ ${itemTotalEur.toFixed(2)}`}
                        </div>
                      </div>

                      {/* Quantity Stepper & Remove */}
                      <div className="flex items-center gap-1 shrink-0 bg-[#251f1a] p-1 rounded-lg border border-[#382f26]">
                        <button
                          type="button"
                          onClick={() => onRemoveFromCart(entry.id)}
                          className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-md hover:bg-[#322a22] text-[#d6cec1] transition-colors cursor-pointer active:scale-95"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                        </button>
                        <span className="w-6 text-center font-mono text-xs font-bold text-[#f5ebd9] tabular-nums">
                          {entry.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onAddToCart(entry.id)}
                          className="w-8 h-8 sm:w-7 sm:h-7 flex items-center justify-center rounded-md bg-[#c9a96e] text-[#121110] hover:bg-[#d8b97e] transition-colors cursor-pointer font-bold active:scale-95"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer & Grand Total Calculation */}
          {wishlistItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#29231c] bg-[#191613] space-y-3 sm:space-y-4 pb-6 sm:pb-5">
              {/* Grand Total Box */}
              <div className="p-3 sm:p-4 rounded-xl bg-[#221c17] border border-[#3b3127] space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between text-xs text-[#a39786]">
                  <span>{t.totalSum} (CZK)</span>
                  <span className="font-mono font-bold text-sm sm:text-base text-[#f5ebd9] tabular-nums">
                    {totalCzk.toLocaleString()} CZK
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#a39786] pt-1 border-t border-[#2f2720]">
                  <span>{t.totalSum} (EUR)</span>
                  <span className="font-mono font-bold text-xs sm:text-sm text-[#c9a96e] tabular-nums">
                    € {totalEur.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Note */}
              <p className="text-[11px] text-[#8a7f72] text-center leading-relaxed">
                {t.orderNote}
              </p>

              {/* Actions */}
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={onClearWishlist}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#221c17] hover:bg-rose-950/40 text-[#c2b4a3] hover:text-rose-300 border border-[#382d23] hover:border-rose-900/60 text-xs font-medium transition-all cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{t.clearWishlist}</span>
                </button>
              </div>

              {/* Ukázat objednávku Button */}
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#c9a96e] hover:bg-[#d8b97e] text-[#121110] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-98"
              >
                <ReceiptText className="w-4 h-4" />
                <span>{showOrderLabel}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        wishlist={wishlist}
        items={items}
        currentLang={currentLang}
      />
    </div>
  );
};
