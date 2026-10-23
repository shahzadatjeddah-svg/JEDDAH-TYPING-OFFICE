import React from 'react';
import { CheckCircle2, ShieldCheck, MessageCircle, FileCheck } from 'lucide-react';
import { SERVICES_CATALOG } from '../data/servicesData';
import { BusinessSettings } from '../types';
import { Language } from '../data/translations';

interface ProServicesPageProps {
  settings: BusinessSettings;
  onOpenEnquiry: (serviceName?: string) => void;
  lang: Language;
}

export const ProServicesPage: React.FC<ProServicesPageProps> = ({
  settings,
  onOpenEnquiry,
  lang
}) => {
  const proServices = SERVICES_CATALOG.filter((s) => s.category === 'pro');

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
          <span>{lang === 'ar' ? 'خدمات الشركات والأفراد' : 'Corporate & Individual PRO Support'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'ar' ? 'الإقامة وشؤون الأجانب والعمل' : 'Immigration & Labour'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'ar' ? 'خدمات تخليص المعاملات والإقامات (PRO) في عجمان' : 'PRO Services & Visa Document Preparation in Ajman'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {lang === 'ar'
            ? 'نقوم بإعداد وطباعة استمارات تأشيرات العمل لموظفي الشركات، وإقامات المستثمرين والشركاء، وتأشيرات كفالة الأسرة، ومعاملات فتح وتجديد بطاقات المنشأة لدى الجوازات ووزارة العمل.'
            : 'We handle the essential paperwork for corporate employment visas, investor residency applications, dependent family sponsorships, and establishment card transactions with UAE immigration and labour departments.'}
        </p>
      </div>

      {/* 2. Authority Disclaimer */}
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#0F1E36] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold text-slate-900">{lang === 'ar' ? 'توضيح الإطار القانوني:' : 'Legal Boundary Notice:'}</span>{' '}
          {lang === 'ar'
            ? 'مكتب جدة للطباعة يقدم خدمات الطباعة الإدارية وتجهيز المعاملات للمتعاملين والشركات. نحن لسنا دائرة هجرة أو مكتب محاماة، وتخضع جميع الموافقات الأمنية وإصدار التأشيرات والكوتة لسلطة الهيئة الاتحادية للهوية والجنسية ووزارة الموارد البشرية والتوطين.'
            : 'Jeddah Typing Office acts as an administrative typing and document clearing liaison. We are not an immigration authority or licensed law firm. Visa issuance, security screening, quota allocations, and processing timelines remain solely determined by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and the Ministry of Human Resources and Emiratisation (MOHRE).'}
        </div>
      </div>

      {/* 3. PRO Services Catalog */}
      <div className="space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {lang === 'ar' ? 'قائمة خدمات تخليص المعاملات المعتمدة' : 'Verified PRO & Government Liaison Offerings'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {lang === 'ar' ? 'طباعة احترافية ومتابعة دقيقة لمعاملات موظفيك وعائلتك.' : 'Reliable typing and administrative processing for your workforce and family.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {proServices.map((service) => {
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
                      {lang === 'ar' ? 'طلب المعاملة' : 'Enquire for Paperwork'}
                    </button>
                    <a
                      href={`${settings.whatsappUrl}?text=${encodeURIComponent(lang === 'ar' ? `السلام عليكم مكتب جدة للطباعة، أحتاج مساعدة في ${title}.` : `Hello Jeddah Typing Office, I require PRO assistance regarding ${service.title}.`)}`}
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
                      {lang === 'ar' ? 'ما نقوم بإعداده وطباعته:' : 'What Our Office Prepares:'}
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

      {/* 4. Common Document Checklist Notice */}
      <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-[#0F1E36]" />
          <span>{lang === 'ar' ? 'قائمة التحقق العامة لمعاملات الإقامة في الإمارات' : 'General Checklist for UAE Visa Transactions'}</span>
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          {lang === 'ar' ? 'قبل البدء في أي معاملة تأشيرة أو تجديد إقامة، يرجى التأكد من:' : 'Before applying for any visa issuance or renewal, ensure that:'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-700">
          <div className="p-3 bg-slate-50 rounded border border-slate-100">
            <span className="font-semibold block mb-1">{lang === 'ar' ? 'صلاحية جواز السفر:' : 'Passport Validity:'}</span>
            {lang === 'ar' ? 'لا تقل عن 6 أشهر متبقية على الانتهاء.' : 'At least 6 months remaining before expiry date.'}
          </div>
          <div className="p-3 bg-slate-50 rounded border border-slate-100">
            <span className="font-semibold block mb-1">{lang === 'ar' ? 'الصور الشخصية:' : 'Photographs:'}</span>
            {lang === 'ar' ? 'صور ملونة حديثة بخلفية بيضاء بدقة عالية.' : 'Recent color photos with white background and neutral expression.'}
          </div>
          <div className="p-3 bg-slate-50 rounded border border-slate-100">
            <span className="font-semibold block mb-1">{lang === 'ar' ? 'تصديق الشهادات:' : 'Attested Certificates:'}</span>
            {lang === 'ar' ? 'تصديق المؤهلات وعقود الزواج والميلاد من الخارجية.' : 'Degrees, marriage and birth certificates stamped by MOFA where applicable.'}
          </div>
        </div>
      </div>

      {/* 5. Bottom Callout */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#0F1E36] text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-start">
          <h3 className="text-xl font-bold">
            {lang === 'ar' ? 'هل تحتاج خدمات PRO للشركة أو إقامة للأسرة؟' : 'Need Company PRO or Family Visa Assistance?'}
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            {lang === 'ar'
              ? 'تواصل معنا في مكتب الراشدية 3 بعجمان. نضمن مطابقة ملفاتك مع أحدث القرارات الوزارية.'
              : 'Reach out directly to our Ajman office. We ensure your files comply with current immigration directives.'}
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
            <span>{lang === 'ar' ? 'محادثة عبر واتساب' : 'Chat on WhatsApp'}</span>
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
