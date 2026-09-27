import React, { useState, useRef, useEffect } from 'react';
import { LANGUAGES, LanguageCode } from '../data/menu';
import { ChevronDown, Globe, Check } from 'lucide-react';

interface LanguageSelectorProps {
  currentLang: LanguageCode;
  onSelectLanguage: (code: LanguageCode) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onSelectLanguage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLanguage = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#3a342c] bg-[#1a1714] text-[#ede8df] hover:border-[#c9a96e] hover:bg-[#25201b] transition-all text-xs font-medium cursor-pointer shadow-sm"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <img
          src={activeLanguage.flag}
          alt={activeLanguage.name}
          className="w-4 h-3 object-cover rounded-xs"
          loading="lazy"
        />
        <span className="font-medium tracking-wide uppercase">{activeLanguage.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#9e9486] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[#1c1916] border border-[#3d362e] shadow-2xl z-50 py-1.5 max-h-80 overflow-y-auto backdrop-blur-md">
          <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#a39480] border-b border-[#2d2721] flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#c9a96e]" />
            <span>13 Jazyků / Languages</span>
          </div>
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === currentLang;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  onSelectLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors text-left cursor-pointer ${
                  isSelected
                    ? 'bg-[#c9a96e]/15 text-[#f5ebd9] font-semibold'
                    : 'text-[#d6cec1] hover:bg-[#28221c] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="w-4 h-3 object-cover rounded-xs border border-[#4a4239]"
                    loading="lazy"
                  />
                  <span>{lang.name}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#c9a96e]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
