import React from 'react';
import { MenuItem, LanguageCode, UI_TRANSLATIONS } from '../data/menu';
import { X } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Record<string, number>;
  items: MenuItem[];
  currentLang: LanguageCode;
}

const ORDER_TITLE_LABELS: Record<LanguageCode, string> = {
  cs: 'Objednávka',
  en: 'Order',
  de: 'Bestellung',
  it: 'Ordine',
  fr: 'Commande',
  es: 'Pedido',
  pl: 'Zamówienie',
  kr: '주문서',
  cn: '点单清单',
  jp: '注文書',
  ua: 'Замовлення',
  hu: 'Rendelés',
  pt: 'Pedido',
};

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  wishlist,
  items,
  currentLang,
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.cs;
  const orderTitle = ORDER_TITLE_LABELS[currentLang] || ORDER_TITLE_LABELS.cs;

  if (!isOpen) return null;

  // Build grouped list of dish names: each distinct dish with its quantity
  const groupedOrderItems: { id: string; name: string; qty: number }[] = [];
  let totalCount = 0;

  Object.entries(wishlist).forEach(([id, qty]) => {
    if (qty > 0) {
      const product = items.find(
        (item) => item.id.toLowerCase() === id.toLowerCase() || item.key === id
      );
      if (product) {
        const trans = product.translations[currentLang] || product.translations.cs;
        const name = trans.name;
        groupedOrderItems.push({
          id,
          name,
          qty,
        });
        totalCount += qty;
      }
    }
  });

  return (
    <div className="fixed inset-0 z-60 overflow-y-auto flex items-center justify-center p-3 sm:p-4">
      {/* Dark backdrop for contrast behind the white sheet */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Container - strictly white background, black text, size 16 */}
      <div
        className="relative w-full max-w-lg bg-white text-black rounded-xl shadow-2xl overflow-hidden z-10 border border-gray-300"
        style={{ backgroundColor: '#ffffff', color: '#000000' }}
      >
        {/* Top bar with clean header and close button (Copy and Print removed as requested) */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center gap-2">
            <span
              style={{ fontSize: '16px' }}
              className="font-bold uppercase tracking-wider text-black"
            >
              {orderTitle} ({totalCount})
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-700 hover:text-black cursor-pointer transition-colors"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content area: pure white background, black text, exact 16px font, grouped items with bold quantity numbers, NO prices */}
        <div
          className="p-4 sm:p-8 max-h-[75vh] overflow-y-auto"
          style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            fontSize: '16px',
            lineHeight: '1.6',
          }}
        >
          {groupedOrderItems.length === 0 ? (
            <div
              className="text-center py-8 text-gray-500"
              style={{ fontSize: '16px' }}
            >
              {t.wishlistEmpty}
            </div>
          ) : (
            <div
              className="divide-y divide-gray-100"
              style={{ color: '#000000', fontSize: '16px' }}
            >
              {groupedOrderItems.map((entry) => (
                <div
                  key={entry.id}
                  className="py-2.5 flex items-baseline gap-2.5"
                  style={{
                    color: '#000000',
                    fontSize: '16px',
                    backgroundColor: '#ffffff',
                  }}
                >
                  <span
                    className="font-bold text-black shrink-0"
                    style={{ fontWeight: 700, fontSize: '16px', color: '#000000' }}
                  >
                    {entry.qty}x
                  </span>
                  <span
                    style={{ fontSize: '16px', color: '#000000' }}
                  >
                    {entry.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom bar with Close button */}
        <div className="px-6 py-3.5 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors cursor-pointer font-medium"
            style={{ fontSize: '16px' }}
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
