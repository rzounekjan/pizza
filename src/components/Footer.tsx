import React from 'react';
import { LANGUAGES, LanguageCode, UI_TRANSLATIONS } from '../data/menu';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

interface FooterProps {
  currentLang: LanguageCode;
  onSelectLanguage: (code: LanguageCode) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onSelectLanguage,
}) => {
  const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS.cs;

  return (
    <footer id="restaurant-info" className="bg-[#100e0c] border-t border-[#2a241d] pt-14 pb-12 text-[#9e9282]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-[#241f19]">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-3">
            <h3 className="text-xl font-serif font-bold text-[#ede8df]">
              Pizza Pasta Caffè
            </h3>
            <p className="text-xs leading-relaxed text-[#8a7e6f]">
              {t.siteSubtitle}
            </p>
            <p className="text-xs text-[#a39480] font-medium pt-1">
              {t.italianSpecialties}
            </p>
          </div>

          {/* Col 2: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ede8df]">
              Kontakt & Adresa
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c9a96e] shrink-0 mt-0.5" />
                <span>{t.contactInfo}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c9a96e] shrink-0" />
                <a
                  href={`tel:${t.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#c9a96e] transition-colors"
                >
                  {t.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c9a96e] shrink-0" />
                <a
                  href={`mailto:${t.email}`}
                  className="hover:text-[#c9a96e] transition-colors"
                >
                  {t.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c9a96e] shrink-0" />
                <span>{t.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: All 13 Language Mutations Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#ede8df]">
              Jazykové mutace (13)
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {LANGUAGES.map((lang) => {
                const isActive = lang.code === currentLang;
                return (
                  <button
                    key={lang.code}
                    onClick={() => onSelectLanguage(lang.code)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#c9a96e] text-[#121110] font-bold'
                        : 'bg-[#1b1714] text-[#b0a595] hover:bg-[#28221c] hover:text-[#ede8df] border border-[#2e261f]'
                    }`}
                  >
                    <img
                      src={lang.flag}
                      alt={lang.name}
                      className="w-3.5 h-2.5 object-cover rounded-xs"
                      loading="lazy"
                    />
                    <span>{lang.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736859]">
          <div>
            © {new Date().getFullYear()} Pizza Pasta Caffè, Nerudova 37, Praha. Všechna práva vyhrazena.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://pizzapastacaffe.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[#8f816f] hover:text-[#c9a96e] transition-colors"
            >
              <span>Zdroj: pizzapastacaffe.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
