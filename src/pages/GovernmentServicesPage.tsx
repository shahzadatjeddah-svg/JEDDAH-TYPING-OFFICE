import React from 'react';
import { CheckCircle2, Lock, MessageCircle } from 'lucide-react';
import { SERVICES_CATALOG } from '../data/servicesData';
import { BusinessSettings } from '../types';
import { Language } from '../data/translations';

interface GovernmentServicesPageProps {
  settings: BusinessSettings;
  onOpenEnquiry: (serviceName?: string) => void;
  lang: Language;
}

export const GovernmentServicesPage: React.FC<GovernmentServicesPageProps> = ({
  settings,
  onOpenEnquiry,
  lang
}) => {
  const govServices = SERVICES_CATALOG.filter((s) => s.category === 'government');

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
          <span>{lang === 'ar' ? 'توثيق المستندات والمعاملات الرسمية' : 'Document Authentication & Civil Services'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'ar' ? 'بوابات معتمدة' : 'Verified Portals'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'ar' ? 'الخدمات الحكومية وتصديق الوثائق والشهادات' : 'Government & Document Preparation Services'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {lang === 'ar'
            ? 'نوفر تجهيز وطباعة المعاملات الإدارية وتنسيق رفعها عبر المنصات الرسمية، بما في ذلك تصديقات وزارة الخارجية (MOFA)، واستخراج شهادات بحث الحالة الجنائية، والترجمة القانونية وصياغة الخطابات.'
            : 'We provide accurate application preparation and submission coordination for official government administrative portals, including Ministry of Foreign Affairs (MOFA) attestation, Police Clearance Certificates, and official document formatting.'}
        </p>
      </div>

      {/* 2. Sensitive Data Safeguard Callout */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
        <Lock className="w-5 h-5 text-[#0F1E36] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold text-slate-900">{lang === 'ar' ? 'بروتوكول الأمان وحماية الوثائق:' : 'Secure Document Handling Protocol:'}</span>{' '}
          {lang === 'ar'
            ? 'حمايةً لبياناتكم وامتثالاً لقانون حماية البيانات الشخصية الإماراتي، لا نقوم بتخزين نسخ جوازات السفر أو الهويات على خوادم الويب العامة. تتم مراجعة الأصول والوثائق الحساسة مباشرة في المكتب أو عبر القنوات المشفرة الخاصة.'
            : 'To protect client identity and comply with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection, we never store unneeded passport scans or Emirates ID copies on open web servers. All document verifications take place in person at our office or via direct encrypted channels.'}
        </div>
      </div>

      {/* 3. Services List */}
      <div className="space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {lang === 'ar' ? 'قائمة الخدمات والتوثيقات المتاحة' : 'Available Document Preparation Services'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {lang === 'ar' ? 'تعرف على متطلبات وإجراءات كل خدمة إدارية.' : 'Review requirements and deliverables for each administrative service below.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {govServices.map((service) => {
            const title = lang === 'ar' && service.titleAr ? service.titleAr : service.title;
            const tagline = lang === 'ar' && service.taglineAr ? service.taglineAr : service.tagline;
            const description = lang === 'ar' && service.descriptionAr ? service.descriptionAr : service.description;
            const deliverables = lang === 'ar' && service.deliverablesAr ? service.deliverablesAr : service.deliverables;
            const requiredDocs = lang === 'ar' && service.requiredDocumentsAr ? service.requiredDocumentsAr : service.requiredDocuments;
            const authority = lang === 'ar' && service.authorityAr ? service.authorityAr : service.authority;

            return (
              <div
                key={service.id}
                className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 hover:shadow-xs transition-shadow space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                      {authority}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onOpenEnquiry(title)}
                      className="px-4 py-2 bg-[#0F1E36] text-white text-xs font-semibold rounded hover:bg-[#1E3A8A] transition-colors"
                    >
                      {lang === 'ar' ? 'طلب الخدمة' : 'Request Service'}
                    </button>
                    <a
                      href={`${settings.whatsappUrl}?text=${encodeURIComponent(lang === 'ar' ? `السلام عليكم مكتب جدة للطباعة، أحتاج استفسار عن ${title}.` : `Hello Jeddah Typing Office, I require guidance on ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#25D366] text-white rounded hover:bg-[#20BD5A] transition-colors"
                      title="WhatsApp Consultation"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      {lang === 'ar' ? 'ما نقوم بتنسيقه وإنجازه:' : 'What Our Office Coordinates:'}
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

                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      {lang === 'ar' ? 'المستندات المطلوبة من العميل:' : 'Required Client Documents:'}
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
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Attestation Procedure Reference */}
      <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-4">
        <h3 className="text-base font-bold text-slate-900">
          {lang === 'ar' ? 'تسلسل تصديق الشهادات والوثائق الأجنبية داخل الدولة' : 'Standard UAE Certificate Attestation Hierarchy'}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          {lang === 'ar' ? 'لاعتماد الشهادات الصادرة من خارج الدولة رسمياً داخل دولة الإمارات:' : 'For foreign certificates (degrees, marriage certificates, birth certificates) to be legally recognized in the UAE:'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-slate-700">
          <div className="p-3 bg-slate-50 rounded border border-slate-200">
            <span className="font-bold text-[#0F1E36] block mb-1">{lang === 'ar' ? 'المرحلة 1' : 'Step 1'}</span>
            {lang === 'ar' ? 'التصديق من كاتب العدل ببلد الإصدار.' : 'Notarization in the country of origin.'}
          </div>
          <div className="p-3 bg-slate-50 rounded border border-slate-200">
            <span className="font-bold text-[#0F1E36] block mb-1">{lang === 'ar' ? 'المرحلة 2' : 'Step 2'}</span>
            {lang === 'ar' ? 'تصديق وزارة خارجية بلد الإصدار.' : 'Ministry of Foreign Affairs authentication in origin country.'}
          </div>
          <div className="p-3 bg-slate-50 rounded border border-slate-200">
            <span className="font-bold text-[#0F1E36] block mb-1">{lang === 'ar' ? 'المرحلة 3' : 'Step 3'}</span>
            {lang === 'ar' ? 'تصديق سفارة الإمارات ببلد الإصدار.' : 'UAE Embassy attestation in the country of origin.'}
          </div>
          <div className="p-3 bg-slate-50 rounded border border-slate-200">
            <span className="font-bold text-[#0F1E36] block mb-1">{lang === 'ar' ? 'المرحلة 4' : 'Step 4'}</span>
            {lang === 'ar' ? 'التصديق الإلكتروني لوزارة الخارجية الإماراتية (MOFA).' : 'UAE Ministry of Foreign Affairs (MOFA) electronic attestation stamp.'}
          </div>
        </div>
      </div>

      {/* 5. Bottom Action */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#0F1E36] text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-start">
          <h3 className="text-xl font-bold">
            {lang === 'ar' ? 'هل لديك استفسار حول تصديق وثيقة معينة؟' : 'Have Specific Document Inquiries?'}
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            {lang === 'ar'
              ? 'تفضل بزيارة مكتبنا في الراشدية 3 بعجمان، أو راسلنا بتفاصيل الشهادة لتزويدك بالإرشاد الفوري.'
              : 'Drop by our office in Al Rashidiya 3, Ajman, or message us with your certificate details for prompt guidance.'}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={settings.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded hover:bg-[#20BD5A] transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{lang === 'ar' ? 'استشارة عبر واتساب' : 'Consult on WhatsApp'}</span>
          </a>
          <a
            href="tel:+971522709196"
            className="px-5 py-2.5 bg-white text-[#0F1E36] text-xs font-semibold rounded hover:bg-slate-100 transition-colors font-mono"
          >
            052 270 9196
          </a>
        </div>
      </div>
    </div>
  );
};
