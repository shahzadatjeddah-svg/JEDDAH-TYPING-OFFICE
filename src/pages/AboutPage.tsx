import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, MessageCircle } from 'lucide-react';
import { BusinessSettings } from '../types';
import { Language } from '../data/translations';

interface AboutPageProps {
  settings: BusinessSettings;
  onOpenEnquiry: (serviceName?: string) => void;
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ settings, onOpenEnquiry, lang }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
          <span>{lang === 'ar' ? 'نبذة عن مكتب جدة للطباعة' : 'About Jeddah Typing Office'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'ar' ? 'عجمان، الإمارات' : 'Ajman, UAE'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'ar' ? 'الدقة والاحترافية في طباعة وتخليص المعاملات بعجمان' : 'Dedicated Administrative Support & Precision Typing in Ajman'}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          {lang === 'ar'
            ? 'مكتب جدة للطباعة هو مكتب خاص مستقل وموثوق لخدمات الطباعة الإلكترونية والاستشارات الإدارية في قلب منطقة الراشدية 3 بعجمان. نقدم دعماً إدارياً منظماً للأفراد ورواد الأعمال والشركات القائمة في مختلف إمارات الدولة.'
            : 'Jeddah Typing Office is a trusted, independent private documentation and typing consultancy located in the heart of Al Rashidiya 3, Ajman. We provide structured administrative assistance to individuals, entrepreneurs, and established businesses across the UAE.'}
        </p>
      </div>

      {/* 2. Visual & Story Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
          <div className="bg-[#0F1E36] text-white p-6 border-b border-slate-800">
            <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
              {lang === 'ar' ? 'المعايير الإدارية' : 'Administrative Practice'}
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              {lang === 'ar' ? 'ضوابط إنجاز وتدقيق المعاملات' : 'Document Clearance & Typing Standards'}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              {lang === 'ar' ? 'الراشدية 3، عجمان، الإمارات العربية المتحدة' : 'Established in Al Rashidiya 3, Ajman, UAE'}
            </p>
          </div>

          <div className="p-6 space-y-4 text-xs text-slate-700 bg-white">
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-bold text-slate-900 block mb-0.5">
                  {lang === 'ar' ? 'بروتوكول التدقيق المزدوج' : 'Dual-Check Verification Protocol'}
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {lang === 'ar'
                    ? 'تتم مراجعة وتدقيق كل استمارة مطبوعة مرتين مقارنة بالوثائق الثبوتية الرسمية لمنع الأخطاء المطبعية واللغوية قبل الإرسال.'
                    : 'Every typed form is systematically reviewed against primary identity documents (passports, visas, and trade records) to eliminate clerical errors before submission.'}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-bold text-slate-900 block mb-0.5">
                  {lang === 'ar' ? 'المتابعة اليومية للقرارات الوزارية' : 'Direct Government Guidelines Alignment'}
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {lang === 'ar'
                    ? 'اطلاع مستمر على التحديثات الخاصة بجداول الرسوم ونماذج الطلبات بالهيئة الاتحادية للهوية، وزارة العمل، واقتصادية عجمان.'
                    : 'Continuous updates regarding ministerial fee schedules, document requirements, and digital portal procedures for ICP, MOHRE, and Ajman DED.'}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <span className="font-bold text-slate-900 block mb-0.5">
                  {lang === 'ar' ? 'المحافظة على سرية العملاء' : 'Confidential In-Person Handling'}
                </span>
                <p className="text-slate-600 leading-relaxed">
                  {lang === 'ar'
                    ? 'تُدار ملفات وبيانات العملاء بخصوصية وأمان تام بما يتوافق مع القوانين الاتحادية لحماية البيانات في دولة الإمارات.'
                    : 'Client identities and private files are managed with strict discretion, adhering to UAE personal data protection principles.'}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>{lang === 'ar' ? 'الموقع: مكتب رقم 3، الراشدية 3' : 'Physical Presence: Office No. 3, Al Rashidiya 3'}</span>
              <span className="text-[#0F1E36] font-semibold">{lang === 'ar' ? 'نرحب بزيارتكم' : 'Walk-Ins Welcome'}</span>
            </div>
          </div>
        </div>

        <div className="space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {lang === 'ar' ? 'التزامنا بالدقة ورعاية المتعاملين' : 'Our Commitment to Accuracy & Customer Care'}
          </h2>
          <p>
            {lang === 'ar'
              ? 'إن إنجاز المعاملات الإدارية وتعبئة استمارات العمل والجوازات في دولة الإمارات يتطلب خبرة ودقة؛ فأي اختلاف في كتابة الأسماء أو نقص في الأوراق المرفقة قد يتسبب في رفض المعاملة أو فرض غرامات غير ضرورية.'
              : 'Navigating government portals, labor forms, and immigration requirements in the United Arab Emirates can be time-consuming and complicated. Even minor typographical errors or mismatched passport details can lead to unexpected delays, rejected submissions, or administrative fines.'}
          </p>
          <p>
            {lang === 'ar'
              ? 'يمتلك فريق العمل في مكتب جدة للطباعة دراية وافية بالإجراءات المعتمدة لدى الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (ICP)، ووزارة الموارد البشرية والتوطين (MOHRE)، ودائرة التنمية الاقتصادية بعجمان (DED).'
              : 'At Jeddah Typing Office, our seasoned typists bring deep familiarity with the procedural guidelines of the Federal Authority for Identity and Citizenship (ICP), Ministry of Human Resources and Emiratisation (MOHRE), and the Ajman Department of Economic Development (DED).'}
          </p>
          <p>
            {lang === 'ar'
              ? 'نحرص على مراجعة كل ملف بعناية فائقة قبل الشروع في الطباعة، لنضمن تطابق الأوراق تماماً مع القوانين المعمول بها، مما يوفر على عملائنا الوقت والجهد.'
              : 'We take the time to review each document thoroughly before processing, ensuring complete conformity with applicable regulations while saving our clients valuable hours.'}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry(lang === 'ar' ? 'استشارة عامة' : 'Consultation Inquiry')}
              className="px-4 py-2.5 bg-[#0F1E36] text-white text-xs font-semibold rounded-md hover:bg-[#1E3A8A] transition-colors"
            >
              {lang === 'ar' ? 'استشر فريقنا بالمكتب' : 'Consult with Our Team'}
            </button>
            <a
              href={settings.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#25D366] text-white text-xs font-semibold rounded-md hover:bg-[#20BD5A] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{lang === 'ar' ? 'محادثة واتساب' : 'WhatsApp Direct'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Core Operating Pillars */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {lang === 'ar' ? 'مبادئنا الأساسية في العمل' : 'Our Operational Standards'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0F1E36] flex items-center justify-center font-bold">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {lang === 'ar' ? 'الدقة الفائقة' : 'Rigorous Accuracy'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'ar'
                ? 'فحص شامل وتدقيق لكل رقم وبيان لمنع رفض المعاملات وتجنب فرض غرامات التأخير.'
                : 'Every name, birth date, passport number, and salary specification is verified against official primary records before submission to prevent rejections.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0F1E36] flex items-center justify-center font-bold">
              <Lock className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {lang === 'ar' ? 'السرية والخصوصية' : 'Strict Confidentiality'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'ar'
                ? 'معاملة بيانات العملاء وعقود الشركات كأمانة مهنية محصنة وفق أعلى معايير الخصوصية.'
                : 'Client documentation, contracts, financial details, and personal records are handled with utmost discretion and stored in compliance with data privacy standards.'}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0F1E36] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {lang === 'ar' ? 'الوضوح والشفافية' : 'Transparent Guidance'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'ar'
                ? 'توضيح الرسوم الحكومية المستحقة وأتعاب الطباعة مسبقاً دون أي مصاريف خفية.'
                : 'We provide upfront clarity on documentation requirements, official government fees, and our administrative typing charges with no hidden surprises.'}
            </p>
          </div>
        </div>
      </div>

      {/* 4. Explicit Regulatory Distinction */}
      <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
          {lang === 'ar' ? 'توضيح الحدود التنظيمية والصلاحيات الرسمية' : 'Official Operational Boundary & Authority Clarification'}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          {lang === 'ar'
            ? 'يرجى العلم بأن مكتب جدة للطباعة هو منشأة إدارية وتجارية خاصة مستقلة في عجمان، وليس جهة حكومية أو دائرة هجرة أو جهة قضائية. نحن لا نصدر التأشيرات أو التراخيص بصفة مستقلة، ولا نضمن قرارات الجهات الحكومية أو المهل الزمنية السيادية؛ فالموافقات الرسمية شأن يخص الدوائر الحكومية المعنية بدولة الإمارات حصراً. يتركز عملنا في التيسير الإداري، والطباعة الدقيقة، وتنسيق الأوراق.'
            : 'Please note that Jeddah Typing Office is an independent private administrative entity. We are not a government agency, immigration ministry, or judiciary department. We do not issue visas, trade licenses, or work permits on our own authority, nor can we guarantee official government outcomes or specific decision turnarounds. All statutory approvals remain solely within the jurisdiction of the relevant UAE federal and local government departments. We act purely as administrative facilitators, typing specialists, and documentation coordinators.'}
        </p>
      </div>

      {/* 5. Contact Summary Strip */}
      <div className="p-6 rounded-xl bg-[#0F1E36] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-start">
          <h3 className="text-lg font-bold">
            {lang === 'ar' ? 'تفضل بزيارة مكتبنا في عجمان' : 'Visit Our Office in Ajman'}
          </h3>
          <p className="text-xs text-slate-300">
            {lang === 'ar'
              ? 'مكتب رقم 3، نفس مبنى مطعم بانور، مقابل لولو هايبر ماركت، الراشدية 3.'
              : 'Office No. 3, same building as Panoor Restaurant, opposite Lulu Hypermarket, Al Rashidiya 3.'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+971522709196"
            className="px-4 py-2 bg-white text-[#0F1E36] text-xs font-semibold rounded hover:bg-slate-100 transition-colors font-mono"
          >
            052 270 9196
          </a>
          <a
            href="tel:+97167473013"
            className="px-4 py-2 bg-slate-800 text-white text-xs font-semibold rounded hover:bg-slate-700 transition-colors border border-slate-700 font-mono"
          >
            06 747 3013
          </a>
        </div>
      </div>
    </div>
  );
};
