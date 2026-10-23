import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Lock } from 'lucide-react';
import { EnquirySubmission } from '../types';
import { Language, translations } from '../data/translations';

interface EnquiryFormProps {
  preselectedService?: string;
  onSuccess?: () => void;
  className?: string;
  lang?: Language;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  preselectedService = '',
  onSuccess,
  className = '',
  lang = 'en'
}) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<EnquirySubmission>({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: preselectedService || (lang === 'ar' ? 'تأسيس وتجديد الشركات في عجمان' : 'Business Setup in Ajman (Trade Licence & DED)'),
    message: '',
    website_url_hp: '', // Honeypot spam trap
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [responseDetails, setResponseDetails] = useState<{ referenceId: string; message: string } | null>(null);

  const serviceOptions = lang === 'ar' ? [
    'تأسيس وتجديد الشركات في عجمان (اقتصادية عجمان)',
    'تجديد الرخص التجارية وتعديل الشركاء والأنشطة',
    'طباعة وتجديد استمارة الهوية الإماراتية (ICP)',
    'طباعة استمارة الفحص الطبي للإقامة (MoHAP)',
    'معاملات تأشيرات العمل والإقامات (تسهيل / MOHRE)',
    'تأشيرات إقامة الأسرة والأبناء والوالدين',
    'تصديق عقود الإيجار السكنية والتجارية (بلدية عجمان)',
    'تنسيق تصديقات وزارة الخارجية والسفارات (MOFA)',
    'طباعة ومتابعة المعاملات الإدارية العامة'
  ] : [
    'Business Setup in Ajman (Trade Licence & DED)',
    'Trade Licence Renewal or Amendments',
    'Emirates ID Application Typing',
    'Medical Fitness Application Typing',
    'Employment or Residency Visa Paperwork',
    'Family Visa Sponsorship Typing',
    'Tasdeeq / Ejari Tenancy Document Preparation',
    'Certificate Attestation Coordination (MOFA)',
    'General Administrative & Form Typing'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side quick checks
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMessage(lang === 'ar' ? 'يرجى إدخال الاسم الكامل (حرفان على الأقل).' : 'Please enter your full name (minimum 2 characters).');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setErrorMessage(lang === 'ar' ? 'يرجى إدخال رقم هاتف للتواصل (داخل الإمارات أو دولي).' : 'Please provide a valid contact number (UAE or international).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage(lang === 'ar' ? 'يرجى إدخال بريد إلكتروني صالح.' : 'Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage(lang === 'ar' ? 'يرجى كتابة تفاصيل المعاملة (10 أحرف على الأقل).' : 'Please include a brief message detailing your requirements (at least 10 characters).');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || (lang === 'ar' ? 'فشل إرسال الطلب. يرجى المحاولة ثانية.' : 'Failed to submit enquiry. Please try again.'));
      }

      setStatus('success');
      setResponseDetails({
        referenceId: data.referenceId,
        message: lang === 'ar' 
          ? 'تم استلام طلبك بنجاح من قبل مكتب جدة للطباعة. سيقوم فريقنا بمراجعة الأوراق والتواصل معك قريباً عبر الهاتف أو الواتساب.'
          : data.message
      });

      // Clear form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceRequired: serviceOptions[0],
        message: '',
        website_url_hp: ''
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || (lang === 'ar' ? 'حدث خطأ في الإرسال. يمكنك أيضاً الاتصال بنا مباشرة على 0522709196.' : 'Network error occurred. You can also call us directly at 0522709196.'));
    }
  };

  return (
    <div className={`bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 sm:p-8 ${className}`}>
      {status === 'success' && responseDetails ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900">{t.form.successTitle}</h3>
            <p className="text-xs text-slate-500 mt-1">
              {t.form.referenceLabel}: <span className="font-mono font-bold text-slate-800">{responseDetails.referenceId}</span>
            </p>
          </div>

          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            {responseDetails.message}
          </p>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 max-w-md mx-auto text-xs text-slate-600 text-start space-y-1">
            <div className="font-medium text-slate-800">{t.form.nextStepsTitle}</div>
            <div>{t.form.step1}</div>
            <div>{t.form.step2}</div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setStatus('idle')}
              className="text-xs text-[#0F1E36] font-semibold hover:underline"
            >
              {t.form.submitAnother}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-slate-800">
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              {t.form.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.form.subtitle}
            </p>
          </div>

          {status === 'error' && errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-md text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Honeypot hidden input - Bots trap */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_url_hp">Do not fill this field</label>
            <input
              type="text"
              id="website_url_hp"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_url_hp}
              onChange={(e) => setFormData({ ...formData, website_url_hp: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.form.fullName} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder={t.form.placeholderName}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#0F1E36] focus:border-transparent transition-all"
              />
            </div>

            {/* Contact Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.form.phone} <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder={t.form.placeholderPhone}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#0F1E36] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.form.email} <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder={t.form.placeholderEmail}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#0F1E36] focus:border-transparent transition-all"
              />
            </div>

            {/* Service Required */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.form.serviceRequired} <span className="text-rose-500">*</span>
              </label>
              <select
                value={formData.serviceRequired}
                onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0F1E36] focus:border-transparent transition-all"
              >
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message / Details */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.form.message} <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={4}
              required
              placeholder={t.form.placeholderMessage}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#0F1E36] focus:border-transparent transition-all"
            />
          </div>

          {/* Privacy & Anti-Sensitive Document Notice */}
          <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-md text-[11px] text-slate-500 space-y-1">
            <div className="flex items-center gap-1.5 font-medium text-slate-700">
              <Lock className="w-3.5 h-3.5 text-[#0F1E36]" />
              <span>{t.form.dataProtectionTitle}</span>
            </div>
            <p className="leading-relaxed">
              {t.form.dataProtectionNotice}
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3 px-4 bg-[#0F1E36] text-white text-xs font-semibold rounded-md hover:bg-[#1E3A8A] transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-xs"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.form.submitting}</span>
                </>
              ) : (
                <>
                  <Send className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  <span>{t.form.submitButton}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
