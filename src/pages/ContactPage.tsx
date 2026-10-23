import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  Navigation,
  CheckCircle,
  Building
} from 'lucide-react';
import { BusinessSettings } from '../types';
import { EnquiryForm } from '../components/EnquiryForm';
import { Language } from '../data/translations';

interface ContactPageProps {
  settings: BusinessSettings;
  onOpenEnquiry: (serviceName?: string) => void;
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ settings, lang }) => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Panoor+Restaurant+Al+Rashidiya+3+Ajman+opposite+Lulu+Hypermarket';

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
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
          <span>{lang === 'ar' ? 'تواصل معنا' : 'Get In Touch'}</span>
          <span aria-hidden="true">·</span>
          <span>{lang === 'ar' ? 'يسعدنا خدمتكم' : 'We Are Here To Help'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'ar' ? 'اتصل بمكتب جدة للطباعة في عجمان' : 'Contact Jeddah Typing Office'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {lang === 'ar'
            ? 'تفضل بزيارة مكتبنا في الراشدية 3 بعجمان، أو تواصل معنا هاتفياً أو عبر البريد الإلكتروني أو الواتساب. نرحب بالمراجعين والعملاء طوال ساعات الدوام الرسمي.'
            : 'Visit our office in Al Rashidiya 3, Ajman, or reach out to us by phone, email, or WhatsApp. Walk-ins are welcomed during all working hours.'}
        </p>
      </div>

      {/* 2. Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Office Address */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0F1E36] flex items-center justify-center">
            <Building className="w-5 h-5 text-[#C5A059]" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            {lang === 'ar' ? 'مقر المكتب' : 'Office Location'}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {addressText}
          </p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F1E36] hover:text-[#1E3A8A] pt-1"
          >
            <span>{lang === 'ar' ? 'الاتجاهات عبر الخريطة' : 'Get Directions'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile & WhatsApp */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0F1E36] flex items-center justify-center">
            <Phone className="w-5 h-5 text-[#C5A059]" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            {lang === 'ar' ? 'المتحرك والواتساب' : 'Direct Mobile & WhatsApp'}
          </h3>
          <p className="text-xs text-slate-600">
            {lang === 'ar' ? 'اتصال مباشر أو محادثة فورية:' : 'Immediate messaging or call:'}
          </p>
          <div className="space-y-1">
            <a
              href="tel:+971522709196"
              className="block text-sm font-bold text-[#0F1E36] hover:underline font-mono"
            >
              052 270 9196
            </a>
            <a
              href={settings.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-emerald-600 font-semibold hover:underline"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>{lang === 'ar' ? 'فتح المحادثة عبر واتساب' : 'Open in WhatsApp'}</span>
            </a>
          </div>
        </div>

        {/* Office Landline */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0F1E36] flex items-center justify-center">
            <Phone className="w-5 h-5 text-[#C5A059]" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            {lang === 'ar' ? 'الهاتف الثابت للمكتب' : 'Telephone Landline'}
          </h3>
          <p className="text-xs text-slate-600">
            {lang === 'ar' ? 'استعلامات الاستقبال:' : 'Office front desk inquiries:'}
          </p>
          <a
            href="tel:+97167473013"
            className="block text-sm font-bold text-[#0F1E36] hover:underline pt-1 font-mono"
          >
            06 747 3013
          </a>
          <span className="text-[11px] text-slate-400 block font-mono">+971 6 747 3013</span>
        </div>

        {/* Official Email */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0F1E36] flex items-center justify-center">
            <Mail className="w-5 h-5 text-[#C5A059]" />
          </div>
          <h3 className="text-sm font-bold text-slate-900">
            {lang === 'ar' ? 'المراسلات الإلكترونية' : 'Email Correspondence'}
          </h3>
          <p className="text-xs text-slate-600">
            {lang === 'ar' ? 'إرسال استفسارات الشركات:' : 'Send corporate inquiries:'}
          </p>
          <a
            href={`mailto:${settings.email}`}
            className="block text-xs font-bold text-[#0F1E36] hover:underline pt-1 break-all"
          >
            {settings.email}
          </a>
          <span className="text-[11px] text-slate-400 block">
            {lang === 'ar' ? 'الرد خلال ساعات العمل' : 'Responses within 24 hours'}
          </span>
        </div>
      </div>

      {/* 3. Form and Office Details Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form */}
        <div className="lg:col-span-7">
          <EnquiryForm lang={lang} />
        </div>

        {/* Working Hours & Location Map */}
        <div className="lg:col-span-5 space-y-6">
          {/* Operating Hours Card */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#0F1E36]" />
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'ar' ? 'أوقات الدوام الرسمي' : 'Operating Hours'}
              </h3>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-semibold text-slate-900">{lang === 'ar' ? 'السبت – الخميس:' : 'Saturday – Thursday:'}</span>
                <span className="font-medium text-slate-700 font-mono">{lang === 'ar' ? '8:00 ص – 9:30 م' : '8:00 AM – 9:30 PM'}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="font-semibold text-slate-900">{lang === 'ar' ? 'الجمعة (بعد الظهر):' : 'Friday (Afternoon):'}</span>
                <span className="font-medium text-slate-700 font-mono">{lang === 'ar' ? '4:00 م – 9:30 م' : '4:00 PM – 9:30 PM'}</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                {hoursNote}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{lang === 'ar' ? 'لا يلزم حجز موعد مسبق لمعاملات الطباعة العادية' : 'No appointment needed for standard typing services'}</span>
            </div>
          </div>

          {/* Location Verification & Directions Card */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-4">
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-[#0F1E36]" />
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'ar' ? 'العلامات المميزة ومواقف السيارات' : 'Landmarks & Parking'}
              </h3>
            </div>

            <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-800">{lang === 'ar' ? 'أبرز المعالم:' : 'Key Landmarks:'}</strong>{' '}
                {lang === 'ar'
                  ? 'يقع مكتبنا في الطابق الأول، مكتب رقم 3، في نفس المبنى التجاري الذي يضم مطعم بانور، مباشرة مقابل البوابة الرئيسية لـ لولو هايبر ماركت في منطقة الراشدية 3 بعجمان.'
                  : 'Located on the first floor, Office No. 3, in the exact same commercial building as Panoor Restaurant, directly opposite the main entrance of Lulu Hypermarket in Al Rashidiya 3, Ajman.'}
              </p>
              <p>
                <strong className="text-slate-800">{lang === 'ar' ? 'المواقف:' : 'Parking:'}</strong>{' '}
                {lang === 'ar'
                  ? 'تتوفر مواقف بلدية عامة ومريحة حول المبنى ومقابل لولو هايبر ماركت.'
                  : 'Municipal public parking bays are located around the building and in front of Lulu Hypermarket.'}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-slate-100 text-slate-800 text-xs font-semibold rounded hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#0F1E36]" />
                <span>{lang === 'ar' ? 'فتح الموقع في تطبيق خرائط Google' : 'Open in Google Maps Navigation'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Verified Map Embed */}
      <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#0F1E36]" />
            <span className="font-bold text-slate-900">
              {lang === 'ar' ? 'خريطة الموقع المعتمدة' : 'Verified Location Map'}
            </span>
            <span className="text-slate-500">
              · {lang === 'ar' ? 'مقابل لولو هايبر ماركت، الراشدية 3، عجمان' : 'Opposite Lulu Hypermarket, Al Rashidiya 3, Ajman'}
            </span>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0F1E36] font-semibold hover:underline flex items-center gap-1"
          >
            <span>{lang === 'ar' ? 'عرض خريطة كاملة' : 'Open Fullscreen Map'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
        <div className="w-full h-80 sm:h-96 relative bg-slate-100">
          <iframe
            title="Jeddah Typing Office Location"
            src="https://maps.google.com/maps?q=25.4052,55.4418+(Jeddah+Typing+Office+-+Opposite+Lulu+Hypermarket+Al+Rashidiya+3+Ajman)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
