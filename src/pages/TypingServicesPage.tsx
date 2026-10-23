import React from 'react';
import { CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { SERVICES_CATALOG } from '../data/servicesData';
import { BusinessSettings } from '../types';
import { Language } from '../data/translations';

interface TypingServicesPageProps {
  settings: BusinessSettings;
  onOpenEnquiry: (serviceName?: string) => void;
  lang: Language;
}

export const TypingServicesPage: React.FC<TypingServicesPageProps> = ({
  settings,
  onOpenEnquiry,
  lang
}) => {
  const typingServices = SERVICES_CATALOG.filter((s) => s.category === 'typing');

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* 1. Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
          <span>{lang === 'ar' ? 'خدماتنا المعتمدة' : 'Core Capabilities'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'ar' ? 'سرعة ودقة فائقة' : 'Fast & Error-Free'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'ar' ? 'خدمات طباعة المستندات والاستمارات في عجمان' : 'Professional Document Typing Services in Ajman'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {lang === 'ar'
            ? 'من طباعة وتجديد بطاقة الهوية الإماراتية إلى استمارات الفحص الطبي وعقود وزارة العمل (تسهيل) وتصديق عقود الإيجار، نوفر طباعة إلكترونية سريعة ومطابقة بنسبة 100% لمعايير الدوائر الحكومية.'
            : 'From Emirates ID applications to Ministry of Health medical test forms and Tasheel labor paperwork, we provide rapid, verified typing and electronic form filing strictly adhering to UAE government specifications.'}
        </p>
      </div>

      {/* 2. Important Document Preparation Notice */}
      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-950 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold">{lang === 'ar' ? 'ما يجب إحضاره عند زيارة المكتب:' : 'What to bring to our office:'}</span>{' '}
          {lang === 'ar'
            ? 'يرجى إحضار جواز السفر الأصلي، وبطاقة الهوية الحالية، وصورة تأشيرة الإقامة أو تصريح الدخول، مع توفر هاتفكم المتحرك لاستلام رموز التحقق الفورية (OTP). نرحب بكم طوال اليوم دون موعد مسبق.'
            : 'Please bring your original passport, existing Emirates ID, valid entry permit / residency visa copy, and an active UAE mobile phone for receiving required government OTP codes. Walk-ins are welcomed throughout the day.'}
        </div>
      </div>

      {/* 3. Services List */}
      <div className="space-y-8">
        {typingServices.map((service, idx) => {
          const title = lang === 'ar' && service.titleAr ? service.titleAr : service.title;
          const tagline = lang === 'ar' && service.taglineAr ? service.taglineAr : service.tagline;
          const description = lang === 'ar' && service.descriptionAr ? service.descriptionAr : service.description;
          const deliverables = lang === 'ar' && service.deliverablesAr ? service.deliverablesAr : service.deliverables;
          const requiredDocs = lang === 'ar' && service.requiredDocumentsAr ? service.requiredDocumentsAr : service.requiredDocuments;
          const authority = lang === 'ar' && service.authorityAr ? service.authorityAr : service.authority;
          const estimatedTime = lang === 'ar' && service.estimatedTimeAr ? service.estimatedTimeAr : service.estimatedTime;

          return (
            <div
              key={service.id}
              className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                    0{idx + 1} · {authority}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-1">
                    {title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onOpenEnquiry(title)}
                    className="px-4 py-2 bg-[#0F1E36] text-white text-xs font-semibold rounded hover:bg-[#1E3A8A] transition-colors"
                  >
                    {lang === 'ar' ? 'طلب الخدمة' : 'Enquire for Service'}
                  </button>
                  <a
                    href={`${settings.whatsappUrl}?text=${encodeURIComponent(lang === 'ar' ? `السلام عليكم مكتب جدة للطباعة، أود الاستفسار عن ${title}.` : `Hello Jeddah Typing Office, I would like assistance with ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#25D366] text-white rounded hover:bg-[#20BD5A] transition-colors"
                    title="WhatsApp Enquiry"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Deliverables */}
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    {lang === 'ar' ? 'ما نقوم بإنجازه بالمكتب:' : 'What We Prepare & Provide:'}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Documents */}
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    {lang === 'ar' ? 'المستندات المطلوبة للطباعة:' : 'Prerequisite Documents Required:'}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {requiredDocs.map((doc, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {estimatedTime && (
                <div className="text-[11px] text-slate-500 pt-2 flex items-center justify-between border-t border-slate-100">
                  <span>
                    {lang === 'ar' ? 'مدة إنجاز الطباعة في المكتب: ' : 'Typical In-Office Processing: '}
                    <strong className="text-slate-700">{estimatedTime}</strong>
                  </span>
                  <span className="text-slate-400">
                    {lang === 'ar' ? 'تخضع مواعيد الاعتماد لقرارات الدوائر الحكومية' : 'Authority approval timelines apply separately'}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 4. Bottom CTA Box */}
      <div className="p-8 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-start">
          <h3 className="text-xl font-bold">
            {lang === 'ar' ? 'هل لديك معاملة أو استمارة حكومية مخصصة؟' : 'Have a Custom Document or Government Application?'}
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            {lang === 'ar'
              ? 'موظفونا المتخصصون جاهزون لفحص أوراقك وإرشادك بدقة للنماذج المطلوبة. تفضل بزيارة مكتب رقم 3 بالراشدية 3 أو تواصل معنا الآن.'
              : 'Our experienced typists are on hand to inspect your papers and advise on the exact required forms. Visit Office No. 3 in Al Rashidiya 3 or contact us today.'}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+971522709196"
            className="px-4 py-2.5 bg-white text-[#0F1E36] text-xs font-semibold rounded hover:bg-slate-100 transition-colors font-mono"
          >
            052 270 9196
          </a>
          <a
            href="tel:+97167473013"
            className="px-4 py-2.5 bg-slate-800 text-white text-xs font-semibold rounded hover:bg-slate-700 transition-colors border border-slate-700 font-mono"
          >
            06 747 3013
          </a>
        </div>
      </div>
    </div>
  );
};
