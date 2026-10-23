import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { Language } from '../data/translations';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
  lang?: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type, lang = 'en' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#0F1E36]" />
            ) : (
              <FileText className="w-5 h-5 text-[#0F1E36]" />
            )}
            <h3 className="text-base font-bold text-slate-900">
              {type === 'privacy'
                ? (lang === 'ar' ? 'إشعار الخصوصية وحماية البيانات' : 'Privacy Notice & Data Protection')
                : (lang === 'ar' ? 'شروط الخدمة والإفصاح التنظيمي' : 'Terms of Service & Regulatory Disclaimer')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 py-5 overflow-y-auto space-y-4 text-xs text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            lang === 'ar' ? (
              <>
                <p className="font-semibold text-slate-800">
                  مكتب جدة للطباعة – الراشدية 3، عجمان، دولة الإمارات العربية المتحدة
                </p>
                <p>
                  يوضح هذا الإشعار كيفية جمع واستخدام وتأمين معلومات التواصل والبيانات الإدارية المقدمة من المتعاملين، بما يتوافق مع المرسوم بقانون اتحادي رقم (45) لسنة 2021 بشأن حماية البيانات الشخصية في دولة الإمارات.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">1. نطاق البيانات المجمعة</h4>
                <p>
                  يجمع هذا الموقع الحد الأدنى من بيانات التواصل الضرورية للرد على استفساراتكم، وتشمل: الاسم الكامل، ورقم الهاتف المتحرك / الواتساب، والبريد الإلكتروني، والخدمة المطلوب الاستفسار عنها.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">2. حظر رفع المستندات الحساسة عبر النماذج العامة</h4>
                <p>
                  نلتزم بأعلى معايير أمان الوثائق؛ لذا يمنع رفع أو إرسال صور جوازات السفر أو بطاقات الهوية أو الأرقام المصرفية عبر استمارات الموقع المفتوحة. يتم فحص ومطابقة الوثائق الرسمية الأصلية شخصياً في مقر المكتب أو عبر قنوات واتساب المباشرة والمشفرة.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">3. الغرض من استخدام البيانات</h4>
                <p>
                  تستخدم المعلومات للرد على طلباتكم وتقديم عروض الأسعار وتحديد متطلبات المعاملات فقط. لا نقوم إطلاقاً ببيع أو تأجير أو مشاركة بيانات المتعاملين مع أي جهات تسويقية أو تجارية خارجية.
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-slate-800">
                  Jeddah Typing Office – Al Rashidiya 3, Ajman, UAE
                </p>
                <p>
                  This Privacy Notice explains how Jeddah Typing Office collects, uses, handles, and safeguards contact and administrative information provided by clients in accordance with applicable UAE data protection laws.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">1. Scope of Information Collected</h4>
                <p>
                  Through this website, we collect only minimal contact details necessary to answer client inquiries, including your full name, telephone/WhatsApp contact number, email address, and service description.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">2. Strict Prohibition on Sensitive Documents via Web Form</h4>
                <p>
                  We strictly adhere to secure document processing standards. Clients must NOT upload or transmit sensitive personal identification documents (such as original passport copies, national identity cards, or credit card numbers) through public web forms. Original document verification occurs in person at our physical office in Ajman or through verified, end-to-end encrypted official channels.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">3. Purpose and Use of Data</h4>
                <p>
                  Information submitted through our website is solely used to respond to service inquiries, provide quotations, schedule appointments, and coordinate administrative paperwork. We never sell, rent, lease, or distribute customer information to commercial third parties or advertising brokers.
                </p>
              </>
            )
          ) : (
            lang === 'ar' ? (
              <>
                <p className="font-semibold text-slate-800">
                  شروط الاستخدام والخدمات الإدارية
                </p>
                <p>
                  باستخدامك لهذا الموقع أو طلب خدمات الطباعة والدعم الإداري من مكتب جدة للطباعة، فإنك تقر وتوافق على البنود والشروط التالية:
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">1. طبيعة المنشأة (مكتب إداري خاص)</h4>
                <p>
                  مكتب جدة للطباعة هو منشأة تجارية خاصة مرخصة للطباعة والدعم الإداري وتنسيق المستندات في عجمان، وليس دائرة حكومية أو وزارة أو جهة قضائية أو سفارة، ولا يدعي أي صفة شراكة حكومية رسمية.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">2. عدم ضمان القرارات الحكومية</h4>
                <p>
                  تخضع كافة الموافقات وتأشيرات الإقامة وأذونات الدخول وتراخيص الشركات والفحوصات الطبية للتقدير الحصري للجهات الحكومية المعنية بدولة الإمارات. لا يضمن المكتب الموافقة الحكومية أو أوقات إنجاز محددة.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">3. عدم تقديم الاستشارات القانونية</h4>
                <p>
                  تنحصر خدماتنا في الطباعة والتجهيز الإداري وتعبئة الاستمارات الرسمية. لا تشكل خدماتنا استشارات قانونية مرخصة. في حال وجود نزاعات قضائية أو عمالية، يتعين الرجوع إلى المحامين والمستشارين القانونيين المعتمدين.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">4. مسؤولية صحة المستندات</h4>
                <p>
                  يتحمل العميل كامل المسؤولية القانونية عن صحة وأصالة الوثائق وجوازات السفر والبيانات المقدمة للطباعة، ويخلي المكتب مسؤوليته عن أي غرامات ناتجة عن بيانات مغلوطة أو وثائق منتهية.
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-slate-800">
                  Terms of Service & Administrative Engagement
                </p>
                <p>
                  By accessing this website or utilizing typing and documentation support services provided by Jeddah Typing Office, you acknowledge and agree to the following conditions:
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">1. Nature of Business (Private Administrative Office)</h4>
                <p>
                  Jeddah Typing Office is a private commercial typing, document formatting, and administrative liaison office registered in Ajman, UAE. Jeddah Typing Office is NOT a government department, ministry, court, or immigration authority, and does NOT claim official governmental partnership or status.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">2. No Guarantee of Outcomes or Timelines</h4>
                <p>
                  All approvals, trade licenses, entry permits, residency visas, medical fitness certificates, and official documents are issued solely at the discretion of the competent UAE federal and local government authorities (such as ICP, MOHRE, Ajman DED, and Ajman Municipality). Jeddah Typing Office cannot and does not guarantee the issuance, timing, or approval of any visa, license, or legal outcome.
                </p>

                <h4 className="font-bold text-slate-900 text-sm pt-2">3. Non-Provision of Legal Advice</h4>
                <p>
                  Our services encompass clerical typing, form completion, administrative assembly, and procedural coordination. Nothing on this website or communicated by staff constitutes licensed legal advice. Clients seeking legal counsel or representation in dispute matters must consult qualified UAE advocates or legal consultants.
                </p>
              </>
            )
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#0F1E36] rounded-md hover:bg-[#1E3A8A] transition-colors"
          >
            {lang === 'ar' ? 'فهمت وموافق / إغلاق' : 'I Understand & Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
