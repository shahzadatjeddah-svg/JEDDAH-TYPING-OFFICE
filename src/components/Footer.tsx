import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ExternalLink, Lock } from 'lucide-react';
import { BusinessSettings } from '../types';
import { Language, translations } from '../data/translations';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  settings: BusinessSettings;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAdmin: () => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  settings,
  onOpenPrivacy,
  onOpenTerms,
  onOpenAdmin,
  lang,
}) => {
  const t = translations[lang];

  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addressText = lang === 'ar'
    ? 'مكتب رقم 3، نفس مبنى مطعم بانور، مقابل لولو هايبر ماركت، الراشدية 3، عجمان، الإمارات العربية المتحدة'
    : settings.address;

  const openingDays = lang === 'ar'
    ? 'السبت – الخميس: 8:00 ص – 9:30 م'
    : settings.openingHours.weekdays;

  const fridayHours = lang === 'ar'
    ? 'الجمعة: 4:00 م – 9:30 م'
    : settings.openingHours.friday;

  const hoursNote = lang === 'ar'
    ? 'مفتوح في معظم العطل الرسمية. نرحب بزيارتكم في أي وقت دون موعد مسبق.'
    : settings.openingHours.note;

  return (
    <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Statement */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#0F1E36] flex items-center justify-center border border-[#C5A059]/50">
                <span className="font-bold text-sm text-[#C5A059]">
                  {lang === 'ar' ? 'جدة' : 'JTO'}
                </span>
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {t.brandName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-[#C5A059]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t.footer.independentOffice}</span>
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('typing')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.typing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('business-setup')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.businessSetup}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pro')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.pro}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('government')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.government}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">
                  {addressText}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href="tel:+971522709196"
                  className="hover:text-white transition-colors text-slate-300 font-mono"
                >
                  052 270 9196
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href="tel:+97167473013"
                  className="hover:text-white transition-colors text-slate-300 font-mono"
                >
                  06 747 3013
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`mailto:${settings.email}`}
                  className="hover:text-white transition-colors text-slate-300"
                >
                  {settings.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={settings.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-400 bg-emerald-950/40 rounded border border-emerald-800 hover:bg-emerald-900/60 transition-colors"
                >
                  <span>{t.whatsapp}: 052 270 9196</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Operating Hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              {t.footer.hoursTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">{openingDays}</p>
                  <p className="text-slate-300 font-medium">{fridayHours}</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                {hoursNote}
              </p>
              <div className="pt-3">
                <button
                  onClick={() => handleNav('contact')}
                  className="text-xs text-[#C5A059] hover:underline"
                >
                  {lang === 'ar' ? 'عرض خريطة الموقع والاتجاهات ←' : 'View Driving Directions & Google Maps →'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Legal Transparency Banner (Strict compliance with UAE regulations) */}
        <div className="border-t border-slate-800/80 pt-8 pb-6">
          <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <p className="font-semibold text-slate-300 mb-1">
              {lang === 'ar' ? 'إفصاح قانوني وتنظيمي هام:' : 'Important Regulatory Disclosure:'}
            </p>
            <p>
              {lang === 'ar'
                ? 'مكتب جدة للطباعة هو مكتب خاص مرخص للأعمال التجارية والطباعة والدعم الإداري وتنسيق المستندات في إمارة عجمان، دولة الإمارات العربية المتحدة. نحن لسنا جهة حكومية أو وزارة أو دائرة تابعة لأي سلطة رسمية، ولا نصدر تأشيرات الإقامة أو الرخص التجارية بمفردنا؛ فكافة الموافقات والتأشيرات والتراخيص وقرارات الهجرة والعمل تصدر حصراً وتخضع للتقدير السيادي للجهات الحكومية المعنية بدولة الإمارات (بما في ذلك الإدارة العامة للإقامة وشؤون الأجانب، الهيئة الاتحادية للهوية والجنسية، وزارة الموارد البشرية والتوطين، ودائرة التنمية الاقتصادية بعجمان). ينحصر دورنا في الطباعة الإدارية، وتعبئة الاستمارات الرسمية، ومراجعة وتنسيق رفع الملفات.'
                : 'Jeddah Typing Office is an independent private commercial typing and administrative document assistance office operating in the Emirate of Ajman, UAE. We are not a government entity, department, or official public agency. We do not issue visas, trade licenses, or official government approvals. All regulatory decisions, entry permits, visa stamping, and business licenses are under the sole jurisdiction of the respective UAE authorities (including GDRFA, ICP, MOHRE, and Ajman DED). We provide administrative form filling, documentation review, and submission coordination only.'}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {t.brandName}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors"
            >
              {t.footer.privacy}
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              {t.footer.terms}
            </button>
            <span>·</span>
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1 hover:text-slate-300 transition-colors text-slate-500"
              title="Office Settings & Enquiries"
            >
              <Lock className="w-3 h-3" />
              <span>{t.footer.officePortal}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
