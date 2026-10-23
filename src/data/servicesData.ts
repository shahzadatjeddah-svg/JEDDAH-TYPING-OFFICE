import { ServiceItem, FaqItem } from '../types';

export const SERVICES_CATALOG: ServiceItem[] = [
  // --- TYPING SERVICES ---
  {
    id: 'emirates-id-typing',
    title: 'Emirates ID Application Typing',
    titleAr: 'طباعة استمارة بطاقة الهوية الإماراتية',
    category: 'typing',
    tagline: 'Accurate form typing for new, renewal, and replacement Emirates ID cards.',
    taglineAr: 'طباعة دقيقة لمعاملات الهوية الجديدة، وتجديد الهوية، وبدل فاقد وتعديل البيانات.',
    description: 'We prepare and type official Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) applications for UAE citizens, residents, and newly arrived expatriates.',
    descriptionAr: 'نقوم بتجهيز وطباعة استمارات الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ (ICP) للمواطنين والمقيمين والوافدين الجدد في دولة الإمارات وفق أعلى معايير الدقة.',
    deliverables: [
      'ICP application form typing and biometric schedule slip',
      'Data verification against original passport and visa records',
      'Assistance with status tracking reference number generation',
      'Address and contact detail update requests'
    ],
    deliverablesAr: [
      'طباعة استمارة طلب الهوية وحجز موعد البصمة البيومترية',
      'تدقيق وتطابق البيانات مع جواز السفر والإقامة الرسمية',
      'تزويد العميل برقم الطلب (PRAN) لتتبع حالة الإصدار',
      'معاملات تحديث العنوان وأرقام الاتصال والبيانات الشخصية'
    ],
    requiredDocuments: [
      'Original Passport & valid UAE Residence Visa copy (or Entry Permit)',
      'Current Emirates ID (for renewals or data amendments)',
      'High-resolution passport-size photograph (white background)',
      'Active UAE mobile number for OTP verification'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي وصورة الإقامة سارية المفعول (أو تصريح الدخول)',
      'بطاقة الهوية الأصلية (في حالة التجديد أو التعديل)',
      'صورة شخصية حديثة بخلفية بيضاء عالية الجودة',
      'رقم هاتف إماراتي مفعّل لاستلام رمز التحقق (OTP)'
    ],
    authority: 'Federal Authority for Identity & Citizenship (ICP)',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية (ICP)',
    estimatedTime: 'Typing completed in 10–15 minutes at our office',
    estimatedTimeAr: 'تنجز الطباعة خلال 10–15 دقيقة في المكتب'
  },
  {
    id: 'medical-fitness-typing',
    title: 'Medical Fitness Application Preparation',
    titleAr: 'طباعة استمارة الفحص الطبي للإقامة',
    category: 'typing',
    tagline: 'Standard and urgent medical test form preparation for residency visas.',
    taglineAr: 'طباعة استمارات الفحص الطبي العادي والمستعجل لإصدار وتجديد الإقامة.',
    description: 'Typing of medical fitness examination applications for visa issuance and renewals in coordination with Ministry of Health and Prevention (MoHAP) or Ajman Medical Examination Centers.',
    descriptionAr: 'طباعة وتجهيز استمارات الفحص الطبي للوافدين والعمال بالتعاون مع مراكز وزارة الصحة ووقاية المجتمع (MoHAP) ومراكز الطب الوقائي في عجمان.',
    deliverables: [
      'Government health authority application typing',
      'Guidance on nearest designated Ajman medical fitness center',
      'Assistance with regular vs. express processing selection',
      'Receipt and appointment slip generation'
    ],
    deliverablesAr: [
      'طباعة طلب فحص اللياقة الطبية المعتمد لدى وزارة الصحة',
      'الإرشاد لأقرب مركز فحص طبي في إمارة عجمان',
      'المساعدة في اختيار الباقة (عادي أو مستعجل)',
      'استخراج إيصال السداد وموعد الفحص'
    ],
    requiredDocuments: [
      'Valid passport copy with entry stamp / visa page',
      'Recent passport-size photo with white background',
      'Current Emirates ID or entry permit paper',
      'Company trade license copy (for employment visas)'
    ],
    requiredDocumentsAr: [
      'صورة جواز السفر مع ختم الدخول أو ملصق الإقامة',
      'صورة شخصية حديثة بخلفية بيضاء',
      'بطاقة الهوية الحالية أو ورقة تصريح الدخول',
      'صورة الرخصة التجارية للمنشأة (لتأشيرات العمل)'
    ],
    authority: 'Ministry of Health and Prevention (MoHAP) / Ajman Health Authority',
    authorityAr: 'وزارة الصحة ووقاية المجتمع / الطب الوقائي بعجمان',
    estimatedTime: 'Immediate in-office typing',
    estimatedTimeAr: 'طباعة فورية في المكتب'
  },
  {
    id: 'mohre-labour-typing',
    title: 'MOHRE Contract & Labour Application Typing',
    titleAr: 'طباعة عقود وزارة الموارد البشرية والتوطين (تسهيل)',
    category: 'typing',
    tagline: 'Official Ministry of Human Resources & Emiratisation document preparation.',
    taglineAr: 'تجهيز وطباعة عروض العمل والعقود الإلكترونية وتعديل المسميات.',
    description: 'Professional typing of standardized MOHRE employment offer letters, labour contract renewals, modify job title requests, and mission work permit submissions.',
    descriptionAr: 'طباعة مهنية لعروض العمل الرسمية ثنائية اللغة، وعقود العمل الإلكترونية، وتجديد تصاريح العمل، وتعديل المسميات الوظيفية والمهن.',
    deliverables: [
      'Standardized bilingual electronic employment contract typing',
      'Offer letter preparation adhering to MOHRE wage guidelines',
      'Submission coordination through authorized Tasheel channels',
      'Labour card renewal application assistance'
    ],
    deliverablesAr: [
      'طباعة عقود العمل الإلكترونية الموحدة باللغتين العربية والإنجليزية',
      'تجهيز عرض العمل المتوافق مع معايير نظام حماية الأجور (WPS)',
      'تنسيق التقديم عبر قنوات مراكز الخدمة المعتمدة (تسهيل)',
      'معاملات تجديد بطاقات وتصاريح العمل'
    ],
    requiredDocuments: [
      'Establishment Card and valid Trade License of the employer',
      'Candidate passport copy and highest educational qualification (attested if required)',
      'Previous visa cancellation paper (if transferring within UAE)',
      'Basic salary and allowances structure approved by employer'
    ],
    requiredDocumentsAr: [
      'بطاقة المنشأة والرخصة التجارية سارية المفعول للشركة',
      'صورة جواز سفر الموظف والمؤهل الدراسي مصدقاً (للمهن التخصصية)',
      'ورقة إلغاء التأشيرة السابقة (في حالة النقل الداخلي)',
      'هيكل الراتب الأساسي والبدلات المعتمد من صاحب العمل'
    ],
    authority: 'Ministry of Human Resources & Emiratisation (MOHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين (MOHRE)',
    estimatedTime: 'Subject to employer approval & MOHRE review',
    estimatedTimeAr: 'تعتمد على مراجعة المنشأة واعتماد الوزارة'
  },
  {
    id: 'tenancy-tasdeeq-typing',
    title: 'Tenancy Contract & Tasdeeq / Ejari Form Preparation',
    titleAr: 'تجهيز استمارات تصديق عقود الإيجار (بلدية عجمان)',
    category: 'typing',
    tagline: 'Attestation form filling for residential and commercial premises in Ajman.',
    taglineAr: 'تعبئة استمارات تصديق العقود الإيجارية السكنية والتجارية بدائرة البلدية.',
    description: 'Administrative form typing and preparation of documentation required for Ajman Municipality Tasdeeq tenancy attestation and commercial lease registrations.',
    descriptionAr: 'طباعة الاستمارات الإدارية وتجميع المستندات المطلوبة لتصديق عقود الإيجار السكنية والتجارية عبر منصة تصديق التابعة لبلدية عجمان.',
    deliverables: [
      'Tasdeeq application form typing & document assembly',
      'Formatting of standard lease agreements',
      'Electricity and water (FEWA/Etihad WE) connection document preparation',
      'Chamber of Commerce inspection prerequisite checklists'
    ],
    deliverablesAr: [
      'طباعة طلب تصديق العقد الإيجاري وتدقيق الأوراق المرفقة',
      'تنسيق نماذج عقود الإيجار المعتمدة',
      'تجهيز مستندات توصيل خدمات الكهرباء والماء (الاتحاد للماء والكهرباء)',
      'قوائم متطلبات معاينة وتفتيش الغرفة التجارية والمطابقة'
    ],
    requiredDocuments: [
      'Original Tenancy Contract signed by landlord and tenant',
      'Title Deed (Mukhatat) and Landlord Emirates ID / Passport copy',
      'Tenant Emirates ID & Residency Visa copy',
      'Latest FEWA/Etihad Water & Electricity bill or account clearance'
    ],
    requiredDocumentsAr: [
      'عقد الإيجار الأصلي موقعاً من المالك والمستأجر',
      'مخطط الأرض / ملكية العقار وصورة هوية أو جواز المالك',
      'صورة بطاقة الهوية والإقامة سارية المفعول للمستأجر',
      'فاتورة الكهرباء والماء الأخيرة أو براءة الذمة'
    ],
    authority: 'Ajman Municipality & Planning Department (Tasdeeq)',
    authorityAr: 'دائرة البلدية والتخطيط بعجمان (تصديق)',
    estimatedTime: 'Same-day typing assistance',
    estimatedTimeAr: 'إنجاز الطباعة في نفس اليوم'
  },

  // --- BUSINESS SETUP IN AJMAN ---
  {
    id: 'trade-licence-initial-approval',
    title: 'Trade Licence Initial Approval & Activity Selection',
    titleAr: 'حجز الاسم التجاري والموافقة المبدئية (اقتصادية عجمان)',
    category: 'business-setup',
    tagline: 'Guiding entrepreneurs through Ajman Department of Economic Development paperwork.',
    taglineAr: 'مساعدة المستثمرين في حجز الأسماء واختيار الأنشطة واستخراج الموافقة المبدئية.',
    description: 'Comprehensive administrative assistance for starting a commercial, industrial, or professional business in Ajman Mainland. We help verify official economic activity codes and compile the initial submission dossier.',
    descriptionAr: 'دعم إداري متكامل لتأسيس الشركات التجارية والمهنية والصناعية داخل إمارة عجمان. نساعدك في مطابقة الأنشطة المعتمدة لدى اقتصادية عجمان وتجهيز ملف المعاملة الأولية.',
    deliverables: [
      'Trade Name reservation application typing with Ajman DED',
      'Official economic activity code verification and structuring',
      'Initial Approval certificate application submission assistance',
      'External approval checklists (Civil Defence, Municipality, Police where required)'
    ],
    deliverablesAr: [
      'طباعة طلب حجز الاسم التجاري لدى دائرة التنمية الاقتصادية بعجمان',
      'تحديد ومطابقة رموز الأنشطة الاقتصادية المعتمدة',
      'تجهيز طلب شهادة الموافقة المبدئية وتقديم الملف',
      'متابعة قوائم الموافقات الخارجية (الدفاع المدني، البلدية، الشرطة عند اللزوم)'
    ],
    requiredDocuments: [
      'Color passport copies and Emirates ID of all proposed shareholders/partners',
      '3 to 5 preferred trade name options in English and Arabic',
      'Proposed business activities list',
      'No Objection Certificate (NOC) if any partner is currently employed in UAE'
    ],
    requiredDocumentsAr: [
      'صور ملونة لجوازات السفر وبطاقات الهوية لجميع الشركاء المؤسسين',
      '3 إلى 5 خيارات للاسم التجاري المقترح بالعربية والإنجليزية',
      'قائمة الأنشطة الاقتصادية المراد ممارستها',
      'شهادة لا مانع (NOC) في حال كان أحد الشركاء على رأس عمل بالإمارات'
    ],
    authority: 'Ajman Department of Economic Development (Ajman DED)',
    authorityAr: 'دائرة التنمية الاقتصادية بعجمان (Ajman DED)',
    estimatedTime: 'DED review subject to activity requirements',
    estimatedTimeAr: 'تخضع لمراجعة وضوابط دائرة التنمية الاقتصادية'
  },
  {
    id: 'moa-contract-typing',
    title: 'Memorandum of Association (MOA) & Legal Drafting',
    titleAr: 'طباعة وتنسيق عقود التأسيس وملاحق الشراكة (MOA)',
    category: 'business-setup',
    tagline: 'Court & Notary Public compliant contract typing for LLCs & Civil Companies.',
    taglineAr: 'صياغة وطباعة عقود الشركات ذات المسؤولية المحدودة متوافقة مع الكاتب العدل.',
    description: 'Typing and formatting of bilingual (Arabic/English) Memorandums of Association, Articles of Association, Share Sale agreements, and Civil Works agreements ready for digital or notary execution.',
    descriptionAr: 'طباعة وتنسيق عقود التأسيس ثنائية اللغة، وملاحق تعديل الشركاء، واتفاقيات بيع الحصص وتعيين المدراء جاهزة للتوثيق أمام الكاتب العدل أو عبر المنصات الرقمية.',
    deliverables: [
      'Bilingual MOA document typing formatted to UAE Ministry of Economy guidelines',
      'Drafting of share distribution, manager powers, and capital clauses',
      'Preparation of side agreements and corporate power of attorney documents',
      'Coordination assistance for online Notary Public signing'
    ],
    deliverablesAr: [
      'طباعة عقد التأسيس الموحد باللغتين العربية والإنجليزية وفق أنظمة وزارة الاقتصاد',
      'صياغة بنود توزيع الحصص، وصلاحيات المدير، ورأس المال',
      'تجهيز الوكالات والقرارات الإدارية الخاصة بالمنشأة',
      'المساعدة في متطلبات التوثيق الرقمي لدى الكاتب العدل بمحاكم عجمان'
    ],
    requiredDocuments: [
      'Ajman DED Initial Approval and Trade Name certificate',
      'Shareholders passport copies and Emirates IDs',
      'Agreed capital division and profit-sharing ratios',
      'Appointment details of the General Manager'
    ],
    requiredDocumentsAr: [
      'شهادة حجز الاسم التجاري والموافقة المبدئية من اقتصادية عجمان',
      'صور جوازات السفر والهويات لجميع الشركاء',
      'نسب توزيع رأس المال والأرباح والخسائر المتفق عليها',
      'بيانات وصلاحيات المدير العام للشركة'
    ],
    authority: 'Ministry of Economy / Ajman Courts Notary Public',
    authorityAr: 'وزارة الاقتصاد / كاتب عدل محاكم عجمان',
    estimatedTime: '1–2 business days preparation',
    estimatedTimeAr: 'يوم إلى يومي عمل للتجهيز والصياغة'
  },
  {
    id: 'licence-renewal-amendments',
    title: 'Trade Licence Renewal & Corporate Amendments',
    titleAr: 'تجديد الرخص التجارية وتعديل بيانات المنشأة',
    category: 'business-setup',
    tagline: 'Hassle-free annual renewal paperwork and corporate registry updates.',
    taglineAr: 'تجديد سنوي سلس للرخص، وتفادي الغرامات، وتعديل الشركاء والأنشطة.',
    description: 'Avoid late fines with structured paperwork support for trade licence renewals, partner additions, manager replacements, address transfers, and capital increases with Ajman DED.',
    descriptionAr: 'تجنب الغرامات المالية من خلال تجديد رخصتك التجارية في الموعد المحدد، بالإضافة إلى طباعة معاملات إدخال أو خروج شريك، وتغيير المدير، وتغيير موقع الرخصة.',
    deliverables: [
      'Annual trade licence renewal submission preparation',
      'Penalty calculation and fine waiver request documentation',
      'License amendment form typing (add/remove partner, change manager, activity change)',
      'Chamber of Commerce membership renewal paperwork'
    ],
    deliverablesAr: [
      'تجهيز ورفع طلب التجديد السنوي للرخصة التجارية',
      'احتساب الغرامات وصياغة طلبات الإعفاء أو التخفيض القانونية',
      'طباعة استمارات التعديل (إضافة شريك، تغيير اسم تجاري، إضافة أنشطة)',
      'تجديد شهادة عضوية غرفة تجارة وصناعة عجمان'
    ],
    requiredDocuments: [
      'Copy of existing Trade Licence and Chamber Certificate',
      'Valid lease agreement (attested with Tasdeeq)',
      'Valid passport copies and Emirates IDs of all active partners',
      'Board resolution or addendum to MOA for amendments'
    ],
    requiredDocumentsAr: [
      'صورة الرخصة التجارية الحالية وشهادة الغرفة',
      'عقد إيجار موقع الشركة ساري ومصدق (تصديق)',
      'صور جوازات السفر والهويات للشركاء سارية المفعول',
      'ملحق عقد التأسيس أو قرار الجمعية العمومية للتعديل'
    ],
    authority: 'Ajman DED & Ajman Chamber of Commerce',
    authorityAr: 'اقتصادية عجمان وغرفة تجارة وصناعة عجمان',
    estimatedTime: 'Fast turnaround upon receipt of valid documents',
    estimatedTimeAr: 'إنجاز فوري عند اكتمال الأوراق الرسمية'
  },
  {
    id: 'establishment-card-paperwork',
    title: 'Immigration & Labour Establishment Card Processing',
    titleAr: 'إصدار وتجديد بطاقة المنشأة (الإقامة والعمل)',
    category: 'business-setup',
    tagline: 'Opening your company files with Immigration (GDRFA/ICP) and MOHRE.',
    taglineAr: 'فتح وتجديد ملف الشركة لدى الهيئة الاتحادية للهوية ووزارة العمل.',
    description: 'Establishment of corporate accounts for new companies to facilitate employee visa quotas, work permits, and residency sponsorships in Ajman.',
    descriptionAr: 'تأسيس وفتح الملفات الرسمية للمنشآت الجديدة لتسهيل استقدام وتعيين العمالة وإصدار تصاريح العمل والإقامات للشركاء والموظفين.',
    deliverables: [
      'ICP Immigration Establishment Card application preparation',
      'MOHRE Company File opening and authorized signatory registration',
      'Establishment card renewal and digital token assistance',
      'Company profile alignment between DED, MOHRE, and Immigration'
    ],
    deliverablesAr: [
      'تجهيز وطباعة طلب بطاقة منشأة الإدارة العامة للإقامة وشؤون الأجانب / الهوية',
      'فتح ملف المنشأة لدى وزارة الموارد البشرية وتسجيل المفوض بالتوقيع',
      'تجديد بطاقات المنشأة المنتهية وتحديث التوقيع الإلكتروني',
      'مطابقة بيانات الشركة بين الاقتصادية ووزارة العمل والجوازات'
    ],
    requiredDocuments: [
      'Valid Ajman Trade Licence & Chamber of Commerce certificate',
      'Attested MOA and Tenancy contract (Tasdeeq)',
      'Authorized signatory passport copy, Emirates ID, and family book (for national partners)',
      'Original Establishment card (for renewals)'
    ],
    requiredDocumentsAr: [
      'الرخصة التجارية سارية المفعول وشهادة غرفة عجمان',
      'عقد التأسيس الموثق وعقد الإيجار المصدق (تصديق)',
      'جواز وهوية المفوض بالتوقيع وخلاصة القيد (للشريك المواطن)',
      'أصل بطاقة المنشأة القديمة (في حالة التجديد)'
    ],
    authority: 'ICP Ajman / MOHRE',
    authorityAr: 'الهيئة الاتحادية للهوية وشؤون الأجانب / وزارة العمل',
    estimatedTime: '24–48 hours for document preparation',
    estimatedTimeAr: '24 إلى 48 ساعة لتجهيز الأوراق والملف'
  },

  // --- PRO SERVICES ---
  {
    id: 'residency-visa-processing',
    title: 'Residence & Employment Visa Services',
    titleAr: 'معاملات تأشيرات الإقامة والعمل والاستثمار',
    category: 'pro',
    tagline: 'Full administrative pipeline from entry permit to residency stamping.',
    taglineAr: 'متابعة شاملة من إذن الدخول وتعديل الوضع وحتى صدور الإقامة الإلكترونية.',
    description: 'End-to-end documentation coordination for corporate employees and business investors. We type entry permits, change of status forms, medical test slips, and residency approvals.',
    descriptionAr: 'تجهيز وطباعة كافة استمارات تأشيرات العمل لموظفي الشركات وتأشيرات إقامة المستثمرين والشركاء، بما في ذلك أذونات الدخول، وتعديل الوضع داخل الدولة، والفحص الطبي، وتثبيت الإقامة.',
    deliverables: [
      'New employment / investor entry permit typing',
      'In-country status change or inside-country visa transfer paperwork',
      'Medical fitness & biometric scheduling paperwork',
      'Electronic residency permit issuance and e-visa generation'
    ],
    deliverablesAr: [
      'طباعة أذونات الدخول للعمل أو المستثمر',
      'معاملات تعديل الوضع داخل الدولة أو نقل الكفالة',
      'طباعة أوراق الفحص الطبي ومواعيد الهوية والبصمة',
      'إصدار الإقامة الإلكترونية وتزويد العميل بنسخة التأشيرة'
    ],
    requiredDocuments: [
      'Original passport with minimum 6 months validity',
      'Signed electronic employment contract or company investor documents',
      'Attested academic degrees for managerial or technical designations',
      'Digital passport photograph with white background'
    ],
    requiredDocumentsAr: [
      'جواز السفر الأصلي بصلاحية لا تقل عن 6 أشهر',
      'عقد العمل الإلكتروني الموقع أو أوراق صفة الشريك/المستثمر',
      'الشهادات الدراسية مصدقة للمهن الإدارية والمهنية',
      'صورة شخصية رقمية بخلفية بيضاء'
    ],
    authority: 'General Directorate of Residency and Foreigners Affairs (GDRFA) / ICP',
    authorityAr: 'الإدارة العامة للإقامة وشؤون الأجانب / الهيئة الاتحادية للهوية (ICP)',
    estimatedTime: 'Timelines governed by ICP approval cycles',
    estimatedTimeAr: 'المدد الزمنية مرتبطة بأنظمة الهيئة الاتحادية للهوية'
  },
  {
    id: 'family-visa-sponsorship',
    title: 'Family & Dependent Visa Document Preparation',
    titleAr: 'تأشيرات إقامة الأسرة والأبناء والوالدين',
    category: 'pro',
    tagline: 'Sponsor your spouse, children, or parents with clear document guidance.',
    taglineAr: 'إجراءات استقدام وكفالة الزوجة والأبناء والوالدين وفق الضوابط المعتمدة.',
    description: 'We assist UAE residents in assembling salary proofs, tenancy attestations, birth certificates, and marriage certificates required by immigration authorities for family sponsorships.',
    descriptionAr: 'نساعد المقيمين في تجهيز وطباعة ملفات كفالة العائلة (الزوجة والأولاد والوالدين)، وتدقيق شهادات الراتب، وعقود الإيجار المصدقة، والشهادات المعتمدة قبل التقديم.',
    deliverables: [
      'Dependent entry permit application typing',
      'Salary certificate and bank statement alignment guidance',
      'Family status change and residence visa stamping preparation',
      'Emirates ID application for dependents'
    ],
    deliverablesAr: [
      'طباعة استمارات إذن الدخول لأفراد الأسرة',
      'تدقيق متطلبات الراتب وكشف الحساب البنكي وعقد السكن',
      'معاملات تعديل الوضع وتثبيت الإقامة العائلية',
      'طباعة استمارات الهوية الإماراتية لجميع أفراد الأسرة'
    ],
    requiredDocuments: [
      'Sponsor original passport, valid visa, and Emirates ID',
      'Attested Marriage Certificate (for spouse) / Attested Birth Certificates (for children)',
      'Attested Ejari/Tasdeeq tenancy contract and latest electricity bill',
      'Official Salary Certificate (for government/freezone) or MOHRE Labour Contract'
    ],
    requiredDocumentsAr: [
      'جواز وهوية الكفيل وتأشيرة الإقامة سارية المفعول',
      'عقد الزواج مصدقاً رسمياً / شهادات ميلاد الأبناء مصدقة',
      'عقد الإيجار المصدق (تصديق / إيجاري) وفاتورة الكهرباء',
      'شهادة راتب رسمية أو عقد العمل الصادر من وزارة الموارد البشرية'
    ],
    authority: 'ICP / Ajman Immigration',
    authorityAr: 'الهيئة الاتحادية للهوية / جوازات عجمان',
    estimatedTime: 'Guidance and immediate form typing',
    estimatedTimeAr: 'استشارة وطباعة فورية للاستمارات'
  },
  {
    id: 'visa-cancellation-absconding',
    title: 'Visa Cancellation & Status Regularization Paperwork',
    titleAr: 'إلغاء الإقامات وتعديل وتوفيق الأوضاع القانونية',
    category: 'pro',
    tagline: 'Smooth exit, job transfer, and legal status regularization documentation.',
    taglineAr: 'إلغاء تصاريح العمل والإقامات، وتصفية المستحقات، ومعاملات تعديل الوضع.',
    description: 'Proper document typing for employment visa cancellations, partner visa exits, dependent cancellations, and grace period compliance paperwork.',
    descriptionAr: 'طباعة معاملات إلغاء بطاقات العمل وتأشيرات الإقامة للموظفين أو الشركاء أو العائلة، وتجهيز براءات الذمة للاستفادة من فترة السماح القانونية دون غرامات.',
    deliverables: [
      'MOHRE work permit cancellation document preparation',
      'ICP residency cancellation application typing',
      'Assistance with settlement sign-offs & dues receipt paperwork',
      'Clearance letter documentation for new employer transfers'
    ],
    deliverablesAr: [
      'تجهيز وطباعة طلب إلغاء تصريح العمل بوزارة الموارد البشرية',
      'طباعة طلب إلغاء الإقامة بالهيئة الاتحادية للهوية والجنسية',
      'صياغة نماذج المخالصات العمالية واستلام المستحقات',
      'تجهيز أوراق نقل الكفالة إلى صاحب عمل جديد'
    ],
    requiredDocuments: [
      'Original Emirates ID of the employee/resident',
      'Passport copy with residency visa page',
      'Signed labour cancellation form or partner exit resolution',
      'Company trade license and establishment card copies'
    ],
    requiredDocumentsAr: [
      'أصل بطاقة الهوية الإماراتية للمكفول / الموظف',
      'صورة جواز السفر مع صفحة الإقامة المراد إلغاؤها',
      'نموذج توقيع إلغاء العمل أو قرار تخارج الشريك',
      'صورة الرخصة وبطاقة منشأة الشركة'
    ],
    authority: 'MOHRE & ICP Ajman',
    authorityAr: 'وزارة الموارد البشرية والهيئة الاتحادية للهوية بعجمان',
    estimatedTime: 'Same-day filing preparation',
    estimatedTimeAr: 'تجهيز المعاملة في نفس اليوم'
  },

  // --- GOVERNMENT & DOCUMENT SERVICES ---
  {
    id: 'certificate-attestation-coordination',
    title: 'Document & Certificate Attestation Coordination',
    titleAr: 'تنسيق تصديق الشهادات والوثائق (وزارة الخارجية)',
    category: 'government',
    tagline: 'Coordination for MOFA, embassy, and educational credential verifications.',
    taglineAr: 'تصديقات وزارة الخارجية والسفارات للشهادات والوثائق التجارية والشخصية.',
    description: 'Guidance and administrative submission coordination for personal, commercial, and educational documents requiring verification from UAE Ministry of Foreign Affairs (MOFA).',
    descriptionAr: 'إرشاد وتنسيق تصديق الشهادات الجامعية، وشهادات الميلاد والزواج، والوكالات والعقود التجارية الصادرة من داخل أو خارج الدولة واعتمادها لدى وزارة الخارجية الإماراتية (MOFA).',
    deliverables: [
      'Verification check against MOFA electronic attestation requirements',
      'Application submission for MOFA smart stamps & e-attestation',
      'Guidance on required prerequisite stamps (Notary, Home Ministry, UAE Embassy abroad)',
      'Commercial invoice and legal translation coordination'
    ],
    deliverablesAr: [
      'فحص الوثائق والتأكد من استيفاء شروط التصديق الإلكتروني',
      'رفع الطلبات للحصول على طابع التصديق الذكي لوزارة الخارجية',
      'إرشاد العميل بالأختام المسبقة المطلوبة (الخارجية وسفارة الإمارات بالخارج)',
      'تنسيق الترجمة القانونية المعتمدة والفواتير التجارية'
    ],
    requiredDocuments: [
      'Original physical document or certified digital copy',
      'Country of origin official seals and embassy endorsement (if foreign document)',
      'Applicant Emirates ID and active email'
    ],
    requiredDocumentsAr: [
      'أصل المستند الورقي أو النسخة الرقمية المعتمدة',
      'أختام وزارة خارجية بلد الإصدار وسفارة دولة الإمارات (للوثائق الأجنبية)',
      'بطاقة الهوية والبريد الإلكتروني لصاحب المعاملة'
    ],
    authority: 'Ministry of Foreign Affairs (MOFA UAE)',
    authorityAr: 'وزارة الخارجية والتعاون الدولي (MOFA)',
    estimatedTime: 'Standard MOFA processing schedules apply',
    estimatedTimeAr: 'وفق المهل المقررة في النظام الإلكتروني لوزارة الخارجية'
  },
  {
    id: 'uae-pass-police-clearance',
    title: 'UAE Pass, Police Clearance & Digital Government Services',
    titleAr: 'الهوية الرقمية وشهادة بحث الحالة الجنائية (شهادة حسن السيرة)',
    category: 'government',
    tagline: 'Hands-on assistance with national digital portals and certificate requests.',
    taglineAr: 'المساعدة في تفعيل الهوية الرقمية والتقديم على شهادات الشرطة والمعاملات الذكية.',
    description: 'Help navigating national digital portals for individuals seeking Police Clearance Certificates (Good Conduct), fine inquiries, or digital identity assistance.',
    descriptionAr: 'مساعدة المتعاملين في استخدام البوابات الحكومية الذكية لاستخراج شهادة بحث الحالة الجنائية (حسن سيرة وسلوك)، والاستعلام عن الغرامات ودفعها، وتفعيل تطبيق الهوية الرقمية (UAE Pass).',
    deliverables: [
      'Police Clearance Certificate (PCC) application typing for Ajman / MOI',
      'Assistance with Ajman Municipality portal service requests',
      'Immigration fine inquiry and settlement consultation paperwork',
      'Official Arabic document formatting for government petitions'
    ],
    deliverablesAr: [
      'طباعة طلب شهادة بحث الحالة الجنائية لدى شرطة عجمان / وزارة الداخلية',
      'المساعدة في تقديم المعاملات الإلكترونية بدائرة بلدية وتخطيط عجمان',
      'الاستعلام عن غرامات الإقامة وبطاقات العمل وتجهيز طلبات التسوية',
      'صياغة الخطابات والالتماسات الإدارية باللغة العربية الرسمية'
    ],
    requiredDocuments: [
      'Active Emirates ID and registered UAE Pass login',
      'Clear passport photograph',
      'Purpose of certificate request (e.g., employment, immigration, license)'
    ],
    requiredDocumentsAr: [
      'بطاقة هوية سارية أو تفعيل حساب الهوية الرقمية (UAE Pass)',
      'صورة شخصية حديثة وواضحة',
      'تحديد الغرض من الشهادة (للعمل، التراخيص، أو السفر)'
    ],
    authority: 'Ministry of Interior (MOI) / Ajman Police / Ajman Municipality',
    authorityAr: 'وزارة الداخلية / القيادة العامة لشرطة عجمان / بلدية عجمان',
    estimatedTime: 'Immediate portal form completion',
    estimatedTimeAr: 'إدخال فوري للطلب عبر المنصات الرسمية'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Where is Jeddah Typing Office located in Ajman?',
    questionAr: 'أين يقع مكتب جدة للطباعة في عجمان؟',
    answer: 'We are conveniently located at Office No. 3, in the same building as Panoor Restaurant, directly opposite Lulu Hypermarket, in Al Rashidiya 3, Ajman, UAE. Ample parking is available in the surrounding area.',
    answerAr: 'يقع مكتبنا في إمارة عجمان، منطقة الراشدية 3، مكتب رقم 3 في نفس مبنى مطعم بانور، مباشرة مقابل المدخل الرئيسي لـ "لولو هايبر ماركت". تتوفر مواقف سيارات عامة ومريحة حول المبنى.',
    category: 'general'
  },
  {
    question: 'Is Jeddah Typing Office a government department or an official partner?',
    questionAr: 'هل مكتب جدة للطباعة دائرة حكومية أو شريك رسمي معتمد؟',
    answer: 'No. Jeddah Typing Office is an independent, private typing and administrative support consultancy licensed in Ajman. We assist clients with accurate document preparation, form filling, and administrative coordination with government portals. All visa issuances, trade licenses, permits, and official approvals are solely decided by competent UAE government authorities (such as ICP, MOHRE, Ajman DED, and Ajman Municipality).',
    answerAr: 'لا، مكتب جدة للطباعة هو مكتب خاص مستقل مرخص لخدمات الطباعة والاستشارات الإدارية وتجهيز المعاملات في عجمان. نحن نساعد المتعاملين في تعبئة الاستمارات ومطابقة الأوراق ورفعها عبر القنوات الرسمية. إصدار التأشيرات وتراخيص الشركات والموافقات الرسمية يظل حقاً سيادياً وقراراً حصرياً للدوائر والوزارات الحكومية المختصة.',
    category: 'general'
  },
  {
    question: 'What are your operating hours?',
    questionAr: 'ما هي مواعيد وأوقات العمل في المكتب؟',
    answer: 'We are open Saturday to Thursday from 8:00 AM to 9:30 PM, and on Friday from 4:00 PM to 9:30 PM. Walk-ins are always welcomed, or you can message us on WhatsApp (+971 52 270 9196) in advance.',
    answerAr: 'نستقبلكم من السبت إلى الخميس من الساعة 8:00 صباحاً حتى 9:30 مساءً متواصلاً، ويوم الجمعة من الساعة 4:00 عصراً حتى 9:30 مساءً. نرحب بزيارتكم مباشرة في أي وقت أو مراسلتنا عبر واتساب (0522709196).',
    category: 'general'
  },
  {
    question: 'How much do government applications cost and what are your service fees?',
    questionAr: 'كم تبلغ رسوم المعاملات الحكومية ورسوم الطباعة بالمكتب؟',
    answer: 'Government fees are set directly by each respective authority (e.g. ICP, MOHRE, Ajman DED) and are subject to change based on nationality, company category, or visa type. Our typing and administrative fees are transparent, competitive, and quoted upfront before commencing any paperwork.',
    answerAr: 'الرسوم الحكومية تحددها الجهات الرسمية مباشرة (مثل الهيئة الاتحادية للهوية أو وزارة العمل أو اقتصادية عجمان) وتختلف بحسب الفئة ونوع التأشيرة أو النشاط التجاري. أما أتعاب الطباعة والخدمة الإدارية لدينا، فهي محددة وتنافسية ونوضحها للعميل بوضوح وشفافية تامة قبل البدء.',
    category: 'general'
  },
  {
    question: 'What documents are required to renew my Emirates ID?',
    questionAr: 'ما هي المستندات المطلوبة لتجديد بطاقة الهوية الإماراتية؟',
    answer: 'To type your Emirates ID renewal, please bring your current original Emirates ID card, a copy of your valid residence visa (or renewed entry permit/contract), and a recent high-resolution passport photo with a white background. Please also ensure your mobile phone is with you to receive the verification OTP from ICP.',
    answerAr: 'لتجديد بطاقة الهوية، يرجى إحضار بطاقة الهوية الحالية، وصورة الإقامة سارية المفعول (أو تصريح الدخول الجديد)، وصورة شخصية حديثة بخلفية بيضاء، مع ضرورة تواجد هاتفك المتحرك لاستلام رمز التحقق الفوري (OTP).',
    category: 'visas'
  },
  {
    question: 'Can you guarantee the approval or processing time of a visa or trade license?',
    questionAr: 'هل يضمن المكتب صدور الموافقة أو وقت محدد لإنجاز المعاملة؟',
    answer: 'No private office can guarantee government approvals or specific processing times. Final decisions, security checks, and turnaround schedules rest exclusively with UAE federal and local government departments. However, our experienced typists ensure your forms and paperwork are prepared 100% accurately and comply strictly with official guidelines to prevent unnecessary rejections or delays.',
    answerAr: 'لا يمكن لأي مكتب خاص ضمان الموافقة الحكومية أو مدة محددة للإصدار؛ فالموافقات والتدقيق الأمني حق حصري للدوائر الحكومية في الإمارات. دورنا هو ضمان إعداد أوراقك وتعبئة الاستمارات بدقة 100% ومطابقتها للمتطلبات لتفادي الرفض أو التأخير.',
    category: 'visas'
  },
  {
    question: 'What are the main steps to set up a new business in Ajman Mainland?',
    questionAr: 'ما هي الخطوات الأساسية لتأسيس شركة في عجمان؟',
    answer: 'Business setup typically involves: 1) Initial consultation & commercial activity selection with Ajman DED, 2) Trade Name reservation, 3) Initial Approval issuance, 4) Preparing and notarizing the Memorandum of Association (MOA), 5) Securing an attested tenancy contract (Tasdeeq) for office/shop space, and 6) Paying government fees to receive the official Trade Licence and Chamber of Commerce registration. We provide complete administrative and typing assistance for each step.',
    answerAr: 'خطوات التأسيس تشمل: 1) تحديد النشاط الاقتصادي المعتمد، 2) حجز الاسم التجاري لدى اقتصادية عجمان، 3) استخراج الموافقة المبدئية، 4) صياغة وتوثيق عقد التأسيس (MOA) لدى الكاتب العدل، 5) توثيق عقد إيجار المحل أو المكتب (تصديق)، 6) سداد الرسوم وإصدار الرخصة وعضوية الغرفة. ونحن نوفر لك المساعدة في كافة هذه الخطوات الإدارية.',
    category: 'business'
  },
  {
    question: 'Do you collect or store sensitive personal documents online?',
    questionAr: 'هل تقومون بحفظ أو تخزين مستندات الهوية الحساسة على الموقع؟',
    answer: 'No. For your security and privacy, we never request or store sensitive identity documents (like full passport scans or Emirates ID copies) over public website forms. All critical document handling is conducted securely in-person at our office or through verified, encrypted direct communication with our dedicated consultants.',
    answerAr: 'كلا، حرصاً على أمان وسرية بياناتكم ووفقاً لقوانين حماية البيانات في الإمارات، لا نطلب رفع جوازات السفر أو صور بطاقات الهوية عبر النماذج العامة في الموقع. تتم مراجعة الأوراق الثبوتية شخصياً بالمكتب أو عبر قنوات واتساب المباشرة والمشفرة.',
    category: 'documents'
  },
  {
    question: 'Can I sponsor my family (spouse and children) in the UAE through your office?',
    questionAr: 'هل يمكنني كفالة أسرتي (الزوجة والأبناء) من خلال مكتبكم؟',
    answer: 'Yes, we provide document preparation and form typing for family residence visas. We review your salary certificate, tenancy contract (Tasdeeq/Ejari), and attested marriage and birth certificates to ensure everything matches ICP sponsorship eligibility before typing the applications.',
    answerAr: 'نعم، نوفر طباعة وتجهيز استمارات كفالة وإقامة الأسرة. نقوم بفحص شهادة الراتب وعقد السكن المصدق وشهادات الزواج والميلاد المعتمدة للتأكد من استيفاء شروط الكفالة قبل الطباعة لتفادي أي رفض.',
    category: 'visas'
  }
];
