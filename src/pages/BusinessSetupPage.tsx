import React from 'react';
import { CheckCircle2, ShieldAlert, MessageCircle } from 'lucide-react';
import { SERVICES_CATALOG } from '../data/servicesData';
import { BusinessSettings } from '../types';
import { Language } from '../data/translations';

interface BusinessSetupPageProps {
  settings: BusinessSettings;
  onOpenEnquiry: (serviceName?: string) => void;
  lang: Language;
}

export const BusinessSetupPage: React.FC<BusinessSetupPageProps> = ({
  settings,
  onOpenEnquiry,
  lang
}) => {
  const setupServices = SERVICES_CATALOG.filter((s) => s.category === 'business-setup');

  const setupSteps = lang === 'ar' ? [
    {
      num: '01',
      title: 'اختيار النشاط وحجز الاسم التجاري',
      desc: 'مطابقة الأنشطة التجارية والمهنية المعتمدة لدى اقتصادية عجمان وتقديم خيارات الاسم المقترح بالعربية والإنجليزية.'
    },
    {
      num: '02',
      title: 'استخراج شهادة الموافقة المبدئية',
      desc: 'تدقيق وثائق الشركاء وجوازات السفر ومتابعة الموافقات الخارجية (الدفاع المدني أو البلدية أو الشرطة إن وجدت).'
    },
    {
      num: '03',
      title: 'صياغة وتوثيق عقد التأسيس (MOA)',
      desc: 'طباعة عقد تأسيس الشركة أو ملاحق التعديل باللغتين العربية والإنجليزية وتوثيقها رقمياً أو لدى محاكم عجمان.'
    },
    {
      num: '04',
      title: 'عقد الإيجار وتوثيق تصديق',
      desc: 'تجهيز أوراق عقد إيجار المحل أو المكتب التجاري واعتماده لدى منصة تصديق التابعة لبلدية عجمان.'
    },
    {
      num: '05',
      title: 'إصدار الرخصة التجارية وعضوية الغرفة',
      desc: 'سداد الرسوم المقررة لدى الدائرة واستلام الرخصة التجارية الرسمية وشهادة عضوية غرفة تجارة وصناعة عجمان.'
    },
    {
      num: '06',
      title: 'فتح بطاقة المنشأة وكوتة التأشيرات',
      desc: 'فتح ملف الشركة لدى الجوازات (الهيئة الاتحادية للهوية) ووزارة العمل لإصدار إقامات الشركاء والموظفين.'
    }
  ] : [
    {
      num: '01',
      title: 'Activity Selection & Trade Name Reservation',
      desc: 'Identify compliant economic activity codes with Ajman DED and submit preferred trade names in English and Arabic.'
    },
    {
      num: '02',
      title: 'Initial Approval Filing',
      desc: 'Assemble shareholder KYC, passport copies, and required external approvals (e.g. Civil Defence, Municipality if applicable).'
    },
    {
      num: '03',
      title: 'MOA Drafting & Notarization',
      desc: 'Prepare bilingual Memorandum of Association detailing partner shares and powers for signing digitally or before Ajman Courts Notary.'
    },
    {
      num: '04',
      title: 'Tenancy Contract & Tasdeeq Attestation',
      desc: 'Link an approved physical office, shop, or commercial facility with an attested Tasdeeq lease registration.'
    },
    {
      num: '05',
      title: 'Trade Licence & Chamber Issuance',
      desc: 'Final fee payment processing, issuance of official Ajman DED Trade Licence, and Ajman Chamber of Commerce registration.'
    },
    {
      num: '06',
      title: 'Establishment Cards & Visa Quotas',
      desc: 'Open company files with ICP Immigration and MOHRE to enable employee sponsorship and investor residence visas.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Page Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
          <span>{lang === 'ar' ? 'تأسيس وتجديد الشركات' : 'Corporate & Commercial Setup'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'ar' ? 'اقتصادية عجمان' : 'Ajman DED'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'ar' ? 'خدمات تأسيس وتجديد الشركات في عجمان' : 'Business Setup Assistance in Ajman'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {lang === 'ar'
            ? 'نوفر دعماً إدارياً شاملاً للمستثمرين وأصحاب المشاريع لإنشاء وتجديد الرخص التجارية والمهنية والصناعية داخل إمارة عجمان، وصياغة عقود التأسيس، وتجهيز معاملات دائرة التنمية الاقتصادية وغرفة التجارة.'
            : 'We provide end-to-end documentation preparation and clerical liaison support for entrepreneurs establishing new commercial, professional, or industrial companies under the Ajman Department of Economic Development (DED).'}
        </p>
      </div>

      {/* 2. Authority Disclaimer Callout */}
      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold">{lang === 'ar' ? 'تنويه قانوني رسمي:' : 'Regulatory Requirement:'}</span>{' '}
          {lang === 'ar'
            ? 'تُصدر الرخص التجارية والتراخيص المهنية حصراً من قبل دائرة التنمية الاقتصادية بعجمان (Ajman DED) والجهات الحكومية الشريكة. يقتصر دور مكتب جدة للطباعة على المساعدة الإدارية وطباعة الاستمارات وصياغة العقود وتنسيق الأوراق. جميع الرسوم والاشتراطات والموافقات تخضع حصراً للسلطات الحكومية المختصة.'
            : 'Trade licenses and commercial registrations are issued strictly by the Ajman Department of Economic Development (Ajman DED) and related regulatory authorities. Jeddah Typing Office provides administrative documentation preparation, MOA typing, and application filing assistance. All fees, eligibility criteria, and approvals remain at the sole discretion of the competent government entities.'}
        </div>
      </div>

      {/* 3. 6-Step Roadmap */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {lang === 'ar' ? 'مراحل تأسيس الشركات في إمارة عجمان' : 'The Ajman Mainland Business Setup Journey'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {lang === 'ar' ? 'خارطة طريق مبسطة لجميع متطلبات وأوراق الدوائر الحكومية بعجمان.' : 'A structured breakdown of paperwork milestones required by Ajman authorities.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {setupSteps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-xl bg-white border border-slate-200 space-y-2 hover:border-[#0F1E36] transition-colors"
            >
              <div className="font-mono text-xl font-bold text-[#C5A059]">
                {step.num}
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Detailed Services Catalog */}
      <div className="space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {lang === 'ar' ? 'باقات خدمات تأسيس وتعديل الشركات' : 'Our Business Setup & Corporate Paperwork Services'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {lang === 'ar' ? 'اختر الخدمة المطلوبة لطلب المساعدة الفورية وقائمة المستندات.' : 'Choose a service below to request immediate assistance or checklists from our office.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {setupServices.map((service) => {
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
                      {lang === 'ar' ? 'بدء المعاملة' : 'Start Paperwork'}
                    </button>
                    <a
                      href={`${settings.whatsappUrl}?text=${encodeURIComponent(lang === 'ar' ? `السلام عليكم مكتب جدة للطباعة، أحتاج استشارة بخصوص ${title} في عجمان.` : `Hello Jeddah Typing Office, I need guidance regarding ${service.title} in Ajman.`)}`}
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
                      {lang === 'ar' ? 'الدعم الإداري المتوفر بالخدمة:' : 'Included Administrative Support:'}
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
                      {lang === 'ar' ? 'الأوراق المطلوبة من المستثمر:' : 'Prerequisites To Prepare:'}
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

      {/* 5. Direct Consultation CTA Strip */}
      <div className="p-6 sm:p-8 rounded-xl bg-[#0F1E36] text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-start">
          <h3 className="text-xl font-bold">
            {lang === 'ar' ? 'هل تخطط لتأسيس شركة جديدة أو تجديد رخصتك في عجمان؟' : 'Planning a New Business or Need License Renewal in Ajman?'}
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            {lang === 'ar'
              ? 'تفضل بزيارة مكتبنا مقابل لولو هايبر ماركت بالراشدية 3، أو تواصل معنا عبر واتساب للحصول على قائمة المتطلبات والأنشطة الاقتصادية.'
              : 'Visit our office opposite Lulu Hypermarket in Al Rashidiya 3, or message our specialists on WhatsApp for a fast document checklist.'}
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
            <span>{lang === 'ar' ? 'محادثة واتساب مباشرة' : 'WhatsApp Consultation'}</span>
          </a>
          <button
            onClick={() => onOpenEnquiry(lang === 'ar' ? 'تأسيس وتجديد الشركات في عجمان' : 'Business Setup in Ajman')}
            className="px-5 py-2.5 bg-white text-[#0F1E36] text-xs font-semibold rounded hover:bg-slate-100 transition-colors"
          >
            {lang === 'ar' ? 'طلب اتصال من المستشار' : 'Request Call Back'}
          </button>
        </div>
      </div>
    </div>
  );
};
