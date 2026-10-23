import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Search } from 'lucide-react';
import { FAQ_DATA } from '../data/servicesData';
import { BusinessSettings } from '../types';
import { Language } from '../data/translations';

interface FaqPageProps {
  settings: BusinessSettings;
  onOpenEnquiry: (serviceName?: string) => void;
  lang: Language;
}

export const FaqPage: React.FC<FaqPageProps> = ({ settings, onOpenEnquiry, lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryTabs = lang === 'ar' ? [
    { id: 'all', label: 'جميع الأسئلة' },
    { id: 'general', label: 'المكتب والرسوم' },
    { id: 'visas', label: 'الهوية والإقامات' },
    { id: 'business', label: 'تأسيس الشركات' },
    { id: 'documents', label: 'الخصوصية والمستندات' }
  ] : [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General & Office' },
    { id: 'visas', label: 'Emirates ID & Visas' },
    { id: 'business', label: 'Business Setup' },
    { id: 'documents', label: 'Documents & Privacy' }
  ];

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const questionText = lang === 'ar' && faq.questionAr ? faq.questionAr : faq.question;
    const answerText = lang === 'ar' && faq.answerAr ? faq.answerAr : faq.answer;

    const matchesSearch =
      questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      answerText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* 1. Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
          <span>{lang === 'ar' ? 'إجابات واضحة وموثوقة' : 'Clear Guidance'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'ar' ? 'إجراءات المعاملات' : 'Procedural Answers'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'ar' ? 'الأسئلة الشائعة حول خدمات الطباعة وتأسيس الشركات' : 'Frequently Asked Questions'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {lang === 'ar'
            ? 'إجابات تفصيلية عن استفسارات الهوية الإماراتية، الفحص الطبي، تأسيس الرخص في اقتصادية عجمان، تأشيرات الإقامة، والرسوم الحكومية.'
            : 'Answers to common questions regarding document prerequisites, Emirates ID typing, Ajman business setup, PRO workflows, and government fees.'}
        </p>
      </div>

      {/* 2. Interactive Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === tab.id
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-xs w-full">
          <Search className={`w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ${lang === 'ar' ? 'right-3' : 'left-3'}`} />
          <input
            type="text"
            placeholder={lang === 'ar' ? 'بحث بالكلمات (مثل: الهوية، الرسوم)...' : 'Search keywords (e.g. Emirates ID, fees)...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full py-1.5 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#0F1E36] bg-white ${lang === 'ar' ? 'pr-9 pl-3' : 'pl-9 pr-3'}`}
          />
        </div>
      </div>

      {/* 3. Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
            {lang === 'ar'
              ? `لم يتم العثور على أسئلة مطابقة للبحث "${searchQuery}". يرجى الاتصال بنا مباشرة لأي استفسار.`
              : `No matching questions found for "${searchQuery}". Please contact us directly for specific queries.`}
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionText = lang === 'ar' && faq.questionAr ? faq.questionAr : faq.question;
            const answerText = lang === 'ar' && faq.answerAr ? faq.answerAr : faq.answer;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-start p-5 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors focus:outline-hidden"
                >
                  <span className="text-sm font-bold text-slate-900 leading-snug">
                    {questionText}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#0F1E36]" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {answerText}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* 4. Still Have Questions Callout */}
      <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-start">
          <h3 className="text-base font-bold text-slate-900">
            {lang === 'ar' ? 'هل لديك سؤال غير مدرج هنا؟' : 'Have a Specific Question Not Listed Here?'}
          </h3>
          <p className="text-xs text-slate-600">
            {lang === 'ar'
              ? 'تواصل مع مستشارينا عبر واتساب أو تفضل بالاتصال مباشرة على أرقام المكتب.'
              : 'Send a message to our consultants on WhatsApp or give us a quick phone call.'}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={settings.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#25D366] text-white text-xs font-semibold rounded hover:bg-[#20BD5A] transition-colors flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{lang === 'ar' ? 'اسألنا عبر واتساب' : 'Ask on WhatsApp'}</span>
          </a>
          <button
            onClick={() => onOpenEnquiry(lang === 'ar' ? 'استفسار من صفحة الأسئلة الشائعة' : 'General FAQ Inquiry')}
            className="px-4 py-2 bg-[#0F1E36] text-white text-xs font-semibold rounded hover:bg-[#1E3A8A] transition-colors"
          >
            {lang === 'ar' ? 'إرسال استفسار' : 'Submit an Inquiry'}
          </button>
        </div>
      </div>
    </div>
  );
};
