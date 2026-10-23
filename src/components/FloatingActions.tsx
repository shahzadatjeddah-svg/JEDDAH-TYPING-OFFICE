import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { BusinessSettings } from '../types';
import { Language } from '../data/translations';

interface FloatingActionsProps {
  settings: BusinessSettings;
  lang?: Language;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ settings, lang = 'en' }) => {
  const [showCallMenu, setShowCallMenu] = useState(false);

  return (
    <>
      {/* Floating Action Cluster */}
      <div className={`fixed bottom-5 z-40 flex flex-col gap-2.5 ${lang === 'ar' ? 'left-5 items-start' : 'right-5 items-end'}`}>
        {/* Quick Phone Call Popover Menu */}
        {showCallMenu && (
          <div className="bg-white border border-slate-200 rounded-lg shadow-xl p-3 w-60 text-xs text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <span className="font-semibold text-slate-900">
                {lang === 'ar' ? 'أرقام الاتصال المباشرة' : 'Direct Office Lines'}
              </span>
              <button
                onClick={() => setShowCallMenu(false)}
                className="text-slate-400 hover:text-slate-600 p-0.5"
                aria-label="Close call options"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="space-y-1.5">
              <a
                href="tel:+971522709196"
                className="flex items-center justify-between p-2 rounded bg-slate-50 hover:bg-slate-100 font-medium text-slate-900 transition-colors"
              >
                <span>{lang === 'ar' ? 'متحرك / واتساب' : 'Mobile / WhatsApp'}</span>
                <span className="text-[#0F1E36] font-bold font-mono">052 270 9196</span>
              </a>
              <a
                href="tel:+97167473013"
                className="flex items-center justify-between p-2 rounded bg-slate-50 hover:bg-slate-100 font-medium text-slate-900 transition-colors"
              >
                <span>{lang === 'ar' ? 'الهاتف الثابت' : 'Office Landline'}</span>
                <span className="text-[#0F1E36] font-bold font-mono">06 747 3013</span>
              </a>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          {/* Quick Call Button */}
          <button
            onClick={() => setShowCallMenu(!showCallMenu)}
            className="w-12 h-12 rounded-full bg-[#0F1E36] text-white flex items-center justify-center shadow-lg hover:bg-[#1E3A8A] transition-all hover:scale-105 border border-[#C5A059]/40"
            aria-label={lang === 'ar' ? 'اتصال بمكتب جدة للطباعة' : 'Call Jeddah Typing Office'}
            title={lang === 'ar' ? 'اتصل بنا' : 'Call Office'}
          >
            <Phone className="w-5 h-5 text-[#C5A059]" />
          </button>

          {/* Floating WhatsApp Button */}
          <a
            href={settings.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 pl-3.5 pr-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BD5A] transition-all hover:scale-105 font-medium text-xs whitespace-nowrap"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="hidden sm:inline font-semibold">
              {lang === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Us'}
            </span>
          </a>
        </div>
      </div>
    </>
  );
};
