import React from 'react';
import {
  FileText,
  Users,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Building2,
  FileCheck2
} from 'lucide-react';
import { BusinessSettings } from '../types';
import { EnquiryForm } from '../components/EnquiryForm';
import { Language, translations } from '../data/translations';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  settings: BusinessSettings;
  onOpenEnquiry: (serviceName?: string) => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  settings,
  onOpenEnquiry,
  lang
}) => {
  const t = translations[lang];

  const serviceHighlights = [
    {
      id: 'typing',
      icon: FileText,
      title: t.homeServices.typingTitle,
      description: t.homeServices.typingDesc,
      page: 'typing',
      features: lang === 'ar' ? [
        'إصدار وتجديد الهوية الإماراتية',
        'استمارات الفحص الطبي للإقامة',
        'عقود العمل وتصاريح تسهيل',
        'تصديق عقود الإيجار (تصديق)'
      ] : [
        'Emirates ID New / Renewal',
        'Medical Fitness Forms',
        'Labour Contract Typing',
        'Tasdeeq Attestation Paperwork'
      ]
    },
    {
      id: 'business-setup',
      icon: Building2,
      title: t.homeServices.businessTitle,
      description: t.homeServices.businessDesc,
      page: 'business-setup',
      features: lang === 'ar' ? [
        'رخص اقتصادية عجمان التجارية والمهنية',
        'حجز الأسماء والموافقات المبدئية',
        'صياغة عقود التأسيس (MOA) والتوثيق',
        'تجديد الرخص وتفادي غرامات التأخير'
      ] : [
        'Ajman DED Trade Licences',
        'Trade Name & Initial Approvals',
        'MOA & Notary Contract Typing',
        'Licence Renewal Assistance'
      ]
    },
    {
      id: 'pro',
      icon: Users,
      title: t.homeServices.proTitle,
      description: t.homeServices.proDesc,
      page: 'pro',
      features: lang === 'ar' ? [
        'تأشيرات العمل وإقامات المستثمرين',
        'إجراءات كفالة وإقامة الأسرة',
        'فتح وتجديد بطاقات المنشأة',
        'إلغاء التأشيرات وتعديل وتوفيق الأوضاع'
      ] : [
        'Employment & Investor Visas',
        'Family Sponsorship Paperwork',
        'Establishment Card Files',
        'Visa Cancellations & Transfers'
      ]
    },
    {
      id: 'government',
      icon: FileCheck2,
      title: t.homeServices.govTitle,
      description: t.homeServices.govDesc,
      page: 'government',
      features: lang === 'ar' ? [
        'تصديقات وزارة الخارجية والسفارات (MOFA)',
        'شهادة بحث الحالة الجنائية (حسن سيرة)',
        'الاستعلام عن غرامات الإقامة والعمل',
        'صياغة الخطابات والالتماسات الرسمية'
      ] : [
        'Certificate Attestation Guidance',
        'Police Clearance Requests',
        'Fine Inquiry Paperwork',
        'Official Document Formatting'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: t.process.step1Title,
      desc: t.process.step1Desc
    },
    {
      step: '02',
      title: t.process.step2Title,
      desc: t.process.step2Desc
    },
    {
      step: '03',
      title: t.process.step3Title,
      desc: t.process.step3Desc
    },
    {
      step: '04',
      title: t.process.step4Title,
      desc: t.process.step4Desc
    }
  ];

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
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#0A1628] text-white">
        {/* Background Image with Optical Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_ajman_business_1792763071469.jpg"
            alt="Ajman UAE modern commercial district"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl space-y-6">
            {/* Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              <span>{t.hero.kicker}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.hero.headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {t.hero.subheadline}
            </p>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={settings.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs sm:text-sm font-semibold rounded-md bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors flex items-center gap-2 shadow-xs whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.hero.ctaWhatsapp}</span>
              </a>

              <a
                href="tel:+971522709196"
                className="px-5 py-3 text-xs sm:text-sm font-semibold rounded-md bg-white text-[#0F1E36] hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-xs whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-[#0F1E36]" />
                <span className="font-mono">{t.hero.ctaCall}</span>
              </a>

              <button
                onClick={() => onOpenEnquiry()}
                className="px-5 py-3 text-xs sm:text-sm font-semibold rounded-md border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 transition-colors whitespace-nowrap shrink-0"
              >
                {t.hero.ctaAssistance}
              </button>
            </div>

            {/* Key Trust Highlights Strip */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{t.hero.trust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{t.hero.trust2}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{t.hero.trust3}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Regulatory Disclosure Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <div className="leading-relaxed">
            <span className="font-bold">{t.disclaimer.badge}:</span> {t.disclaimer.text}
          </div>
        </div>
      </section>

      {/* 3. Core Service Pillars Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
            <span>{t.homeServices.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t.homeServices.title}
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
            {t.homeServices.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceHighlights.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0F1E36] text-[#C5A059] flex items-center justify-center border border-[#C5A059]/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setCurrentPage(srv.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#0F1E36] hover:text-[#1E3A8A] flex items-center gap-1 group"
                  >
                    <span>{t.homeServices.viewDetails}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'}`} />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(srv.title)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded hover:bg-slate-200 transition-colors"
                  >
                    {t.homeServices.enquire}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="bg-slate-100/70 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                <span>{t.whyChooseUs.kicker}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {t.whyChooseUs.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.whyChooseUs.desc}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#0F1E36] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.whyChooseUs.point1Title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {t.whyChooseUs.point1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#0F1E36] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.whyChooseUs.point2Title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {t.whyChooseUs.point2Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#0F1E36] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.whyChooseUs.point3Title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {t.whyChooseUs.point3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desk Overview Card */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <div className="bg-[#0F1E36] text-white p-6 border-b border-slate-800">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                      {t.whyChooseUs.deskTitle}
                    </span>
                    <span className="text-[11px] text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                      {t.whyChooseUs.deskBadge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {t.whyChooseUs.deskHeading}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {t.whyChooseUs.deskSubtitle}
                  </p>
                </div>

                <div className="p-6 space-y-5 text-xs text-slate-700 bg-white">
                  <div>
                    <h4 className="font-bold text-slate-900 uppercase tracking-wide text-[11px] mb-2.5">
                      {t.whyChooseUs.capabilitiesTitle}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                        <span className="font-medium text-slate-800">{t.whyChooseUs.cap1}</span>
                        <span className="text-[#C5A059] font-semibold text-[11px]">ICP / MoHAP</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                        <span className="font-medium text-slate-800">{t.whyChooseUs.cap2}</span>
                        <span className="text-[#C5A059] font-semibold text-[11px]">Mainland DED</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                        <span className="font-medium text-slate-800">{t.whyChooseUs.cap3}</span>
                        <span className="text-[#C5A059] font-semibold text-[11px]">MOHRE & ICP</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-100">
                        <span className="font-medium text-slate-800">{t.whyChooseUs.cap4}</span>
                        <span className="text-[#C5A059] font-semibold text-[11px]">Ajman Municipality</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>{t.whyChooseUs.scheduleLabel}</span>
                      <strong className="text-slate-900">{t.whyChooseUs.scheduleValue}</strong>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>{t.whyChooseUs.walkinLabel}</span>
                      <span className="text-emerald-700 font-semibold">{t.whyChooseUs.walkinValue}</span>
                    </div>
                  </div>

                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <a
                      href="tel:+971522709196"
                      className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded font-semibold text-center transition-colors font-mono"
                    >
                      {t.callMobile}: 052 270 9196
                    </a>
                    <a
                      href="tel:+97167473013"
                      className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded font-semibold text-center transition-colors font-mono"
                    >
                      {t.callOffice}: 06 747 3013
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
            <span>{t.process.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.process.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-200 space-y-3 relative hover:border-[#0F1E36] transition-colors"
            >
              <div className="text-2xl font-mono font-bold text-[#C5A059]">
                {item.step}
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Lead Capture & Direct Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Office Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                <span>{lang === 'ar' ? 'التواصل المباشر' : 'Direct Contact'}</span>
                <span aria-hidden="true">·</span>
                <span>{lang === 'ar' ? 'تفضل بزيارتنا اليوم' : 'Visit Us Today'}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {lang === 'ar' ? 'هل تحتاج مساعدة عاجلة في طباعة معاملاتك؟' : 'Need Fast Assistance with Your Paperwork?'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lang === 'ar' ? 'تواصل مع فريق خدمة العملاء مباشرة عبر الهاتف أو تفضل بزيارة مكتبنا في الراشدية 3، عجمان.' : 'Contact our customer support team directly or drop by our office in Al Rashidiya 3, Ajman.'}
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0F1E36] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">
                    {lang === 'ar' ? 'العنوان الفعلي' : 'Physical Address'}
                  </span>
                  <span className="text-slate-600 leading-relaxed">
                    {addressText}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0F1E36] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">
                    {lang === 'ar' ? 'أرقام الهواتف' : 'Telephone & Mobile'}
                  </span>
                  <div>
                    <span className="text-slate-500">{t.callMobile}: </span>
                    <a href="tel:+971522709196" className="font-semibold text-[#0F1E36] hover:underline font-mono">
                      052 270 9196
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500">{t.callOffice}: </span>
                    <a href="tel:+97167473013" className="font-semibold text-[#0F1E36] hover:underline font-mono">
                      06 747 3013
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0F1E36] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">
                    {lang === 'ar' ? 'مواعيد العمل' : 'Operating Timings'}
                  </span>
                  <p className="text-slate-700 font-medium">{openingDays}</p>
                  <p className="text-slate-700 font-medium">{fridayHours}</p>
                  <p className="text-[11px] text-slate-500 mt-1">{hoursNote}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={settings.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#25D366] text-white text-xs font-semibold rounded-md hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{lang === 'ar' ? 'بدء محادثة واتساب (052 270 9196)' : 'Start WhatsApp Consultation (052 270 9196)'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <EnquiryForm lang={lang} />
          </div>
        </div>
      </section>
    </div>
  );
};
