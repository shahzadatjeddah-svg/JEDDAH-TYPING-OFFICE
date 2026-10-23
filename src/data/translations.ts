export type Language = 'en' | 'ar';

export interface Translations {
  // Brand & Utility
  brandName: string;
  brandTagline: string;
  locationKicker: string;
  timingHeader: string;
  callMobile: string;
  callOffice: string;
  whatsapp: string;
  enquireNow: string;
  getAssistance: string;

  // Nav
  nav: {
    home: string;
    typing: string;
    businessSetup: string;
    pro: string;
    government: string;
    about: string;
    faq: string;
    contact: string;
  };

  // Hero
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    ctaWhatsapp: string;
    ctaCall: string;
    ctaAssistance: string;
    trust1: string;
    trust2: string;
    trust3: string;
  };

  // Disclaimer
  disclaimer: {
    badge: string;
    text: string;
  };

  // Service Highlights (Home)
  homeServices: {
    kicker: string;
    title: string;
    desc: string;
    typingTitle: string;
    typingDesc: string;
    businessTitle: string;
    businessDesc: string;
    proTitle: string;
    proDesc: string;
    govTitle: string;
    govDesc: string;
    viewDetails: string;
    enquire: string;
  };

  // Why Choose Us
  whyChooseUs: {
    kicker: string;
    title: string;
    desc: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    point3Title: string;
    point3Desc: string;
    deskTitle: string;
    deskBadge: string;
    deskHeading: string;
    deskSubtitle: string;
    capabilitiesTitle: string;
    cap1: string;
    cap2: string;
    cap3: string;
    cap4: string;
    scheduleLabel: string;
    scheduleValue: string;
    walkinLabel: string;
    walkinValue: string;
  };

  // Process
  process: {
    kicker: string;
    title: string;
    desc: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };

  // Form
  form: {
    title: string;
    subtitle: string;
    fullName: string;
    phone: string;
    email: string;
    serviceRequired: string;
    message: string;
    placeholderName: string;
    placeholderPhone: string;
    placeholderEmail: string;
    placeholderMessage: string;
    dataProtectionTitle: string;
    dataProtectionNotice: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    referenceLabel: string;
    nextStepsTitle: string;
    step1: string;
    step2: string;
    submitAnother: string;
  };

  // Footer
  footer: {
    desc: string;
    independentOffice: string;
    servicesTitle: string;
    contactTitle: string;
    hoursTitle: string;
    privacy: string;
    terms: string;
    officePortal: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    brandName: 'Jeddah Typing Office',
    brandTagline: 'Ajman, United Arab Emirates',
    locationKicker: 'Opposite Lulu Hypermarket, Al Rashidiya 3, Ajman',
    timingHeader: 'Sat–Thu: 8:00 AM – 9:30 PM | Fri: 4:00 PM – 9:30 PM',
    callMobile: '052 270 9196',
    callOffice: '06 747 3013',
    whatsapp: 'WhatsApp',
    enquireNow: 'Enquire',
    getAssistance: 'Get Service Assistance',

    nav: {
      home: 'Home',
      typing: 'Typing Services',
      businessSetup: 'Business Setup',
      pro: 'PRO Services',
      government: 'Gov Services',
      about: 'About Us',
      faq: 'FAQ',
      contact: 'Contact',
    },

    hero: {
      kicker: 'Ajman, United Arab Emirates · Al Rashidiya 3 · Opposite Lulu Hypermarket',
      headline: 'Accurate Document Typing, Business Setup & PRO Services in Ajman',
      subheadline: 'Your dependable administrative partner for UAE residency visas, Emirates ID typing, Ajman DED trade license paperwork, and corporate PRO support. Reliable, confidential, and conveniently located.',
      ctaWhatsapp: 'WhatsApp Enquiry',
      ctaCall: 'Call 052 270 9196',
      ctaAssistance: 'Get Service Assistance',
      trust1: 'Verified Typing Standards',
      trust2: 'Strict Confidentiality',
      trust3: 'Walk-Ins Welcomed Daily',
    },

    disclaimer: {
      badge: 'Official Disclaimer',
      text: 'Jeddah Typing Office is an independent private administrative typing office in Ajman. We assist with document preparation and submission coordination. We are not a government agency, and all approvals, visa decisions, and trade licenses remain subject to competent UAE government authority criteria.',
    },

    homeServices: {
      kicker: 'Comprehensive Solutions · Accurate Paperwork',
      title: 'Our Core Typing & Administrative Services',
      desc: 'We streamline complex UAE documentation with precision, clear requirement checklists, and prompt attention to deadlines.',
      typingTitle: 'Document Typing & Form Filling',
      typingDesc: 'Official form preparation for Emirates ID, Medical Fitness, MOHRE labour contracts, and Tasdeeq tenancy agreements.',
      businessTitle: 'Business Setup in Ajman',
      businessDesc: 'Guidance and document preparation for new trade licenses with Ajman DED, activity selection, MOA typing, and renewals.',
      proTitle: 'PRO & Residency Services',
      proDesc: 'Administrative submission coordination for investor visas, corporate employment quotas, and family residency sponsorships.',
      govTitle: 'Government Document Support',
      govDesc: 'Accurate formatting, MOFA attestation coordination, Police Clearance Certificates, and official administrative petitions.',
      viewDetails: 'View Service Details',
      enquire: 'Enquire Now',
    },

    whyChooseUs: {
      kicker: 'The Jeddah Advantage · Accuracy & Privacy',
      title: 'Why Individuals & Businesses Trust Us in Ajman',
      desc: 'Administrative paperwork in the UAE demands strict adherence to dynamic ministerial rules. A single spelling discrepancy in Arabic or a missing document can lead to rejection and unnecessary fines.',
      point1Title: 'Precision & Verification First',
      point1Desc: 'Every form is cross-checked against your passport, entry stamps, and previous government records to ensure zero typing errors.',
      point2Title: 'Total Client Confidentiality',
      point2Desc: 'We treat your commercial records, corporate agreements, and identity documents with strict professional privacy protocols.',
      point3Title: 'Prime & Accessible Ajman Location',
      point3Desc: 'Office No. 3, same building as Panoor Restaurant, directly opposite Lulu Hypermarket in Al Rashidiya 3, with convenient parking nearby.',
      deskTitle: 'Office Desk Overview',
      deskBadge: 'Al Rashidiya 3, Ajman',
      deskHeading: 'Jeddah Typing Office Service Desk',
      deskSubtitle: 'Office No. 3, same building as Panoor Restaurant, opposite Lulu Hypermarket.',
      capabilitiesTitle: 'Daily Verified Service Capabilities:',
      cap1: 'Emirates ID & Medical Typing (ICP / MoHAP)',
      cap2: 'Ajman DED Business Setup & MOA (Mainland DED)',
      cap3: 'Employment & Residence Visas (MOHRE & ICP)',
      cap4: 'Tasdeeq Tenancy Form Filling (Ajman Municipality)',
      scheduleLabel: 'Working Schedule:',
      scheduleValue: 'Sat–Thu: 8 AM–9:30 PM | Fri: 4–9:30 PM',
      walkinLabel: 'Walk-In Status:',
      walkinValue: 'Open & Welcoming Walk-Ins',
    },

    process: {
      kicker: 'Seamless Workflow · 4 Steps',
      title: 'How We Handle Your Paperwork',
      desc: 'From initial review to final government clearance confirmation, we keep you informed at every milestone.',
      step1Title: 'Consultation & Review',
      step1Desc: 'Bring your requirements to our office or enquire via WhatsApp. We check your document prerequisites against official UAE criteria.',
      step2Title: 'Precision Form Typing',
      step2Desc: 'Our experienced administrative typists prepare your official applications with meticulous accuracy and standardized formatting.',
      step3Title: 'Submission Coordination',
      step3Desc: 'We assist with uploading and routing your applications to the respective government portal (ICP, MOHRE, or Ajman DED).',
      step4Title: 'Receipts & Status Tracking',
      step4Desc: 'Receive your official government application slips, reference numbers, biometric appointments, and completion notifications.',
    },

    form: {
      title: 'Request Service Assistance',
      subtitle: 'Fill in your details below. Our Ajman office team will contact you promptly.',
      fullName: 'Full Name',
      phone: 'Phone / WhatsApp',
      email: 'Email Address',
      serviceRequired: 'Service Required',
      message: 'Your Requirements or Questions',
      placeholderName: 'e.g. Mohammed Salem',
      placeholderPhone: 'e.g. 052 270 9196',
      placeholderEmail: 'e.g. yourname@example.com',
      placeholderMessage: 'Describe what paperwork you need assistance with (e.g., renewing an Ajman trade license, typing new visas, or family residency)...',
      dataProtectionTitle: 'Data Protection Notice:',
      dataProtectionNotice: 'Please do NOT attach or paste sensitive personal files (such as copies of Emirates ID, passport scans, or credit card numbers) into this online inquiry form. All identity documents are reviewed in-person at our office or via direct encrypted channels.',
      submitButton: 'Send Enquiry to Jeddah Typing Office',
      submitting: 'Submitting Enquiry to Office...',
      successTitle: 'Enquiry Received',
      referenceLabel: 'Reference ID',
      nextStepsTitle: 'What happens next?',
      step1: '1. An administrative consultant will review your service requirements.',
      step2: '2. We will contact you via WhatsApp or phone with required document checklists and official guidance.',
      submitAnother: 'Submit Another Enquiry',
    },

    footer: {
      desc: 'Professional document preparation, typing services, Ajman trade licence paperwork support, and PRO government liaison assistance. Located in Al Rashidiya 3, Ajman.',
      independentOffice: 'Independent Private Office',
      servicesTitle: 'Services & Navigation',
      contactTitle: 'Contact & Inquiries',
      hoursTitle: 'Office Hours',
      privacy: 'Privacy Notice',
      terms: 'Terms of Service',
      officePortal: 'Office Portal',
      rights: 'All rights reserved. Ajman, UAE.',
    },
  },

  ar: {
    brandName: 'مكتب جدة للطباعة',
    brandTagline: 'عجمان، الإمارات العربية المتحدة',
    locationKicker: 'مقابل لولو هايبر ماركت، الراشدية 3، عجمان',
    timingHeader: 'السبت–الخميس: 8:00 ص – 9:30 م | الجمعة: 4:00 م – 9:30 م',
    callMobile: '052 270 9196',
    callOffice: '06 747 3013',
    whatsapp: 'واتساب',
    enquireNow: 'استفسر الآن',
    getAssistance: 'طلب مساعدة في المعاملات',

    nav: {
      home: 'الرئيسية',
      typing: 'خدمات الطباعة',
      businessSetup: 'تأسيس الشركات',
      pro: 'خدمات تخليص المعاملات (PRO)',
      government: 'الخدمات الحكومية والتوثيق',
      about: 'من نحن',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
    },

    hero: {
      kicker: 'عجمان، الإمارات العربية المتحدة · الراشدية 3 · مقابل لولو هايبر ماركت',
      headline: 'طباعة المستندات وتأسيس الشركات وتخليص المعاملات في عجمان',
      subheadline: 'شريكك الإداري الموثوق لطباعة استمارات الهوية الإماراتية، وتأشيرات الإقامة، ومعاملات الرخص التجارية بدائرة التنمية الاقتصادية بعجمان، وتخليص معاملات الشركات والأفراد بدقة وسرية تامة.',
      ctaWhatsapp: 'تواصل عبر واتساب',
      ctaCall: 'اتصال: 052 270 9196',
      ctaAssistance: 'طلب المساعدة في المعاملات',
      trust1: 'معايير طباعة دقيقة ومعتمدة',
      trust2: 'سرية وأمان تام للبيانات',
      trust3: 'نرحب بزيارتكم دون موعد مسبق',
    },

    disclaimer: {
      badge: 'إخلاء مسؤولية رسمي',
      text: 'مكتب جدة للطباعة هو مكتب خاص مرخص لخدمات الطباعة والدعم الإداري وتنسيق المستندات في عجمان. نحن لسنا دائرة حكومية، وتخضع جميع الموافقات وإصدار التأشيرات وتراخيص الأعمال للشروط والأنظمة الصادرة عن الجهات الحكومية المختصة بدولة الإمارات.',
    },

    homeServices: {
      kicker: 'حلول إدارية شاملة · دقة في طباعة المعاملات',
      title: 'خدماتنا الرئيسية في الطباعة والدعم الإداري',
      desc: 'نسهل عليك إجراءات المعاملات الحكومية الرسمية في الإمارات وفق أعلى معايير الدقة والسرعة وقوائم المتطلبات المعتمدة.',
      typingTitle: 'طباعة المستندات وتعبئة الاستمارات',
      typingDesc: 'طباعة استمارات الهوية الإماراتية، الفحص الطبي للإقامة، عقود وزارة الموارد البشرية (تسهيل)، وتصديق عقود الإيجار.',
      businessTitle: 'تأسيس وتجديد الشركات في عجمان',
      businessDesc: 'المساعدة في اختيار الأنشطة الاقتصادية، حجز الأسماء التجارية، طباعة عقود التأسيس (MOA)، وتجديد رخص اقتصادية عجمان.',
      proTitle: 'خدمات العلاقات العامة والإقامات (PRO)',
      proDesc: 'تنسيق معاملات تأشيرات المستثمر، وتأشيرات العمل والعمال، والإقامة العائلية، وفتح وتجديد بطاقات المنشأة.',
      govTitle: 'الخدمات الحكومية وتصديق الشهادات',
      govDesc: 'تنسيق تصديقات وزارة الخارجية (MOFA)، وإصدار شهادات بحث الحالة الجنائية، وصياغة الخطابات والتوكيلات الرسمية.',
      viewDetails: 'عرض تفاصيل الخدمة',
      enquire: 'استفسر الآن',
    },

    whyChooseUs: {
      kicker: 'مزايا مكتب جدة · الدقة والخصوصية',
      title: 'لماذا يختارنا الأفراد والشركات في عجمان؟',
      desc: 'تتطلب المعاملات الإدارية في دولة الإمارات التزاماً تاماً بالضوابط الحكومية؛ فأي خطأ في الحروف أو نقص في الأوراق قد يؤدي إلى رفض المعاملة أو فرض غرامات تأخير.',
      point1Title: 'دقة وتدقيق شامل أولاً',
      point1Desc: 'تتم مراجعة وتدقيق كل اسم ورقم جواز وتاريخ ميلاد بدقة متناهية مقارنة بالأوراق الثبوتية الأصلية لتفادي أي أخطاء طباعية.',
      point2Title: 'سرية تامة لبيانات العملاء',
      point2Desc: 'نتعامل مع مستنداتكم الشخصية وعقود الشركات بمهنية وأمان وفق قانون حماية البيانات الشخصية في دولة الإمارات.',
      point3Title: 'موقع مميز يسهل الوصول إليه',
      point3Desc: 'مكتب رقم 3، نفس مبنى مطعم بانور، مقابل لولو هايبر ماركت، الراشدية 3، عجمان، مع توفر مواقف سيارات مريحة.',
      deskTitle: 'نظرة عامة على مكتب الخدمة',
      deskBadge: 'الراشدية 3، عجمان',
      deskHeading: 'مكتب خدمة عملاء جدة للطباعة',
      deskSubtitle: 'مكتب رقم 3، نفس مبنى مطعم بانور، مقابل لولو هايبر ماركت.',
      capabilitiesTitle: 'الخدمات اليومية المعتمدة بالمكتب:',
      cap1: 'طباعة الهوية الإماراتية والفحص الطبي (ICP / MoHAP)',
      cap2: 'تأسيس شركات اقتصادية عجمان وعقود التأسيس (MOA)',
      cap3: 'تأشيرات العمل والإقامات العائلية (MOHRE & ICP)',
      cap4: 'تعبئة استمارات تصديق عقود الإيجار (بلدية عجمان)',
      scheduleLabel: 'أوقات العمل الرسمية:',
      scheduleValue: 'السبت–الخميس: 8 ص – 9:30 م | الجمعة: 4 – 9:30 م',
      walkinLabel: 'استقبال المراجعين:',
      walkinValue: 'نرحب بزيارتكم طوال ساعات العمل',
    },

    process: {
      kicker: 'إجراءات واضحة وسريعة · 4 خطوات',
      title: 'كيف ننجز معاملاتكم الإدارية؟',
      desc: 'من التدقيق الأولي للأوراق وحتى استلام الإيصال الرسمي ومتابعة حالة الطلب.',
      step1Title: '1. الاستشارة ومراجعة الأوراق',
      step1Desc: 'تفضل بزيارة مكتبنا أو تواصل معنا عبر واتساب لفحص المتطلبات مقارنة بالاشتراطات الحكومية الحالية.',
      step2Title: '2. الطباعة الاحترافية الدقيقة',
      step2Desc: 'يقوم موظفونا بطباعة وتعبئة الاستمارات الرسمية باللغتين العربية والإنجليزية وفق النماذج المعتمدة.',
      step3Title: '3. رفع المعاملة للنظام الحكومي',
      step3Desc: 'المساعدة في تقديم الطلبات عبر البوابات الإلكترونية المعتمدة (الهوية، وزارة العمل، أو اقتصادية عجمان).',
      step4Title: '4. تسليم الإيصالات وتتبع الطلب',
      step4Desc: 'استلام رقم المعاملة الرسمي، وإيصالات الدفع، ومواعيد البصمة الطبية، وإشعارك فور صدور الاعتماد.',
    },

    form: {
      title: 'طلب مساعدة في المعاملات الإدارية',
      subtitle: 'يرجى إدخال تفاصيل طلبك أدناه، وسيتواصل معك فريق مكتبنا في عجمان سريعاً.',
      fullName: 'الاسم الكامل',
      phone: 'رقم الهاتف / واتساب',
      email: 'البريد الإلكتروني',
      serviceRequired: 'الخدمة المطلوبة',
      message: 'تفاصيل المعاملة أو استفسارك',
      placeholderName: 'مثال: محمد سالم الشامسي',
      placeholderPhone: 'مثال: 052 270 9196',
      placeholderEmail: 'مثال: name@example.com',
      placeholderMessage: 'يرجى كتابة نوع المعاملة (مثال: تجديد رخصة تجارية في عجمان، إصدار تأشيرة عمل جديدة، طباعة هوية إماراتية، أو إقامة عائلية)...',
      dataProtectionTitle: 'تنبيه أمان وخصوصية البيانات:',
      dataProtectionNotice: 'حرصاً على أمانك، يُرجى عدم إرفاق أو كتابة بيانات وثائق حساسة (مثل صور جوازات السفر أو بطاقات الهوية أو الحسابات المصرفية) في هذا النموذج الإلكتروني العام. يتم تدقيق الأوراق الأصلية شخصياً في المكتب أو عبر قنوات واتساب المباشرة والمشفرة.',
      submitButton: 'إرسال الطلب لمكتب جدة للطباعة',
      submitting: 'جاري إرسال الطلب...',
      successTitle: 'تم استلام طلبك بنجاح',
      referenceLabel: 'رقم المرجع',
      nextStepsTitle: 'ما هي الخطوة التالية؟',
      step1: '1. سيقوم مستشار المعاملات بمراجعة نوع الخدمة المطلوبة.',
      step2: '2. سنتواصل معك عبر الهاتف أو الواتساب بقائمة المتطلبات والرسوم والخطوات القادمة.',
      submitAnother: 'إرسال طلب جديد',
    },

    footer: {
      desc: 'خدمات طباعة المستندات وتجهيز استمارات المعاملات، ودعم تأسيس وتجديد الرخص التجارية في عجمان، وتخليص المعاملات الإدارية للمؤسسات والأفراد. الراشدية 3، عجمان.',
      independentOffice: 'مكتب خاص معتمد للطباعة',
      servicesTitle: 'الخدمات والصفحات',
      contactTitle: 'الاتصال والموقع',
      hoursTitle: 'أوقات العمل',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      officePortal: 'بوابة إدارة المكتب',
      rights: 'جميع الحقوق محفوظة. عجمان، الإمارات العربية المتحدة.',
    },
  },
};
