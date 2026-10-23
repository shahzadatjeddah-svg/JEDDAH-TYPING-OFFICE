import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Globe } from 'lucide-react';
import { BusinessSettings } from '../types';
import { Language, translations } from '../data/translations';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  settings: BusinessSettings;
  onOpenEnquiry: (serviceName?: string) => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  settings,
  onOpenEnquiry,
  lang,
  setLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'typing', label: t.nav.typing },
    { id: 'business-setup', label: t.nav.businessSetup },
    { id: 'pro', label: t.nav.pro },
    { id: 'government', label: t.nav.government },
    { id: 'about', label: t.nav.about },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    const nextLang: Language = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-[#0B192C] text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span className="truncate max-w-[280px] sm:max-w-none">{t.locationKicker}</span>
            </span>
            <span className="hidden lg:inline text-slate-600">·</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>{t.timingHeader}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="tel:+97167473013"
              className="flex items-center gap-1 text-slate-200 hover:text-[#C5A059] transition-colors whitespace-nowrap"
              title="Call Office Landline"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span className="font-mono">{t.callOffice}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href="tel:+971522709196"
              className="flex items-center gap-1 text-slate-200 hover:text-[#C5A059] transition-colors whitespace-nowrap"
              title="Call Mobile"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span className="font-mono">{t.callMobile}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={settings.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-[#4ADE80] hover:text-white transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3 h-3" />
              <span>{t.whatsapp}</span>
            </a>
            <span className="text-slate-600">·</span>
            {/* Language Switcher in utility bar */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[#C5A059] font-bold text-xs border border-slate-700 transition-colors"
              title={lang === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-start focus:outline-hidden whitespace-nowrap shrink-0 group"
          >
            <div className="w-11 h-11 rounded-lg bg-[#0F1E36] flex items-center justify-center border border-[#C5A059]/40 shadow-xs group-hover:border-[#C5A059] transition-colors">
              <span className="text-lg font-bold text-[#C5A059] tracking-wider">
                {lang === 'ar' ? 'جدة' : 'JTO'}
              </span>
            </div>
            <div>
              <span className="block text-lg font-bold text-[#0F1E36] tracking-tight group-hover:text-[#1E3A8A] transition-colors">
                {t.brandName}
              </span>
              <span className="block text-xs font-normal text-slate-500">
                {t.brandTagline}
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#0F1E36] ${
                    isActive ? 'text-[#0F1E36] font-semibold' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA & Language Toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#0F1E36]" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0F1E36] rounded-md hover:bg-[#1E3A8A] transition-all duration-200 border border-[#C5A059]/30 hover:border-[#C5A059] shadow-xs whitespace-nowrap shrink-0"
            >
              {t.getAssistance}
            </button>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-bold text-[#0F1E36] bg-slate-100 rounded border border-slate-200"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0F1E36] rounded-md whitespace-nowrap"
            >
              {t.enquireNow}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-start px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  currentPage === link.id
                    ? 'bg-slate-100 text-[#0F1E36] font-semibold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            <a
              href="tel:+971522709196"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-slate-800 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0F1E36]" />
              <span>{t.callMobile}: 052 270 9196</span>
            </a>
            <a
              href="tel:+97167473013"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-slate-800 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0F1E36]" />
              <span>{t.callOffice}: 06 747 3013</span>
            </a>
            <a
              href={settings.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-[#15803D] rounded-md hover:bg-[#166534] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.whatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
